import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";
import { Rating } from "@mui/material";
import Spinner from "../../../styles/Spinner";

export default function Testimonial() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://boiling-shelf-38598.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Testimonial</h1>

      {reviews.length === 0 ? (
        <Spinner />
      ) : (
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
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="card">
                  <div className="card_header">
                    <div className="image">
                      <img
                        src={`data:image/png;base64,${review?.image}`}
                        alt=""
                      />
                    </div>
                    <div className="name_work">
                      <h5>{review?.name}</h5>
                      <h4>{review?.occupation}</h4>
                    </div>
                  </div>
                  <hr />
                  <div className="card_info">{review?.message}</div>
                  <div className="card_rating">
                    <Rating
                      name="size-small"
                      defaultValue={parseInt(review?.rating)}
                      size="small"
                      readOnly
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </TestimonialStyled>
      )}
    </>
  );
}
const TestimonialStyled = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 688px) {
    min-height: 40vh;
    padding: 200px 10px;
  }
  .mySwiper {
    .card {
      border: 1px solid lightgray;
      border-radius: 5px;
      height: 350px;
      width: 320px;
      margin-left: 50px;
      padding: 20px;
      @media (max-width: 688px) {
        margin-left: 0px;
        height: 100%;
        width: 100%;
      }
      .card_header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      .card_info {
        height: 220px;
        font-size: 16px;
        padding: 10px;
        text-align: justify;
        overflow-y: scroll;
      }
      .card_rating {
        margin-top: 10px;
      }
    }
  }
`;
