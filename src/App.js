import React, { useRef, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld'

const LOCAL_STORAGE_KEY = 'myLocalStorageKey';

function App() {
  const [names, setNames] = useState([]);
  const nameInput = useRef();

  function testFunction(e) {
    const name = nameInput.current.value;
    if (name === '') return
    alert("Hello " + name + "!")
    setNames(prevNames => {
      return [...prevNames, name]
    })
    nameInput.current.value = null;
  }

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedData) setNames(storedData)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(names))
  }, [names])

  return (
    <div>
      <input ref={nameInput} type="text"></input>
      <button onClick={testFunction}>Press me!</button>
      <HelloWorld names={names} />
    </div>
  );
}

export default App;
