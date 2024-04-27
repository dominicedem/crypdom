import styled from "styled-components";
import TradePlatform from "./TradePlatform";

const TradeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin: 5rem auto;
`;
const TradeHead = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  @media (max-width: 475px) {
    font-size: 3.5rem;
  }
`;
const TradeoptionBox = styled.div`
  display: grid;
  cursor: pointer;
  grid-template-columns: 1fr 1fr;
  width: 75vw;
  column-gap: 3rem;
  row-gap: 4rem;
  @media (max-width: 750px) {
    width: 90vw;
    column-gap: 1rem;
  }
  @media (max-width: 500px) {
    width: 85vw;
    column-gap: 1rem;
    grid-template-columns: 1fr;
  }
  /* @media (max-width: 475px) {
    grid-template-columns: 1fr 1fr;
    font-size: 2rem;
    width: 85vw;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
    font-size: 2rem;
    width: 90vw;
  } */
`;

const tradeData = [
  {
    link: "#",
    source: "/Matcha.png",
    alternative: "Trade Platform Logo",
    tradeName: "Matcha",
    id: 0,
  },
  {
    link: "#",
    source: "/birdeye.png",
    alternative: "Trade Platform Logo",
    tradeName: "Dexscreener",
    id: 1,
  },
  {
    link: "#",
    source: "/cap.png",
    alternative: "Trade Platform Logo",
    tradeName: "CoinMarketcap",
    id: 4,
  },
  {
    link: "#",
    source: "/kego.png",
    alternative: "Trade Platform Logo",
    tradeName: "CoinGecko",
    id: 5,
  },
  {
    link: "#",
    source: "/bitrue.png",
    alternative: "Trade Platform Logo",
    tradeName: "Bitrue",
    id: 2,
  },
  {
    link: "#",
    source: "/mexc.png",
    alternative: "Trade Platform Logo",
    tradeName: "Mexc Global",
    id: 3,
  },
];

function Trade() {
  return (
    <TradeBox>
      <TradeHead>Markets</TradeHead>
      <TradeoptionBox>
        {tradeData.map((val) => (
          <TradePlatform key={val.id} data={val} />
        ))}
      </TradeoptionBox>
    </TradeBox>
  );
}

export default Trade;
