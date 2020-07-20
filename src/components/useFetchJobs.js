import React from "react";
import { useReducer, useEffect } from "react";
import axios from "axios";

//Possible actions to the API
const actions = {
  makeRequest: "make-request",
  getData: "get-data",
  error: "error",
};

const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

//function to modify the state based on the action
const reducer = (state, action) => {
  switch (action.type) {
    case actions.makeRequest:
      return { loading: true, jobs: [] };

    case actions.getData:
      return { ...state, loading: false, jobs: action.payload.jobs };

    case actions.error:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };

    default:
      return state;
  }
};

//actual component
export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  useEffect(() => {
    //preventing too many API calls all at once
    const cancelToken = axios.CancelToken.source();

    dispatch({ type: actions.makeRequest });
    axios
      .get(baseUrl, {
        //preventing too many API calls all at once
        cancelToken: cancelToken.token,
        params: { markdown: true, page: page, ...params },
      })
      .then((res) => {
        dispatch({ type: actions.getData, payload: { jobs: res.data } });
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return;
        }
        dispatch({ type: actions.error, payload: { error: e } });
      });

    return () => {
      //clearing up the request code
      cancelToken.cancel();
    };
  }, [params, page]);

  return state;
}
