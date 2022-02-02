import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import user from "../../../assets/Image/Ellipse 90.png";
import user1 from "../../../assets/Image/Ellipse 91.png";
import user2 from "../../../assets/Image/Ellipse 92.png";
import rating from "../../../assets/Icon/Group 33040.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";

export default function Testimonial() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>Testimonial</h1>
      <TestimonialStyled>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <div className="card_header">
                <div className="image">
                  <img src={user} alt="" />
                </div>
                <div className="name_work">
                  <h3>Rashidul Islam</h3>
                  <h4>Web developer</h4>
                </div>
              </div>
              <div className="card_info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Odit, vero. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Odit, vero.
                </p>
              </div>
              <div className="card_rating">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card_header">
                <div className="image">
                  <img src={user1} alt="" />
                </div>
                <div className="name_work">
                  <h3>Rashidul Islam</h3>
                  <h4>Web developer</h4>
                </div>
              </div>
              <div className="card_info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Odit, vero. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Odit, vero.
                </p>
              </div>
              <div className="card_rating">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card_header">
                <div className="image">
                  <img src={user2} alt="" />
                </div>
                <div className="name_work">
                  <h3>Rashidul Islam</h3>
                  <h4>Web developer</h4>
                </div>
              </div>
              <div className="card_info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Odit, vero. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Odit, vero.
                </p>
              </div>
              <div className="card_rating">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card_header">
                <div className="image">
                  <img src={user} alt="" />
                </div>
                <div className="name_work">
                  <h3>Rashidul Islam</h3>
                  <h4>Web developer</h4>
                </div>
              </div>
              <div className="card_info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Odit, vero. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Odit, vero.
                </p>
              </div>
              <div className="card_rating">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </TestimonialStyled>
    </>
  );
}
const TestimonialStyled = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 688px) {
    height: 40vh;
  }
  .mySwiper {
    .card {
      border: 1px solid lightgray;
      border-radius: 5px;
      height: 100%;
      width: 220px;
      margin-left: 100px;
      padding: 20px;
      @media (max-width: 688px) {
        margin-left: 50px;
        height: 100%;
        width: 300px;
      }
      .card_header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          width: 50px;
        }
      }
      .card_info {
        p {
          text-align: justify;
        }
      }
      .card_rating {
        margin-top: 20px;
        img {
          width: 20px;
        }
      }
    }
  }
`;
