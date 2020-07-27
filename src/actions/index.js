import {v4} from 'node-uuid';

export const fetchBook = (book) => {
  return dispatch => {

    dispatch({
      type: 'FETCH_BOOK',
      id: v4(),
      book
    })
  }
}

export const selectBook = (book) => {

  return {
    type: 'SELECTED_BOOK',
    payload: book
  };
};