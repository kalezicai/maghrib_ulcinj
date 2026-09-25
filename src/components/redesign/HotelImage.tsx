import { useState, type ImgHTMLAttributes } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement>;

export default function HotelImage({ alt = '', onError, ...props }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`image-unavailable ${props.className ?? ''}`} role="img" aria-label={alt}>
        <span>MAGHRIB</span>
        <small>This photograph is temporarily unavailable.</small>
      </div>
    );
  }
  return <img {...props} alt={alt} onError={(event) => { setFailed(true); onError?.(event); }} />;
}