import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { story } from '../data/story';
import ScrollReveal from './ui/ScrollReveal';

export default function PhotoGallery() {
  return (
    <section className="py-20" style={{ background: 'var(--cream)' }}>
      <ScrollReveal direction="up" className="text-center mb-10 px-6">
        <h2
          className="text-title font-light"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--rose-deep)',
          }}
        >
          Nuestros Recuerdos
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="fade">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1.2}
          centeredSlides={true}
          spaceBetween={16}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 24 },
          }}
          className="pb-12"
        >
          {story.photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <div
                className="aspect-[4/5] rounded-3xl overflow-hidden relative"
                style={{
                  boxShadow: '0 12px 40px rgba(44, 27, 36, 0.18)',
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Polaroid-style number */}
                <div
                  className="absolute bottom-0 left-0 right-0 py-3 text-center"
                  style={{
                    background: 'linear-gradient(transparent, rgba(255,255,255,0.95))',
                    fontFamily: 'var(--font-script)',
                    color: 'var(--ink-soft)',
                    fontSize: '1.1rem',
                  }}
                >
                  {photo.id} / {story.photos.length}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ScrollReveal>
    </section>
  );
}
