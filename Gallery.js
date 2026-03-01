'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

export default function Gallery({ images = [] }) {
  const [active, setActive] = useState(null);

  const items = useMemo(() => {
    return images.map((src) => ({
      src,
      alt: 'S.M.I.L.E-ing Boys portrait'
    }));
  }, [images]);

  return (
    <>
      <div className="gallery">
        {items.map((img, idx) => (
          <button
            key={img.src + idx}
            className="thumb"
            onClick={() => setActive(img)}
            aria-label="Open portrait"
            style={{ padding: 0, cursor: 'pointer' }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 980px) 50vw, 25vw"
            />
          </button>
        ))}
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        src={active?.src}
        alt={active?.alt}
      />
    </>
  );
}
