import logo from './asset/svg/moviesLogo.svg'
import './App.scss';
import './asset/style/common.scss';

import Input from './components/input/input'
// import Modal from './components/modal/modal's
import Movies from './components/movies/movies'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="logo" alt="logo" />
        <div className="title size-20 bold">세상의 모든 영화</div>
      </header>
      <Input />
      {/* <Modal /> */}
      <Movies title='국내 박스오피스 순위' type='boxOffice'/>
    </div>
  );
}

export default App;
