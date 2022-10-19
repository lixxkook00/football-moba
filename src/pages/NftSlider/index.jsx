import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./NftSlider.scss";

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper";

export default function NftSlider() {
  return (
    <div className="nft-slider mt-5">
        <div className="nft-slider-first">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={false}
                autoplay={{
                delay: 0,
                disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    768: {
                        slidesPerView: 9,
                    },
                    // when window width is >= 768px
                    1000: {
                        slidesPerView: 9,
                    },
                }}
                speed={4000}
                grabCursor={true} 
                modules={[Pagination, Navigation,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 16.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 15.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 14.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                    <img src="./images/NFT - 13.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 12.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 11.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 10.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                    <img src="./images/NFT - 09.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 08.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 07.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 06.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                    <img src="./images/NFT - 05.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 04.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 03.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 02.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 01.png" alt="" />
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
        
        <div className="nft-slider-second">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={false}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    768: {
                        slidesPerView: 9,
                    },
                    // when window width is >= 768px
                    1000: {
                        slidesPerView: 9,
                    },
                }}
                speed={4000}
                grabCursor={true} 
                modules={[Pagination, Navigation,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 01.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 02.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 03.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                    <img src="./images/NFT - 04.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 05.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 06.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 07.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                    <img src="./images/NFT - 08.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 09.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 10.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 11.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                    <img src="./images/NFT - 12.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 13.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 14.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 15.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="super-slider-img">
                        <img src="./images/NFT - 16.png" alt="" />
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
      
    </div>
  )
}
