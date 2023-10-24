import React, {useState} from 'react';
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

  const callApi = (params) => {
    console.log('API call made!', params);
    // mock output
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setData(data);
    console.log('we set the data:', data);
    setRequestParams(params);
    console.log('Request params have been set captain:', params)
    setLoading(false);
    console.log('The load is false milord')
  }

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