import React, { useState } from 'react';
import Form from './Form';
import BookList from './BookList';
import BookDetail from './BookDetail';


const App = () => {

  const [state, setState] = useState({
    seen: false
  });

  const togglePop = () => {
    setState({
      seen: !state.seen
    });
  }

  return (
    <div className="main-section">
      <div className="main-title">
        <h1>Book Library</h1>
        <button className="primary ui button" onClick={togglePop}>
            Add New Book
        </button>
      </div>

      {state.seen ? <Form toggle={togglePop} /> : null} 
      <div className="library-section">
      <h2 className="library-title">Your Library</h2>
          <div className="ui container grid">
            <div className="ui row">
              <div className="column eight wide">
                <BookList />
              </div>
              <div className="column eight wide">
                    <BookDetail />
                </div>   
            </div>
          </div>  
        </div>
      </div>

  )
}

export default App;