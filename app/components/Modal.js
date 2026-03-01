'use client';

import Image from 'next/image';

export default function Modal({ open, onClose, src, alt }) {
  if (!open) return null;

  return (
    <div className="modalBackdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalTop">
          <b>{alt || 'Portrait'}</b>
          <button className="btn" onClick={onClose} aria-label="Close">Close</button>
        </div>
        <div className="modalBody">
          <Image
            src={src}
            alt={alt || 'Portrait'}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 980px) 96vw, 980px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
