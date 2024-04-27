import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

const PartnerLogBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 95vw;
  margin: 0 auto;
  height: 100%;
  font-size: 1.4rem;
  color: #eee;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 3rem;
  height: 2.6rem;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 800px) {
    gap: 0.2rem;
  }
`;

const datas = [
  {
    image_url: "/solana.png",
    id: 1,
    logoName: "Solana",
  },
  {
    image_url: "/Metaplex.png",
    id: 2,
    logoName: "Metaplex",
  },
  {
    image_url: "/raydium.png",
    id: 3,
    logoName: "Raydium",
  },
  {
    image_url: "/serum.png",
    id: 4,
    logoName: "Serum",
  },
  {
    image_url: "/dexlab.png",
    id: 5,
    logoName: "Dexlab",
  },
  {
    image_url: "/jupiter.png",
    id: 6,
    logoName: "jupiter",
  },
  {
    image_url: "/orca.png",
    id: 7,
    logoName: "Orca",
  },
  {
    image_url: "/birdeye.png",
    id: 8,
    logoName: "Birdeye",
  },
  {
    image_url: "/phantom.png",
    id: 9,
    logoName: " Phantom",
  },
  {
    image_url: "/solflare.png",
    id: 10,
    logoName: "Solflare",
  },
  {
    image_url: "/normics.png",
    id: 11,
    logoName: "Normics",
  },
  {
    image_url: "/kego.png",
    id: 12,
    logoName: "Coingecko",
  },
  {
    image_url: "/cap.png",
    id: 13,
    logoName: "MarketCap",
  },
  {
    image_url: "/chain.png",
    id: 14,
    logoName: "ChainLink",
  },
];

function Partners() {
  return (
    <PartnerLogBox>
      <Swiper
        slidesPerView={5}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {datas.map((val, ind) => (
          <SwiperSlide key={val.id}>
            <LogoBox>
              <Img alt="Partner's logo" src={val.image_url} />
              {val.logoName}
            </LogoBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnerLogBox>
  );
}

export default Partners;
