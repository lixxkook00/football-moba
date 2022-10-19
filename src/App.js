import './App.scss';

import Sidebar from './components/SideBar'
import Main from './components/Main'
import HeaderMobile from './components/HeaderMobile';

function App() {
  return (
    <div className="App">

      <HeaderMobile />

      <Sidebar />

      <Main />
      
    </div>
  );
}

export default App;
