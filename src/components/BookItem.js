import React from 'react';

const BookItem = (props) => {

  return(
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{props.title}</div>
        <div className="meta">
          Author: {props.author}
        </div>
        <div className="description">
          {props.genre}<br/>
          {props.pageNo} pages<br/>
          Read: {props.read}
        </div>
      </div>
    </div>
    </div>
  )

}


export default BookItem;