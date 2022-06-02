import react from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import AboutSliderCard from "./AboutSliderCard/AboutSliderCard";

import "swiper/css";
import "swiper/css/navigation";

import "./AboutSlider.scss";

import { Navigation } from "swiper";

import SlideImage1 from "../../../../Assets/Images/Slider/Slider1.jpg";
import SlideImage2 from "../../../../Assets/Images/Slider/Slider2.jpg";
import SlideImage3 from "../../../../Assets/Images/Slider/Slider3.jpg";
import SlideImage4 from "../../../../Assets/Images/Slider/Slider4.jpg";

const slideData = [
  {
    key: 1,
    image: SlideImage1,
    title: "Aula Sekolah",
  },
  {
    key: 2,
    image: SlideImage2,
    title: "Aula Sekolah",
  },
  {
    key: 3,
    image: SlideImage3,
    title: "Aula Sekolah",
  },
  {
    key: 4,
    image: SlideImage4,
    title: "Aula Sekolah",
  },
  {
    key: 5,
    image: SlideImage1,
    title: "Aula Sekolah",
  },
  {
    key: 6,
    image: SlideImage2,
    title: "Aula Sekolah",
  },
];

const AboutSlider = () => {
  return (
    <div className="about-slider">
      <Swiper navigation={true} modules={[Navigation]} slidesPerView={"auto"} spaceBetween={30} centeredSlides={true} className="mySwiper">
        {slideData.map((slide) => (
          <SwiperSlide>
            <AboutSliderCard key={slide.key} image={slide.image} title={slide.title}></AboutSliderCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutSlider;
