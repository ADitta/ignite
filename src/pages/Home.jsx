import { useEffect } from "react";
import GameDetail from "../components/GameDetail";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";
// Components
import Game from "../components/Game";

const Home = () => {
  // get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  // Fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //   Get data back
  const { newGames, popular, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <StyledGameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <StyledGames>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  key={game.id}
                  image={game.background_image}
                />
              ))}
            </StyledGames>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <StyledGames>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              key={game.id}
              image={game.background_image}
            />
          ))}
        </StyledGames>
        <h2>Popular Games</h2>
        <StyledGames>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              key={game.id}
              image={game.background_image}
            />
          ))}
        </StyledGames>
        <h2>New Games</h2>
        <StyledGames>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              key={game.id}
              image={game.background_image}
            />
          ))}
        </StyledGames>
      </AnimateSharedLayout>
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  align-items: center;
  padding: 0rem 5rem;
  text-align: center;
  h2 {
    padding: 5rem 0rem;
  }
  @media (max-width: 800px) {
    padding: 0rem 1rem;
  }
  @media (max-width: 500px) {
    padding: 0rem;
  }
  @media (max-width: 400px) {
    h2 {
      margin-left: 2rem;
      font-size: 2.5rem;
    }
  }
`;
const StyledGames = styled(motion.div)`
  align-items: center;
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  column-gap: 3rem;
  row-gap: 7rem;
`;
export default Home;
