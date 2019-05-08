import React from 'react';
import logo from '@/logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          你是交电话费送的吗 
        </a>
        <a
          className= "App-baidu" 
          href= "https://www.baidu.com">
          我是跳转百度的
        </a>
      </header>
    </div>
  );
}

export default App;
