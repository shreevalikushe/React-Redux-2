import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
} from "./actionTypes";

export function getTodoLoading() {
  return {
    type: GET_TODO_LOADING,
  };
}

export function getTodoSuccess(data) {
  return {
    type: GET_TODO_SUCCESS,
    payload: data,
  };
}
export function getTodoError(err) {
  return {
    type: GET_TODO_ERROR,
    payload: err,
  };
}

export function addTodoError(err) {
  return {
    type: ADD_TODO_ERROR,
    payload: err,
  };
}

export function addTodoSuccess(res) {
  return {
    type: ADD_TODO_SUCCESS,
    payload: res,
  };
}

export function addTodoLoading() {
  return {
    type: ADD_TODO_LOADING,
  };
}
