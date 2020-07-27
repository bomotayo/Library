export default (state = [], action) => {
  switch(action.type){
    case 'FETCH_BOOK':
      return [...state, action.book];
    default:
      return state;
  }
};