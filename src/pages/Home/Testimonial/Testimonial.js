import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import user1 from "../../../assets/Image/Ellipse 91.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import styled from "styled-components";

export default function Testimonial() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Testimonial</h1>
      <TestimonialStyled>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={false}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <div className="user_info">
                <div className="image">
                  <img src={user1} alt="" />
                </div>
                <div className="name_profession">
                  <h3>Rashidul islam</h3>
                  <h4>Web developer</h4>
                </div>
              </div>
              <div className="user_details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  consequatur deserunt ipsam pariatur vitae atque rerum?
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="user_info">
                <div className="image">
                  <img src={user1} alt="" />
                </div>
                <div className="name_profession">
                  <h3>Rashidul islam</h3>
                  <h4>Web developer</h4>
                </div>
              </div>
              <div className="user_details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  consequatur deserunt ipsam pariatur vitae atque rerum?
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="user_info">
                <div className="image">
                  <img src={user1} alt="" />
                </div>
                <div className="name_profession">
                  <h3>Rashidul islam</h3>
                  <h4>Web developer</h4>
                </div>
              </div>
              <div className="user_details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  consequatur deserunt ipsam pariatur vitae atque rerum?
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="user_info">
                <div className="image">
                  <img src={user1} alt="" />
                </div>
                <div className="name_profession">
                  <h3>Rashidul islam</h3>
                  <h4>Web developer</h4>
                </div>
              </div>
              <div className="user_details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  consequatur deserunt ipsam pariatur vitae atque rerum?
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </TestimonialStyled>
    </>
  );
}

const TestimonialStyled = styled.div`
  margin: 0 40px;
  height: 80vh;
  display: flex;
  align-items: center;
  .card {
    margin: 0 40px;
    width: 300px;
    height: 287px;
    .user_info {
      display: flex;

      align-items: center;
      .image {
        width: 64px;
        height: 64px;
        img {
          width: 100%;
          margin-right: 40px;
        }
      }
    }
    .user_details {
      margin-top: 20px;
    }
  }
`;
