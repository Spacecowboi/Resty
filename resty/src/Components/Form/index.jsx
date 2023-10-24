import React, { useState } from 'react';
import './Form.scss';

function Form(props) {
  //getter, setter
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted here:', url, 'with this method:', method);
    const formData = {
      method,
      url,
    };
    props.handleApiCall(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' value={url} onChange={e => setUrl(e.target.value)} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">            
          <span id="get" onClick={() => setMethod('GET')}>GET</span>
          <span id="post" onClick={() => setMethod('POST')}>POST</span>
          <span id="put" onClick={() => setMethod('PUT')}>PUT</span>
          <span id="delete" onClick={() => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  )
}
export default Form;