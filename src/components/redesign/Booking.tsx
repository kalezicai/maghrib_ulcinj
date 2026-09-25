import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Check, Copy, Mail, MessageCircle, Phone } from 'lucide-react';
import { Khatim, SunMark } from './Brand';
import HotelImage from './HotelImage';
import {
  dateAfter,
  emailLink,
  formatDate,
  HOTEL_PHONE,
  PHONE_LINK,
  photo,
  suites,
  whatsappLink,
  type Suite,
} from '@/data/redesign/hotel';

interface InquiryReadyProps {
  message: string;
  subject: string;
  onEdit: () => void;
  children?: ReactNode;
}

export function InquiryReady({ message, subject, onEdit, children }: InquiryReadyProps) {
  const [copyStatus, setCopyStatus] = useState('');
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  async function copyInquiry() {
    try {
      await navigator.clipboard.writeText(message);
      setCopyStatus('Your inquiry has been copied.');
    } catch {
      if (detailsRef.current) detailsRef.current.open = true;
      messageRef.current?.focus();
      messageRef.current?.select();
      setCopyStatus('Your inquiry is selected. Copy it using your device controls.');
    }
  }

  return (
    <div className="inquiry-ready">
      <SunMark className="form-sun" />
      <p className="eyebrow"><Khatim className="eyebrow-star" />YOUR INQUIRY IS READY</p>
      <h2>One step closer<br /><em>to your escape.</em></h2>
      <p className="form-description">Send your details directly to our team using your preferred channel. Your request is not sent until you continue below.</p>
      {children}
      <div className="inquiry-actions">
        <a className="button button--rust" href={whatsappLink(message)} target="_blank" rel="noreferrer">
          <MessageCircle size={17} /> Continue in WhatsApp <ArrowRight size={17} />
        </a>
        <a className="button button--outline" href={emailLink(subject, message)}>
          <Mail size={17} /> Send by email <ArrowRight size={17} />
        </a>
      </div>
      <p className="form-note">Availability, final pricing, and your reservation will be confirmed personally by Hotel Maghrib. No payment has been taken.</p>
      <details className="inquiry-preview" ref={detailsRef}>
        <summary>Review your inquiry</summary>
        <textarea ref={messageRef} readOnly value={message} rows={9} aria-label="Your inquiry message" />
      </details>
      <div className="form-bottom-actions">
        <button className="text-link" onClick={onEdit}><ArrowLeft size={15} /> Edit details</button>
        <button className="text-link" onClick={copyInquiry}><Copy size={15} /> Copy inquiry</button>
      </div>
      <p className="copy-status" role="status">{copyStatus}</p>
    </div>
  );
}

export default function Booking({ initialSuite }: { initialSuite?: Suite }) {
  const [suiteId, setSuiteId] = useState(initialSuite?.id ?? suites[0].id);
  const [arrival, setArrival] = useState(dateAfter(7));
  const [departure, setDeparture] = useState(dateAfter(10));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);
  const suite = suites.find((item) => item.id === suiteId) ?? suites[0];
  const nights = Math.max(0, Math.round((Date.parse(`${departure}T12:00:00Z`) - Date.parse(`${arrival}T12:00:00Z`)) / 86400000));
  const currency = (value: number) => new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);

  useEffect(() => {
    const dialog = contentRef.current?.closest('dialog');
    if (!dialog?.open) return;
    dialog.scrollTop = 0;
    const heading = contentRef.current?.querySelector('h2');
    if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
  }, [step]);

  function continueStay(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!arrival || arrival < dateAfter(0) || !departure || !Number.isFinite(nights) || nights < 1) {
      setError('Please choose an arrival date from today onward and a later departure date.');
      return;
    }
    if (adults + children > suite.guests) {
      setError(`${suite.name} accommodates up to ${suite.guests} guests. Please adjust your guests or select a larger suite.`);
      return;
    }
    setError('');
    setStep(2);
  }

  function updateArrival(value: string) {
    setArrival(value);
    if (value && departure <= value) setDeparture(dateAfter(1, new Date(`${value}T12:00:00`)));
  }

  const inquiry = [
    'Hello Hotel Maghrib, I would like to inquire about a stay.',
    '',
    `Suite: ${suite.name} with sea view`,
    `Arrival: ${formatDate(arrival)}`,
    `Departure: ${formatDate(departure)} (${nights} ${nights === 1 ? 'night' : 'nights'})`,
    `Guests: ${adults} ${adults === 1 ? 'adult' : 'adults'} and ${children} ${children === 1 ? 'child' : 'children'}`,
    `Indicative rate: from ${currency(suite.price)} per night. Please confirm the final rate.`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : '',
    notes ? `Special requests: ${notes}` : '',
    '',
    'Please confirm availability and reservation terms. Thank you!',
  ].filter((line) => line !== undefined).join('\n');

  return (
    <div className="booking-layout">
      <aside className="booking-aside">
        <HotelImage key={suite.image} src={photo(suite.image)} alt={suite.name} />
        <div className="booking-aside-shade" />
        <div className="booking-aside-content">
          <SunMark className="booking-mark" />
          <p className="eyebrow"><Khatim className="eyebrow-star" />A WARM WELCOME AWAITS</p>
          <p className="booking-aside-title">A little closer<br /><em>to peace.</em></p>
          <span>Hotel Maghrib, Ulcinj</span>
          <a href={PHONE_LINK}><Phone size={14} />{HOTEL_PHONE}</a>
        </div>
      </aside>
      <div className="booking-main" ref={contentRef}>
        {step < 3 ? (
          <>
            <div className="form-progress" aria-label={`Step ${step} of 2`}>
              <span className={step === 1 ? 'is-active' : 'is-complete'}>{step > 1 ? <Check size={13} /> : '01'} Your stay</span>
              <i />
              <span className={step === 2 ? 'is-active' : ''}>02 Your details</span>
            </div>
            {step === 1 ? (
              <form onSubmit={continueStay}>
                <p className="eyebrow"><Khatim className="eyebrow-star" />MAKE YOURSELF AT HOME</p>
                <h2>Your sea-view<br /><em>escape starts here.</em></h2>
                <p className="form-description">A few details, and we will help make the rest feel effortless.</p>
                <div className="form-grid">
                  <label className="field">Arrival
                    <input type="date" value={arrival} onChange={(event) => updateArrival(event.target.value)} min={dateAfter(0)} required />
                  </label>
                  <label className="field">Departure
                    <input type="date" value={departure} onChange={(event) => setDeparture(event.target.value)} min={arrival ? dateAfter(1, new Date(`${arrival}T12:00:00`)) : dateAfter(1)} required />
                  </label>
                  <label className="field">Adults
                    <select value={adults} onChange={(event) => setAdults(Number(event.target.value))}>
                      {[1, 2, 3, 4, 5].map((count) => <option key={count} value={count}>{count} {count === 1 ? 'adult' : 'adults'}</option>)}
                    </select>
                  </label>
                  <label className="field">Children
                    <select value={children} onChange={(event) => setChildren(Number(event.target.value))}>
                      {[0, 1, 2, 3, 4].map((count) => <option key={count} value={count}>{count === 0 ? 'No children' : `${count} ${count === 1 ? 'child' : 'children'}`}</option>)}
                    </select>
                  </label>
                  <label className="field field--full">Your preferred room
                    <select value={suiteId} onChange={(event) => { setSuiteId(event.target.value); setError(''); }}>
                      {suites.map((item) => <option key={item.id} value={item.id}>{item.name} / up to {item.guests} guests</option>)}
                    </select>
                  </label>
                </div>
                <div className="stay-estimate">
                  <div><span>YOUR STAY, AT A GLANCE</span><p>{nights || 'Select your'} {nights === 1 ? 'night' : 'nights'} <span className="estimate-separator">/</span> {adults + children} guests</p></div>
                  <div><span>FROM, PER NIGHT</span><p className="estimate-price">{currency(suite.price)}</p></div>
                </div>
                {error && <p className="form-error" role="alert">{error}</p>}
                <button className="button button--rust form-submit" type="submit">Continue to your details <ArrowRight size={17} /></button>
                <p className="form-note">A personal inquiry, with no payment required. Rates and availability are confirmed by our team.</p>
              </form>
            ) : (
              <form onSubmit={(event) => {
                event.preventDefault();
                if (name.trim().length < 2) { setError('Please enter your full name.'); return; }
                setError('');
                setStep(3);
              }}>
                <p className="eyebrow"><Khatim className="eyebrow-star" />LET US MAKE IT PERSONAL</p>
                <h2>Every great stay<br /><em>begins with hello.</em></h2>
                <p className="form-description">{suite.name}<br />{formatDate(arrival)} to {formatDate(departure)}</p>
                <div className="form-grid">
                  <label className="field field--full">Your full name<input autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} required minLength={2} maxLength={100} placeholder="How should we welcome you?" /></label>
                  <label className="field field--full">Email address<input type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="you@example.com" /></label>
                  <label className="field field--full">Phone number <span className="optional">(optional)</span><input type="tel" autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} maxLength={30} placeholder="Include your country code" /></label>
                  <label className="field field--full">Anything we can arrange? <span className="optional">(optional)</span><textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={2} maxLength={1500} placeholder="Airport transfers, dietary needs, or a special occasion..." /></label>
                </div>
                <label className="checkbox-field"><input type="checkbox" required /> <span>I understand this is an inquiry, not a confirmed reservation.</span></label>
                {error && <p className="form-error" role="alert">{error}</p>}
                <button className="button button--rust form-submit" type="submit">Prepare my inquiry <ArrowRight size={17} /></button>
                <button className="text-link form-back" type="button" onClick={() => { setError(''); setStep(1); }}><ArrowLeft size={15} /> Back to your stay</button>
              </form>
            )}
          </>
        ) : (
          <InquiryReady message={inquiry} subject={`Stay inquiry: ${suite.name}, ${arrival}`} onEdit={() => setStep(2)}>
            <div className="ready-summary"><span>{suite.name}</span><p>{formatDate(arrival)} to {formatDate(departure)}</p><small>{nights} {nights === 1 ? 'night' : 'nights'} / {adults + children} guests</small></div>
          </InquiryReady>
        )}
      </div>
    </div>
  );
}

export function SpaBooking() {
  const [date, setDate] = useState(dateAfter(1));
  const [slot, setSlot] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [room, setRoom] = useState('');
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  useEffect(() => {
    const dialog = contentRef.current?.closest('dialog');
    if (!dialog?.open) return;
    dialog.scrollTop = 0;
    const heading = contentRef.current?.querySelector('h2');
    if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
  }, [ready]);

  const time = (hour: number) => `${String(hour).padStart(2, '0')}:00`;
  const message = [
    'Hello Hotel Maghrib, I would like to request a private family spa session.',
    '',
    `Preferred date: ${formatDate(date)}`,
    `Preferred time: ${slot}`,
    'Duration: 1 hour / Pool, jacuzzi and sauna',
    `Name: ${name}`,
    `Email: ${email}`,
    room ? `Room number: ${room}` : 'Room number: Not yet checked in',
    '',
    'Please confirm availability, any charges, and my private time slot. Thank you!',
  ].join('\n');

  if (ready) return <div className="spa-form-wrap" ref={contentRef}><InquiryReady message={message} subject={`Private spa inquiry: ${date}, ${slot}`} onEdit={() => setReady(false)}><div className="ready-summary"><span>Your private spa moment</span><p>{formatDate(date)} / {slot}</p><small>Exclusive family use, subject to confirmation</small></div></InquiryReady></div>;

  return (
    <div className="spa-form-wrap" ref={contentRef}>
      <p className="eyebrow"><Khatim className="eyebrow-star" />THE PRIVATE SPA CONCIERGE</p>
      <h2>Just you.<br /><em>And a little stillness.</em></h2>
      <p className="form-description">Request a private one-hour session of our indoor pool, jacuzzi, and cedar sauna, exclusively for your family.</p>
      <div className="spa-hours">
        <div><span>Women & children</span><strong>11:00 - 12:00 / 15:00 - 16:00</strong></div>
        <div><span>Men only</span><strong>14:00 - 15:00</strong></div>
        <div><span>General use</span><strong>Other operational hours, unless reserved</strong></div>
      </div>
      <form onSubmit={(event) => {
        event.preventDefault();
        if (!date || date < dateAfter(1)) { setError('Please select a date from tomorrow onward. For today, call reception.'); return; }
        if (!slot) { setError('Please choose your preferred private time slot.'); return; }
        if (name.trim().length < 2) { setError('Please enter your full name.'); return; }
        setError('');
        setReady(true);
      }}>
        <label className="field">Your preferred date<input type="date" value={date} onChange={(event) => setDate(event.target.value)} min={dateAfter(1)} required /></label>
        <fieldset className="slot-fieldset">
          <legend>Your preferred one-hour session</legend>
          <div className="spa-slots">
            {hours.map((hour) => {
              const restricted = hour === 11 || hour === 14 || hour === 15;
              const label = `${time(hour)} - ${time(hour + 1)}`;
              return <button key={hour} type="button" disabled={restricted} aria-pressed={slot === label} className={`spa-slot ${slot === label ? 'is-selected' : ''}`} onClick={() => { setSlot(label); setError(''); }}><span>{label}</span><small>{hour === 14 ? 'Men only' : restricted ? 'Women & children' : 'Private request'}</small></button>;
            })}
          </div>
        </fieldset>
        <div className="form-grid">
          <label className="field">Your name<input autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} minLength={2} maxLength={100} required /></label>
          <label className="field">Room number <span className="optional">(if checked in)</span><input value={room} onChange={(event) => setRoom(event.target.value)} maxLength={12} placeholder="e.g. 204" /></label>
          <label className="field field--full">Email address<input type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label>
        </div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button button--rust form-submit" type="submit">Prepare my spa request <ArrowRight size={17} /></button>
        <p className="form-note">These are preferred times, not live availability. Your private slot is secured only when our concierge confirms. For same-day requests, call <a href={PHONE_LINK}>{HOTEL_PHONE}</a>.</p>
      </form>
    </div>
  );
}
