import React from 'react';
import { connect } from 'react-redux';

const BookDetail = props => {

  if(!props.selectedBook){
    return <div></div>
  }

  return(
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{props.selectedBook.title}</div>
        </div>
        <div className="content">
          <div className= "header">
          Author: {props.selectedBook.author}<br/><br/>
          Genre: {props.selectedBook.genre}<br/><br/>
          No. Pages: {props.selectedBook.pageNo} <br/><br/>
          Read: {props.selectedBook.read}
          </div>
          <br/>
          <div className="extra content">
            <div className="ui two buttons">
               <a className="ui green button" href={`https://www.goodreads.com/search?utf8=%E2%9C%93&query=${props.selectedBook.title}`} target="_blank" rel="noopener noreferrer">More</a>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return { selectedBook: state.selectedBook };
}
export default connect(mapStateToProps)(BookDetail);