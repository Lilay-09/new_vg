import React, { useEffect } from "react";
import Swiper from "swiper";

const SwiperSlider = () => {
  useEffect(() => {
    var swiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      paginationClickable: true,
      spaceBetween: 0,
    });
  });
  return (
    <div class="swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">Slide 1</li>
        <li class="swiper-slide">Slide 2</li>
        <li class="swiper-slide">Slide 3</li>
        <li class="swiper-slide">Slide 4</li>
        <li class="swiper-slide">Slide 5</li>
        <li class="swiper-slide">Slide 6</li>
        <li class="swiper-slide">Slide 7</li>
        <li class="swiper-slide">Slide 8</li>
        <li class="swiper-slide">Slide 9</li>
        <li class="swiper-slide">Slide 10</li>
      </ul>
      <div class="swiper-pagination"></div>
    </div>
  );
};

export default SwiperSlider;
