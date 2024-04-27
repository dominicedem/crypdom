import styled from "styled-components";
import { LuTwitter } from "react-icons/lu";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RxTransparencyGrid } from "react-icons/rx";
import { FaHourglassStart } from "react-icons/fa6";
import { MdJoinFull } from "react-icons/md";
import { AiFillInteraction } from "react-icons/ai";

const Moreinfobox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 2rem;
  margin-bottom: 10rem;
  column-gap: 2rem;
  row-gap: 3rem;
  @media (max-width: 986px) {
    column-gap: 1rem;
    row-gap: 1.5rem;
  }
  @media (max-width: 860px) {
    column-gap: 0.7rem;
    row-gap: 1.2rem;
  }
  @media (max-width: 600px) {
    overflow-x: scroll;
    column-gap: 5rem;
    row-gap: 1.3rem;
  }
`;

const Moreinfohead = styled.h2`
  display: flex;
  text-transform: uppercase;
  border-bottom: 1px solid #333;
  gap: 1rem;
  padding-bottom: 1.5rem;
  font-size: 1.8rem;
  color: var(--secondary_text_color);
  @media (max-width: 1136px) {
    font-size: 1.7rem;
  }
  @media (max-width: 1015px) {
    font-size: 1.6rem;
  }
  @media (max-width: 860px) {
    font-size: 1.45rem;
  }
  @media (max-width: 459px) {
    font-size: 1.3rem;
  }
  @media (max-width: 430px) {
    font-size: 1.26rem;
  }
`;
const Moreinfocontentbox = styled.div`
  display: flex;
  gap: 3rem;
  padding-bottom: 3rem;
`;
const Moreinfocontent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Moreinfosubhead = styled.h3`
  display: flex;
  gap: 1rem;
  font-size: 1.8rem;
  color: #ddd;
  @media (max-width: 1047px) {
    font-size: 1.7rem;
  }
`;
const Moreinfosubtext = styled.p`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  width: 20rem;
  line-height: 1.3;
  color: var(--secondary_text_color);
`;
const IconStyle = {
  color: "var(--primary_text_color)",
  width: "2.5rem",
  height: "2.5rem",
};

function Moreinfo({ position = "first" }) {
  return (
    <>
      <Moreinfobox>
        <Moreinfohead>Building a Community</Moreinfohead>
        <Moreinfohead>Earn CrypDom Token</Moreinfohead>
        <Moreinfohead>Friendly Experience</Moreinfohead>
        <Moreinfocontentbox>
          <FaHourglassStart style={IconStyle} />
          <Moreinfocontent>
            <Moreinfosubhead>Get Started</Moreinfosubhead>
            <Moreinfosubtext>
              Get started effortlessly with a few clicks, connect your twitter
              account to our user-friendly platform, ensuring a seamless
              experience.
            </Moreinfosubtext>
          </Moreinfocontent>
        </Moreinfocontentbox>

        <Moreinfocontentbox>
          <LuTwitter style={IconStyle} />
          <Moreinfocontent>
            <Moreinfosubhead>Connect Twitter</Moreinfosubhead>
            <Moreinfosubtext>
              Connect your twitter for effortless CrypDom token rewards. Get
              paid for social media activities you already enjoy.
            </Moreinfosubtext>
          </Moreinfocontent>
        </Moreinfocontentbox>
        <Moreinfocontentbox>
          <AiFillInteraction style={IconStyle} />
          <Moreinfocontent>
            <Moreinfosubhead>Encourage Engagement</Moreinfosubhead>
            <Moreinfosubtext>
              Elevate your twitter engagement with our project. Earn points by
              tweeting, commenting, and retweeting, enhancing your online
              presence.
            </Moreinfosubtext>
          </Moreinfocontent>
        </Moreinfocontentbox>
        <Moreinfocontentbox>
          <MdJoinFull style={IconStyle} />
          <Moreinfocontent>
            <Moreinfosubhead> Join us</Moreinfosubhead>
            <Moreinfosubtext>
              Join a vibrant community of like-minded individuals in social
              interaction and cryptocurrency. Together, we reward engagement and
              foster connections.
            </Moreinfosubtext>
          </Moreinfocontent>
        </Moreinfocontentbox>
        <Moreinfocontentbox>
          <FaRegMoneyBillAlt style={IconStyle} />
          <Moreinfocontent>
            <Moreinfosubhead>Monetization Potential</Moreinfosubhead>
            <Moreinfosubtext>
              Your CrypDom points are more than just points, they're your
              gateway to real-world value and investment opportunities, ushering
              in financial empowerment.
            </Moreinfosubtext>
          </Moreinfocontent>
        </Moreinfocontentbox>

        <Moreinfocontentbox>
          <RxTransparencyGrid style={IconStyle} />
          <Moreinfocontent>
            <Moreinfosubhead>Transparency </Moreinfosubhead>
            <Moreinfosubtext>
              Trust our system to deliver as promised. Transparency is our
              priority in points and token distribution.
            </Moreinfosubtext>
          </Moreinfocontent>
        </Moreinfocontentbox>
      </Moreinfobox>
    </>
  );
}

export default Moreinfo;
