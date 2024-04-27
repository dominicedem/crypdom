import styled from "styled-components";

const TopUserBox = styled.div`
  width: 100%;
  height: 83vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 575px) {
    width: 100%;
    order: -1;
  }
`;
const TopUsers = styled.div`
  align-items: start;
  width: 100%;
  height: 63%;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding: 0 2rem 0 0;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const TopUserHead = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  text-align: center;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const TopUserProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0.8rem;
  border-radius: 1.5rem;
  margin-bottom: 0.5rem;
  border: 0.1px solid #363638;
  background: -webkit-linear-gradient(#131313ec, #161616ed);
  cursor: pointer;
  &:hover {
    background: -webkit-linear-gradient(#1d1d1deb, #222222ec);
  }
`;
const TopUserImage = styled.img`
  filter: brightness(80%);
  height: 4rem;
  width: 4rem;
  border-radius: 1rem;
`;
const TopUserName = styled.div`
  font-size: 1.5rem;
  color: #ddd;
`;
const TopUserPoint = styled.div`
  font-size: 1.5rem;
  color: #ddd;
`;
function Topuser({ topUserData }) {
  function handleClick(userId) {
    window.open(`https://twitter.com/${userId}`, "_blank");
  }
  return (
    <TopUserBox>
      <TopUserHead>Leaderboard</TopUserHead>
      <TopUsers>
        {topUserData ? (
          topUserData?.topGainers.map((data, ind) => (
            <TopUserProfile
              key={ind}
              onClick={() => handleClick(data.username)}
            >
              <TopUserImage src={data ? `${data.photo}` : "/dashboard.jpeg"} />
              <TopUserName>{data ? data.username : "user"}</TopUserName>
              <TopUserPoint>
                {data ? data.totalrollingPoints + data.followPoint : "..."}
              </TopUserPoint>
            </TopUserProfile>
          ))
        ) : (
          <>
            <TopUserProfile>
              <TopUserImage src="/dashboard.jpeg" />
              <TopUserName>user</TopUserName>
              <TopUserPoint>12345</TopUserPoint>
            </TopUserProfile>
            <TopUserProfile>
              <TopUserImage src="/dashboard.jpeg" />
              <TopUserName>user</TopUserName>
              <TopUserPoint>12345</TopUserPoint>
            </TopUserProfile>
            <TopUserProfile>
              <TopUserImage src="/dashboard.jpeg" />
              <TopUserName>user</TopUserName>
              <TopUserPoint>12345</TopUserPoint>
            </TopUserProfile>
            <TopUserProfile>
              <TopUserImage src="/dashboard.jpeg" />
              <TopUserName>user</TopUserName>
              <TopUserPoint>12345</TopUserPoint>
            </TopUserProfile>
            <TopUserProfile>
              <TopUserImage src="/dashboard.jpeg" />
              <TopUserName>user</TopUserName>
              <TopUserPoint>12345</TopUserPoint>
            </TopUserProfile>
            <TopUserProfile>
              <TopUserImage src="/dashboard.jpeg" />
              <TopUserName>user</TopUserName>
              <TopUserPoint>12345</TopUserPoint>
            </TopUserProfile>
            <TopUserProfile>
              <TopUserImage src="/dashboard.jpeg" />
              <TopUserName>user</TopUserName>
              <TopUserPoint>12345</TopUserPoint>
            </TopUserProfile>
            <TopUserProfile>
              <TopUserImage src="/dashboard.jpeg" />
              <TopUserName>user</TopUserName>
              <TopUserPoint>12345</TopUserPoint>
            </TopUserProfile>
          </>
        )}
      </TopUsers>
    </TopUserBox>
  );
}

export default Topuser;
