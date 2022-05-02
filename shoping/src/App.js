import logo from './logo.svg';
import './App.css';
//创建APP.js
//在APP.js中导入React
//创建组件(函数或者类),此文件中为类组件
//导出该组件
//在index.js中导入该组件
//渲染组件
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
