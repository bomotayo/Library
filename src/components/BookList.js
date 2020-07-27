import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { selectBook } from '../actions';



const BookList = (props) => {

  let books = JSON.parse(localStorage.getItem('state'));
  let bookArray = books === null ? [] : books.book;
  let uniqueBooks = _.uniqWith(bookArray, _.isEqual);

  // console.log(uniqueBooks)

  const renderList = () => {
    if(books === null){
      return (
        <h3 className="nobook-text">You currently have no books stored in your library.</h3>
      )
    }
    else{
      return uniqueBooks.map((book) => {
        return(
          <div className="item" key={book.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => props.selectBook(book)}
            >
              Select
            </button>
          </div>
          <div className="content">{book.title}</div>
        </div>       
        );
      });
    }
  }

  return(
    <div>
      <div className="ui divided list">{renderList()}</div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    book: state.book
  }
}

export default connect(mapStateToProps,{
  selectBook: selectBook
})(BookList);
