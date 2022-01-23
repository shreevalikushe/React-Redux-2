import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
} from "./actionTypes";

const init = { loading: false, todos: [], error: false };
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_TODO_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: payload,
        error: false,
        loading: false,
      };
    }
    case GET_TODO_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case ADD_TODO_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ADD_TODO_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        todos: [...state.todos, payload],
      };
    }
    default: {
      return state;
    }
  }
};
