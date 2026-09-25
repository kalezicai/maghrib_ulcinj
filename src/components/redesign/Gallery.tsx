import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Khatim } from './Brand';
import HotelImage from './HotelImage';
import { galleryPhotos, type GalleryCategory } from '@/data/redesign/hotel';

const categories: ('All photographs' | GalleryCategory)[] = ['All photographs', 'The hotel', 'Rooms & suites', 'Dining', 'Wellness', 'Sea views'];

export default function Gallery({ initialPhoto }: { initialPhoto?: number }) {
  const [category, setCategory] = useState<(typeof categories)[number]>('All photographs');
  const [selectedId, setSelectedId] = useState<number | null>(initialPhoto ?? null);
  const reducedMotion = useReducedMotion();
  const contentRef = useRef<HTMLDivElement>(null);
  const isViewingPhoto = selectedId !== null;
  const filtered = category === 'All photographs' ? galleryPhotos : galleryPhotos.filter((image) => image.category === category);
  const selectedIndex = filtered.findIndex((image) => image.id === selectedId);
  const selected = selectedIndex >= 0 ? filtered[selectedIndex] : null;

  useEffect(() => {
    const dialog = contentRef.current?.closest('dialog');
    if (!dialog?.open) return;
    dialog.scrollTop = 0;
    const focusTarget = contentRef.current?.querySelector<HTMLButtonElement>(isViewingPhoto ? '.lightbox-top button' : '[aria-pressed="true"]');
    focusTarget?.focus({ preventScroll: true });
  }, [isViewingPhoto]);

  const advance = (direction: number) => {
    const next = (selectedIndex + direction + filtered.length) % filtered.length;
    setSelectedId(filtered[next].id);
  };

  useEffect(() => {
    if (selectedId === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        const direction = event.key === 'ArrowRight' ? 1 : -1;
        const next = (selectedIndex + direction + filtered.length) % filtered.length;
        setSelectedId(filtered[next].id);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedId, selectedIndex, filtered]);

  if (selected) {
    return (
      <div className="lightbox" ref={contentRef}>
        <div className="lightbox-top">
          <button className="text-link" onClick={() => setSelectedId(null)}><ArrowLeft size={17} /> Back to photographs</button>
          <span>{String(selectedIndex + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}</span>
        </div>
        <div className="lightbox-stage">
          <AnimatePresence mode="wait">
            <motion.div key={selected.id} className="lightbox-image" initial={{ opacity: reducedMotion ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: reducedMotion ? 1 : 0 }} transition={{ duration: 0.2 }}>
              <HotelImage src={selected.src} alt={selected.title} />
            </motion.div>
          </AnimatePresence>
          <button className="lightbox-arrow lightbox-arrow--previous icon-button" onClick={() => advance(-1)} aria-label="Previous photograph"><ChevronLeft size={24} /></button>
          <button className="lightbox-arrow lightbox-arrow--next icon-button" onClick={() => advance(1)} aria-label="Next photograph"><ChevronRight size={24} /></button>
        </div>
        <div className="lightbox-caption" aria-live="polite"><h3>{selected.title}</h3><span>HOTEL MAGHRIB / {selected.category.toUpperCase()}</span></div>
      </div>
    );
  }

  return (
    <div className="gallery-dialog-content" ref={contentRef}>
      <p className="eyebrow"><Khatim className="eyebrow-star" />THROUGH OUR LENS</p>
      <h2>A feeling, <em>in photographs.</em></h2>
      <p className="form-description">The real rooms, familiar corners, and slower moments of Hotel Maghrib. All {galleryPhotos.length} original hotel photographs.</p>
      <div className="gallery-filters" role="group" aria-label="Filter photographs">
        {categories.map((item) => <button key={item} className={item === category ? 'is-active' : ''} aria-pressed={item === category} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <div className="gallery-dialog-grid">
        {filtered.map((image) => (
          <button className="gallery-tile" key={image.id} onClick={() => setSelectedId(image.id)} aria-label={`View ${image.title}`}>
            <div className="gallery-tile-image"><HotelImage src={image.src} alt={image.title} loading="lazy" /><span className="gallery-zoom"><ArrowUpRight size={22} /></span></div>
            <span>{image.title}<ArrowRight size={16} /></span>
          </button>
        ))}
      </div>
      <p className="gallery-count" role="status">{filtered.length} photographs / A little closer to Maghrib</p>
    </div>
  );
}
