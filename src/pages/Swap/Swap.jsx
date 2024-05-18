import styled from "styled-components";
import Presale from "./Presale/Presale";
import { useDispatch, useSelector } from "react-redux";
import SettingsModal from "./SettingsModal";
import { updateSettings } from "../../feature/Slices/TokenSlice";
import Notify from "./Notify";
// import { updateSettings } from "../../feature/Slices/TokenSlice";

const SwapBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 20rem;
  top: 12%;
  right: 5%;
  z-index: 10000;
  transition: all 0.4s;
`;

function Swap() {
  const { settings, notify } = useSelector((state) => state.tokenData);
  const dispatch = useDispatch();
  function handleOverlay(e) {
    if (e.target.className.split(" ").includes("overlay")) {
      dispatch(updateSettings(false));
    }
  }
  return (
    <SwapBox>
      <Video
        src="https://media.istockphoto.com/id/693311426/video/3d-spinning-coins.mp4?s=mp4-640x640-is&k=20&c=apF65v5MgnlvVFsgKWEhFOtYd8GDflSa684sZ5xQ78E="
        playsInline
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      <Presale />
      {settings && (
        <OverlayBox onClick={(e) => handleOverlay(e)} className="overlay">
          <Box>
            <SettingsModal />
          </Box>
        </OverlayBox>
      )}
      <NofifyBox className={notify ? "visible" : "hide"}>
        <Notify notify={notify} />
      </NofifyBox>
    </SwapBox>
  );
}
export default Swap;
