import React from 'react';
import './Results.scss';
import JSONPretty from 'react-json-pretty';

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

function Results({data}) {
  return (
    <div>
      {data && data.results && data.results.map((result, index) => (
        <div key={index}>
          <p>{result.name}</p>
          <p>{result.url}</p>
        </div>
      ))}
      <JSONPretty id="json-pretty" data={data} />
    </div>
  );
}


export default Results;