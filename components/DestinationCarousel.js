"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export default function DestinationCarousel({ slides }) {
  const safeSlides = useMemo(() => (Array.isArray(slides) ? slides : []), [slides]);
  const totalSlides = safeSlides.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const showNext = () => {
    if (totalSlides <= 1) {
      return;
    }
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const showPrev = () => {
    if (totalSlides <= 1) {
      return;
    }
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  if (totalSlides === 0) {
    return null;
  }

  return (
    <div className="destination-carousel" aria-label="Slider negara tujuan">
      <button
        type="button"
        className="destination-nav destination-nav-prev"
        onClick={showPrev}
        aria-label="Slide sebelumnya"
      >
        <i className="bi bi-chevron-left" aria-hidden="true" />
      </button>

      <div className="destination-viewport">
        <div className="destination-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {safeSlides.map((slide) => (
            <article key={slide.key} className={`destination-slide destination-item ${slide.key}`}>
              <div className="destination-media">
                <Image className="destination-icon" src={slide.image} alt={slide.alt} width={736} height={460} />
              </div>
              <div className="destination-content">
                <h3>{slide.title}</h3>
                <p className="destination-age">{slide.age}</p>
                <ul className="destination-points">
                  {slide.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="destination-nav destination-nav-next"
        onClick={showNext}
        aria-label="Slide berikutnya"
      >
        <i className="bi bi-chevron-right" aria-hidden="true" />
      </button>

      <div className="destination-dots" role="tablist" aria-label="Pilih negara tujuan">
        {safeSlides.map((slide, index) => (
          <button
            key={slide.key}
            type="button"
            className={`destination-dot${activeIndex === index ? " active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Buka slide ${slide.title}`}
            aria-pressed={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
}
