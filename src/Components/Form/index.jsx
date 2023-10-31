import React, { useState } from 'react';
import './Form.scss';

function Form(props) {
  //getter, setter
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted here:', url, 'with this method:', method);
    const formData = {
      method,
      url,
      body,
    };
    props.handleApiCall(formData);
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>
            <span>URL: </span>
            <input name='url' type='text' value={url} onChange={e => setUrl(e.target.value)} />
          </label>
          <label>
            <span>Body: </span>
            <input name= 'body' type='text' value={body} onChange={e => setBody(e.target.value)} />
          </label>
        </div>
        <div className="methods">
          <span id="get" onClick={() => setMethod('GET')}>GET</span>
          <span id="post" onClick={() => setMethod('POST')}>POST</span>
          <span id="put" onClick={() => setMethod('PUT')}>PUT</span>
          <span id="delete" onClick={() => setMethod('DELETE')}>DELETE</span>
        </div>
        <button type="submit">GO!</button>
      </form>
    </div>
  )
}
export default Form;