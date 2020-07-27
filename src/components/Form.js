import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { fetchBook } from '../actions';


const Form = (props) => {

  const { register, handleSubmit, errors } = useForm();
  const alertRef = useRef();


  const handleClick = () => {
    props.toggle();
  };

  const onSubmit = (data, e) => {
    //Sends book info to fetchbook action creator
    props.fetchBook(data);

    //Notification showing book has been submitted
    alertRef.current.style.display = 'block';
    setTimeout(function(){
      alertRef.current.style.display = 'none';
    },1000);

    //Form fields resets on submit
    e.target.reset();
  }
  return(
    <div className="modal">
      <div className="modal_content">
        <div className="ui container">
              <h2 className="ui dividing header">New Book</h2>
              <div className="alert" ref={alertRef}>Your book has been submitted</div>
              <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                  <label>Title</label>
                  <input 
                  name="title" 
                  ref={register({
                    required: "Required"
                  })}
                  />
                <p style={{color: 'red'}}>{errors.title && errors.title.message}</p>
                </div>
                <div className="field">
                  <label>Author</label>
                  <input 
                    name="author" 
                    ref={register({
                      required: "Required"
                    })}
                    />
                <p style={{color: 'red'}}>{errors.author && errors.author.message}</p>
                </div>                
                <div className="field">
                  <label>Genre</label>
                  <select name="genre" ref={register({ required: true })}>
                      <option value="">Select</option>
                      <option value="Romance">Romance</option>
                      <option value="Mystery">Mystery</option>
                      <option value="Fiction">Fiction</option>
                      <option value="Horror">Horror</option>
                      <option value="Self-help">Self-help</option>
                      <option value="Children">Children</option>
                      <option value="Biography">Biography</option>
                      <option value="Other">Other</option>
                  </select>
                </div>
                <div className="field">
                  <label>No. Pages</label>
                  <input 
                  name="pageNo" 
                  ref={register({
                    required: "Required",
                    pattern: {
                    value:  /\d/gi,
                    message: "Must be a number"
                    }
                  })}
                  />
                <p style={{color: 'red'}}>{errors.pageNo && errors.pageNo.message}</p>
                </div>
                <div>

                  <label>Have you read this book?</label>
                    &#160;
                    &#160;
                    <label>Yes</label>
                    <input name="read" type="radio" value="Yes" ref={register({ required: "Required" })}/>
                    &#160;
                    &#160;
                    <label>No</label>
                    <input name="read" type="radio" value="No" ref={register({ required: "Required" })}/>            
                  </div>
                  <p style={{color: 'red'}}>{errors.read && errors.read.message}</p>
                  <br/>
                  <br/>
                  <div>
                    <button className="primary ui button" type="submit">Submit</button>
                    <button className="red ui button close-btn" onClick={handleClick}>Close</button>
                  </div>
              
              </form>
              </div>
      </div>
    </div>
  )
}

export default connect(null, {fetchBook })(Form);