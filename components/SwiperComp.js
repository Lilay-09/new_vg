import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const SwiperComp = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Pagination]}
      className="img_swiper"
    >
      <SwiperSlide className="swiper_item">
        <Image
          width={400}
          height={400}
          alt="slide"
          priority
          src="/images/slide.png"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper_item">
        <Image
          width={400}
          height={400}
          alt="slide"
          priority
          src="/images/slide.png"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper_item">
        <Image
          width={400}
          height={400}
          alt="slide"
          priority
          src="/images/slide.png"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper_item">
        <Image
          width={400}
          height={400}
          alt="slide"
          priority
          src="/images/slide.png"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper_item">
        <Image
          width={400}
          height={400}
          alt="slide"
          priority
          src="/images/slide.png"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComp;
