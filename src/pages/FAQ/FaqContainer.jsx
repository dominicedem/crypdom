import styled from "styled-components";
import Faq from "./Faq";
import { useState } from "react";

const FaqBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem auto 0 auto;
  width: 74vw;
  padding: 2rem 0;
  gap: 1rem;
  @media (max-width: 800px) {
    width: 90vw;
  }
`;

const FaqHead = styled.h2`
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 4.5rem;
  margin-bottom: 2.5rem;
  width: 100%;
  @media (max-width: 1136px) {
    font-size: 4.2rem;
  }
  @media (max-width: 459px) {
    font-size: 3.8rem;
  }
`;

const databox = [
  {
    questions: "How do i participate in the Airdrop and earn rewards?",
    answer:
      "Head over to the Airdrop section for a detailed explanation on our Airdrop",
    id: 0,
  },
  {
    questions:
      "What partnership or collaboration does the project have in place?",
    answer:
      "We are currently working on collaborating with top Solana platforms and foundations",
    id: 1,
  },
  {
    questions:
      "Are there any staking opportunities available within the CrypDom ecosystem?",
    answer: "Yes there is! Head over to our Whitepaper for full details",
    id: 2,
  },
  {
    questions:
      "What are the entry barriers for new users looking to join the platform?",
    answer:
      "Having a zero count twitter followers can deny you the right to interaction points",
    id: 3,
  },
  {
    questions:
      "What measures are put in place to ensure a fair distribution of rewards?",
    answer: "Your points are directly proportional to your earnings",
    id: 4,
  },
];

function FaqContainer() {
  const [ids, setIds] = useState(null);
  return (
    <FaqBox>
      <FaqHead>Frequently Asked Questions</FaqHead>
      {databox.map((val) => (
        <Faq key={val.id} data={val} ids={ids} setIds={setIds} />
      ))}
    </FaqBox>
  );
}

export default FaqContainer;
