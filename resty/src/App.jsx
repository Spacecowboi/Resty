import React, { useState, useEffect } from 'react';
import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {
  const[data, setData] = useState(null);
  const[requestParams, setRequestParams] = useState({});
  const[loading, setLoading] = useState(false); //how we set the loading when the api call is made

  const callApi = async (params) => {
    setLoading(true);
    try {
      const response = await fetch(params.url, {method: params.method});
      const data = await response.json();
      setData(data);
      setRequestParams(params);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  }

  useEffect(() => {
    if(requestParams.url && requestParams.method) {
      callApi(requestParams);
    }
  }, [requestParams]);

    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        {loading ? <div>Loading...</div> : <Results data={data} />} 
        <Footer />
      </React.Fragment>
    );
  }


export default App;