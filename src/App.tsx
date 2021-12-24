import React from 'react';
import './App.css';
import {Text, View, ReactJSCanvas} from './Canvas';

const screen1 = new ReactJSCanvas();
screen1.onLoad().fetch('https://google.com?q=wix').cache()

const test1 = () => {
  return View([
    Text('Mendy'), Text('Edri')
  ])
    .backgroundColor('red')
    .width(130)
    .height(220)
    .margin(10);
}

const test2 = () => {
  return View(
    [
      Text('Mendy'), 
      Text('Edri')
        .backgroundColor('red')
    ])
      .size(200)
      .backgroundColor('green')
      .margin(10);;
}

const test3 = () => {
  return View().size(100).backgroundColor('pink').padding(20).margin(10);;
}

const test4 = () => {
  return View(
    [
      Text('Test 4')
        .backgroundColor('yellow'), 
      View()
        .size(30)
        .backgroundColor('blue')
    ])
      .size(100)
      .backgroundColor('pink')
      .margin(10);
}

const jsx1 = screen1.draw(test1());
const jsx2 = screen1.draw(test2());
const jsx3 = screen1.draw(test3());
const jsx4 = screen1.draw(test4());

// TODO: Export viewable to make it used by others for custom ui 

function App() {
  const runTest = (title: string, jsx: any) => {
    return (
      <div className="Test">
        {title}
        {jsx}
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Run Canvas:</p>
        <div className='Container'>
          {runTest('Test 1', jsx1)}
          {runTest('Test 2', jsx2)}
          {runTest('Test 3', jsx3)}
          {runTest('Test 4', jsx4)}
        </div>
      </header>
    </div>
  );
}

export default App;
