import axios from "axios";
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchedGameURL,
} from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const newData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newData.data.results,
    },
  });

  //   axios.get(popularGamesURL()).then((res) => {
  //     return res;
  //   });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchedGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
