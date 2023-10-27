import React, { useReducer, useEffect } from 'react';
import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';

// function App() {
//   const[data, setData] = useState(null);
//   const[requestParams, setRequestParams] = useState({});
//   const[loading, setLoading] = useState(false); //how we set the loading when the api call is made

//   const callApi = async (params) => {
//     setLoading(true);
//     try {
//       const response = await fetch(params.url, {method: params.method});
//       const data = await response.json();
//       setData(data);
//       setRequestParams(params);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//     setLoading(false);
//   }

//   useEffect(() => {
//     if(requestParams.url && requestParams.method) {
//       callApi(requestParams);
//     }
//   }, [requestParams]);

//   }

const initialState = {
  data: null,
  requestParams: {},
  loading: false,
  history: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'RESULTS':
      return { 
        ...state, 
        loading: false, 
        data: action.payload.data, 
        requestParams: action.payload.requestParams
      };
    case 'SET_HISTORY':
      return {
        ...state,
        history: [...state.history, action.payload]
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const callApi = async (params) => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await fetch(params.url, {method: params.method});
      const data = await response.json();
      dispatch({ type: 'RESULTS', payload: { data, requestParams: params } });
      dispatch({ type: 'SET_HISTORY', payload: params });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    if(state.requestParams.url && state.requestParams.method) {
      callApi(state.requestParams);
    }
  }, [state.requestParams]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <History history={state.history} onSelect={item => dispatch({ type: 'RESULTS', payload: { data: state.data, requestParams: item } })} />
      {state.loading ? <div>Loading...</div> : <Results data={state.data} />} 
      <Footer />
    </React.Fragment>
  );
}
export default App;