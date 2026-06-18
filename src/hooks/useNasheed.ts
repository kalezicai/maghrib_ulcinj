"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface AudioSynth {
  context: AudioContext;
  oscillators: OscillatorNode[];
}

export function useNasheed() {
  const [isPlaying, setIsPlaying] = useState(false);
  const synthRef = useRef<AudioSynth | null>(null);

  const toggle = useCallback(() => {
    if (isPlaying) {
      if (synthRef.current) {
        synthRef.current.oscillators.forEach((osc) => osc.stop());
        synthRef.current.context.close();
        synthRef.current = null;
      }
      setIsPlaying(false);
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.06, ctx.currentTime);
        masterGain.connect(ctx.destination);

        const freqs = [130.81, 196.00, 261.63, 329.63, 392.00];
        const oscillators = freqs.map((f, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(f, ctx.currentTime);
          gain.gain.setValueAtTime(0.1 + i * 0.02, ctx.currentTime);
          osc.connect(gain);
          gain.connect(masterGain);
          osc.start(0);

          let t = 0;
          const interval = setInterval(() => {
            if (ctx.state === "closed") { clearInterval(interval); return; }
            t += 0.1;
            const vol = (Math.sin(t * (0.2 + i * 0.05)) + 1) / 2 * 0.1 + 0.05;
            try { gain.gain.setTargetAtTime(vol, ctx.currentTime, 0.5); } catch {}
          }, 500);

          return osc;
        });

        synthRef.current = { context: ctx, oscillators };
        setIsPlaying(true);
      } catch {
        setIsPlaying(true);
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      if (synthRef.current) {
        synthRef.current.oscillators.forEach((osc) => osc.stop());
        synthRef.current.context.close();
      }
    };
  }, []);

  return { isPlaying, toggle };
}
