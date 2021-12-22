import React from 'react';
import './App.css';
import {Text, View, ReactJSCanvas} from './Canvas';

const screen1 = new ReactJSCanvas();
screen1.onLoad().fetch('https://google.com?q=wix').cache()

const ui = () => {
  return View([Text('Mendy'), Text('Edri')]).backgroundColor('red').width(130).height(220)
}

const text = () => {
  return View([Text('Mendy'), Text('Edri')]).size(100).backgroundColor('green').padding(20);
}

const single = () => {
  return View().size(100).backgroundColor('pink').padding(20);
}

const jsx = screen1.draw(single());

// TODO: Export viewable to make it used by others for custom ui 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Run Canvas:</p>
        {jsx}
      </header>
    </div>
  );
}

export default App;
