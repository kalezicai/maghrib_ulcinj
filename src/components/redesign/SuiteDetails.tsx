import { useState } from 'react';
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { photo, roomAmenities, type Suite } from '@/data/redesign/hotel';
import { Khatim } from './Brand';
import HotelImage from './HotelImage';

export default function SuiteDetails({ suite, onBook }: { suite: Suite; onBook: () => void }) {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="suite-dialog">
      <div className="suite-dialog-photo">
        <HotelImage key={suite.images[imageIndex]} src={photo(suite.images[imageIndex])} alt={`${suite.name}, Hotel Maghrib photograph ${imageIndex + 1}`} />
        <div className="suite-photo-controls"><button className="icon-button" aria-label="Previous room photograph" onClick={() => setImageIndex((imageIndex + suite.images.length - 1) % suite.images.length)}><ChevronLeft size={20} /></button><span>{imageIndex + 1} / {suite.images.length}</span><button className="icon-button" aria-label="Next room photograph" onClick={() => setImageIndex((imageIndex + 1) % suite.images.length)}><ChevronRight size={20} /></button></div>
      </div>
      <div className="suite-dialog-copy">
        <p className="eyebrow"><Khatim className="eyebrow-star" />YOUR PRIVATE SEA-VIEW RETREAT</p>
        <h2>{suite.name}</h2>
        <p className="suite-dialog-facts">{suite.size} m<sup>2</sup><span>/</span>Up to {suite.guests} guests<span>/</span>Private balcony</p>
        <p className="body-copy">{suite.description}</p>
        {suite.id === 'deluxe' && <p className="form-note">Bed configuration: one premium orthopedic king bed.</p>}
        <h3>Considered in every detail</h3>
        <ul className="amenities-list">{roomAmenities.map((amenity) => <li key={amenity}><Check size={15} strokeWidth={1.5} />{amenity}</li>)}</ul>
        <div className="suite-dialog-booking"><p>From <strong>&euro;{suite.price}</strong><span> / night</span></p><button className="button button--rust" onClick={onBook}>Inquire about this room <ArrowRight size={17} /></button></div>
        <p className="form-note">Images are from our original hotel collection. Exact room layout, final rates, and availability are confirmed by our reservations team.</p>
      </div>
    </div>
  );
}
