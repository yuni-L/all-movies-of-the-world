import logo from './asset/svg/moviesLogo.svg'
import './App.scss';
import './asset/style/common.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="logo" alt="logo" />
        <div className="title size-20 bold">세상의 모든 영화</div>
      </header>
    </div>
  );
}

export default App;
