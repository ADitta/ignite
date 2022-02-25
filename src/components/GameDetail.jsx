// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
// Used to go to a previous route
import { useNavigate } from "react-router-dom";
// Utils
import { smallImage } from "../utils";
const GameDetail = ({ pathId }) => {
  // Exit Detail
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  // Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <StyledCardShadow className="shadow" onClick={exitDetailHandler}>
          <StyledDetail layoutId={pathId}>
            <StyledStats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatforms>
                  {game.platforms &&
                    game.platforms.map((platform) => (
                      <h3 key={platform.platform.id}>
                        {platform.platform.name}
                      </h3>
                    ))}
                </StyledPlatforms>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt="game-img"
              />
            </StyledMedia>
            <StyledDescription>
              <p>{game.description_raw}</p>
            </StyledDescription>
            <div className="gallery">
              {screen.results &&
                screen.results.map((screen) => (
                  <img
                    src={smallImage(screen.image, 1280)}
                    key={screen.id}
                    alt="game"
                  ></img>
                ))}
            </div>
          </StyledDetail>
        </StyledCardShadow>
      )}
    </>
  );
};

const StyledCardShadow = styled(motion.div)`
  width: 100%;
  z-index: 2;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const StyledDetail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  position: absolute;
  left: 10%;
  background-color: white;
  color: black;
  img {
    width: 100%;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledInfo = styled(motion.div)`
  text-align: center;
`;
const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const StyledDescription = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDetail;
