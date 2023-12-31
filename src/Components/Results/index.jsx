import React from 'react';
import './Results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Results({data}) {
  return (
    <div>
      {data && data.results && data.results.map((result, index) => (
        <div key={index}>
          <p>{result.name}</p>
          <p>{result.url}</p>
        </div>
      ))}
      <div className='json-pretty'>
      <JSONPretty id='json-pretty' data={data} />
      </div>
    </div>
  );
}


export default Results;