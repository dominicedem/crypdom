import { useState } from "react";
import { IoMdCopy } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import styled from "styled-components";

const CopyBtn = styled.span`
  color: #fff;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;
const IconStyle = {
  color: "var(--primary_text_color)",
  width: "2.2rem",
  height: "2.2rem",
};

const CopyToClipboard = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
  };

  return (
    <div>
      <CopyBtn onClick={handleCopyClick}>
        {isCopied ? (
          <IoIosCheckmarkCircleOutline style={IconStyle} />
        ) : (
          <IoMdCopy style={IconStyle} />
        )}
      </CopyBtn>
    </div>
  );
};

export default CopyToClipboard;
