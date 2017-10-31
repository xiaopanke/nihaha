import React from 'react';
 import ReactDOM from 'react-dom';


function tick() {
  let clock=(
    <div>
        <h1>{new Date().toLocaleString()}</h1>
    </div>
  )
  ReactDOM.render(
    clock,
    document.getElementById('root')
  );
}


setInterval(tick,1000)
