import { Link } from "react-router-dom";
import styled from "styled-components";

const AllSectionBox = styled.div`
  padding: 3rem 4rem;
  color: #ccc;
  line-height: 1.3;
`;
const SectionTerms = styled.div`
  margin-bottom: 8rem;
`;
const TermsConditionHead = styled.h1`
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const TermsConditionText = styled.p`
  font-size: 1.9rem;
  line-height: 1.5;
  margin-bottom: 3rem;
`;
const Agreement = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  margin: 2.5rem 0;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const DetailBox = styled.div`
  margin-bottom: 1.5rem;
`;
const DetailHead = styled.h1`
  font-size: 2rem;
  text-align: start;
  margin-bottom: 1rem;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const DetailTextBox = styled.ul`
  margin-bottom: 1rem;
`;
const DetailText = styled.li`
  font-size: 1.9rem;
`;
const DetailHeadText = styled.p`
  font-size: 1.9rem;
  margin-bottom: 2rem;
`;
const DetailHeadTwo = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-top: 4rem;
  text-transform: uppercase;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const JoinUs = styled.p`
  font-size: 1.9rem;
`;
const Receipt = styled.p`
  font-size: 1.9rem;
  margin-bottom: 3rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
const SectionAbout = styled.div`
  margin: 8rem 0;
`;
const SectionSupport = styled.div`
  margin: 8rem 0;
`;
const SectionCopyright = styled.div`
  margin: 8rem 0 0 0;
`;

function TermsCondition() {
  return (
    <>
      <AllSectionBox>
        <SectionTerms>
          <TermsConditionHead>Terms and Conditions</TermsConditionHead>
          <TermsConditionText>
            Welcome to CrypDom, an innovative decentralized platform built on
            the Solana blockchain. By engaging with our services, you
            acknowledge and agree to abide by the terms and conditions outlined
            below. It is crucial to carefully read and understand these terms.
          </TermsConditionText>
          <Agreement>User Agreement</Agreement>
          <DetailBox>
            <DetailHead>Acceptance</DetailHead>
            <DetailTextBox>
              <DetailText>
                Your use of the platform constitutes explicit acceptance of the
                terms herein.
              </DetailText>
            </DetailTextBox>
          </DetailBox>
          <DetailBox>
            <DetailHead> Eligibility </DetailHead>
            <DetailTextBox>
              <DetailText>
                Users must meet the legal age requirements in their respective
                jurisdictions to access the platform.
              </DetailText>
            </DetailTextBox>
          </DetailBox>
          <DetailBox>
            <DetailHead> Intellectual Property </DetailHead>
            <DetailTextBox>
              <DetailText>
                All content, including text, graphics, and logos, featured on
                the platform is the exclusive intellectual property of Link
                Network. Such content is safeguarded by intellectual property
                laws.
              </DetailText>
            </DetailTextBox>
          </DetailBox>
          <DetailBox>
            <DetailHead> User Conduct </DetailHead>
            <DetailTextBox>
              <DetailText>
                Users are obligated to refrain from engaging in any activities
                on the platform that are unlawful or prohibited.
              </DetailText>
            </DetailTextBox>
          </DetailBox>
          <DetailBox>
            <DetailHead> Privacy </DetailHead>
            <DetailTextBox>
              <DetailText>
                Your use of the platform is contingent upon adherence to our
                Privacy Policy, which governs the collection and use of your
                data.
              </DetailText>
            </DetailTextBox>
          </DetailBox>
          <DetailHeadTwo>Disclaimer</DetailHeadTwo>
          <DetailHeadText>
            CrypDom provides the Platform "as is," without any warranties. We
            are not liable for inaccuracies, errors, or disruptions that may
            occur during use.
          </DetailHeadText>
          <DetailHeadTwo> Termination</DetailHeadTwo>
          <DetailHeadText>
            CrypDom retains the unilateral right to terminate or suspend user
            accounts at our discretion.
          </DetailHeadText>
          <DetailHeadTwo>Governing Laws</DetailHeadTwo>
          <DetailHeadText>
            These terms are governed by the laws of your jurisdiction.
          </DetailHeadText>
        </SectionTerms>
        <SectionAbout id="About">
          <TermsConditionHead>About Us</TermsConditionHead>
          <TermsConditionText>
            Welcome to CrypDom, a decentralized platform unifying social media
            and decentralized finance on solana. Our mission is to provide users
            with a seamless and rewarding experience within the decentralized
            space. Here's what sets us apart:
          </TermsConditionText>

          <DetailBox>
            <DetailHead>Blockchain Innovation</DetailHead>
            <DetailTextBox>
              <DetailText>
                CrypDom leverages on the solana blockchain for faster
                transactions and enhanced scalability
              </DetailText>
            </DetailTextBox>
          </DetailBox>
          <DetailBox>
            <DetailHead> Community-Driven </DetailHead>
            <DetailTextBox>
              <DetailText>
                We believe in the strength of community collaboration. Link
                Network is meticulously designed to foster engagement and
                collaboration among users.
              </DetailText>
            </DetailTextBox>
          </DetailBox>
          <DetailBox>
            <DetailHead> Transparency </DetailHead>
            <DetailTextBox>
              <DetailText>
                Our commitment to transparency ensures that users have clear
                insights into the functionality and operations of the platform.
              </DetailText>
            </DetailTextBox>
          </DetailBox>
          <JoinUs>
            Join us on this thrilling journey as we redefine decentralized
            experiences.
          </JoinUs>
        </SectionAbout>
        <SectionSupport id="Support">
          <TermsConditionHead>Support</TermsConditionHead>
          <TermsConditionText>
            Our dedicated support team is committed to providing assistance and
            ensuring your satisfaction. If you encounter any issues, have
            questions, or require guidance, please don't hesitate to reach out:
          </TermsConditionText>
          <DetailBox>
            <DetailHead>
              Medium:{" "}
              <Link
                onClick={() =>
                  window.open(import.meta.env.VITE_MediumPage, "_blank")
                }
              >
                https://medium.com/@linknetwork
              </Link>
            </DetailHead>
            <DetailTextBox>
              <DetailText>
                Our support team is dedicated to responding promptly and
                offering effective solutions to enhance your experience on Link
                Network.
              </DetailText>
            </DetailTextBox>
          </DetailBox>
        </SectionSupport>
        <SectionCopyright id="Copyright">
          <TermsConditionHead>Copyright Policy</TermsConditionHead>
          <DetailBox>
            <DetailHead>Content Ownership</DetailHead>
            <DetailTextBox>
              <DetailText>
                All content, encompassing text, graphics, and logos, showcased
                on the Platform, is the exclusive intellectual property of Link
                Network.
              </DetailText>
            </DetailTextBox>
          </DetailBox>
          <DetailBox>
            <DetailHead>User-Generated Content</DetailHead>
            <DetailTextBox>
              <DetailText>
                While users maintain ownership of their user-generated content,
                they grant CrypDom a license to use, reproduce, and distribute
                it on the Platform.
              </DetailText>
            </DetailTextBox>
          </DetailBox>
          <DetailBox>
            <DetailHead>Copyright Infringement</DetailHead>
            <TermsConditionText>
              If you believe your copyright has been infringed on the Platform,
              please contact us at{" "}
              <Link
                onClick={() =>
                  window.open(import.meta.env.VITE_MediumPage, "_blank")
                }
              >
                medium
              </Link>
              , providing:
            </TermsConditionText>
            <DetailTextBox>
              <DetailText>Identification of the copyrighted work.</DetailText>
            </DetailTextBox>
            <DetailTextBox>
              <DetailText>
                Description of the infringing material and its location.
              </DetailText>
            </DetailTextBox>
            <DetailTextBox>
              <DetailText>Your contact information.</DetailText>
            </DetailTextBox>
          </DetailBox>
          <Receipt>
            Upon receipt, we will conduct a thorough investigation and take
            appropriate action in accordance with applicable laws.
          </Receipt>
          <Receipt>
            Thank you for choosing CrypDom as your decentralized platform!{" "}
          </Receipt>
        </SectionCopyright>
      </AllSectionBox>
    </>
  );
}

export default TermsCondition;
