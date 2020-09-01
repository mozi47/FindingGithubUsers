import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //search user
  const SearchUser = async (text) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //get user
  const getUser = async (user) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${user}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //get repos
  const getUserRepos = async (user) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${user}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //clear users
  const ClearUser = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  //set laoding
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        SearchUser,
        ClearUser,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
