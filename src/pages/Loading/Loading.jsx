import styled from "styled-components";

const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background: #030303;
`;

const loaderStyle = {
  margin: "auto",
  background: "#030303",
  display: "block",
  shapeRendering: "auto",
};

function Loading() {
  return (
    <LoadingBox>
      <>
        {/* <?xml version="1.0" encoding="utf-8"?> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={loaderStyle}
          width="100px"
          height="100px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <rect x="18.5" y="25" width="13" height="50" fill="#555">
            <animate
              attributeName="y"
              repeatCount="indefinite"
              dur="1.4492753623188404s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="12.5;25;25"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.2898550724637681s"
            ></animate>
            <animate
              attributeName="height"
              repeatCount="indefinite"
              dur="1.4492753623188404s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="75;50;50"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.2898550724637681s"
            ></animate>
          </rect>
          <rect x="43.5" y="25" width="13" height="50" fill="#777">
            <animate
              attributeName="y"
              repeatCount="indefinite"
              dur="1.4492753623188404s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="15.625;25;25"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.14492753623188406s"
            ></animate>
            <animate
              attributeName="height"
              repeatCount="indefinite"
              dur="1.4492753623188404s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="68.75;50;50"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.14492753623188406s"
            ></animate>
          </rect>
          <rect x="68.5" y="25" width="13" height="50" fill="#999">
            <animate
              attributeName="y"
              repeatCount="indefinite"
              dur="1.4492753623188404s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="15.625;25;25"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            ></animate>
            <animate
              attributeName="height"
              repeatCount="indefinite"
              dur="1.4492753623188404s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="68.75;50;50"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            ></animate>
          </rect>
        </svg>
      </>
    </LoadingBox>
  );
}
export default Loading;
