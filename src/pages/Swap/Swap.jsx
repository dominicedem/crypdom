import styled from "styled-components";
import Presale from "./Presale/Presale";
import { useDispatch, useSelector } from "react-redux";
import SettingsModal from "./SettingsModal";
import { updateSettings } from "../../feature/Slices/TokenSlice";
import { useEffect } from "react";
import Notify from "./Notify";
// import { updateSettings } from "../../feature/Slices/TokenSlice";

const ClaimBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Video = styled.video`
  position: absolute;
  top: 0;
  top: 0;
  object-fit: cover;
  left: 0;
  height: 100%;
  width: 100%;
  filter: grayscale(90%);
`;
const OverlayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82vw;
  height: 85vh;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  @media (max-width: 900px) {
    width: 80vw;
  }
  @media (max-width: 800px) {
    width: 98vw;
  }
  background: #000000cc;
`;
const Box = styled.div``;

const NofifyBox = styled.div`
  position: fixed;
  top: 12%;
  right: 5%;
  z-index: 10000;
  transition: all 0.4s;
  @media (max-width: 500px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

function Swap() {
  const { settings, notify } = useSelector((state) => state.tokenData);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.className.split(" ").includes("overlay")) {
        dispatch(updateSettings(false));
      }
    });
  }, [dispatch]);
  return (
    <ClaimBox>
      <Video
        src="https://media.istockphoto.com/id/693311426/video/3d-spinning-coins.mp4?s=mp4-640x640-is&k=20&c=apF65v5MgnlvVFsgKWEhFOtYd8GDflSa684sZ5xQ78E="
        playsInline
        type="video/mp4"
        autoplay="true"
        loop
        muted
      />
      <Presale />
      {settings && (
        <OverlayBox className="overlay">
          <Box>
            <SettingsModal />
          </Box>
        </OverlayBox>
      )}
      <NofifyBox className={notify ? "visible" : "hide"}>
        <Notify notify={notify} />
      </NofifyBox>
    </ClaimBox>
  );
}
export default Swap;
