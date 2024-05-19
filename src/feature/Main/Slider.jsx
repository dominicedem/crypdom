import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import SliderDes from "./SliderDes";

const datas = [
  {
    image_url: `image12.png`,
    id: 1,
    sub: "Bridging Social Media And Defi",
    description:
      "CrypDom bridges the gap betweeen social media and decentralized finance on solana, Seamlessly integrating your online presence with financial opportunities.",
  },
  {
    image_url: `image-3.jpg`,
    id: 2,
    sub: "Blockchain-Powered Innovation",
    description:
      "Experience blockchain-powered innovation with CrypDom on the solana blockchain, bringing you the future of social finance.",
  },
  {
    image_url: `rev.jpeg`,
    id: 3,
    sub: "Revolutionizing Social Media",
    description:
      "CrypDom revolutionize social media by transforming the way you interact online. Join us for a new era of connectivity.",
  },
  {
    image_url: `privacy.jpeg`,
    id: 4,
    sub: "Privacy, Control, And Rewards",
    description:
      "CrypDom offers privacy, control, and defi rewards. Take control of your data and earnings.",
  },
  {
    image_url: `image-5.jpg`,
    id: 5,
    sub: "Join Us On Twitter",
    description:
      "Follow us on Twitter. stay updated, engage with us, and be part of the conversation on our primary social platform.",
  },
];

const DescriptionBox = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 1rem;
  width: 97%;
  border-radius: 1rem;
  box-shadow: 0 1rem 1rem 0 #0006, 0.8rem 0 0.8rem 0 #25252554;
`;

function Slider({ desktop, mobile }) {
  return (
    <DescriptionBox>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {datas.map((val, ind) => (
          <SwiperSlide key={val.id}>
            <SliderDes
              key={val.id}
              data={val}
              desktop={desktop}
              mobile={mobile}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </DescriptionBox>
  );
}

export default Slider;
