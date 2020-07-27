export default (selectedBook = null, action) => {
  if(action.type === 'SELECTED_BOOK'){
    return action.payload;
  }

  return selectedBook;
}