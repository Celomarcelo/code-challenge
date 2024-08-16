import css from './App.module.css';
import SideBar from './components/Sidebar';
import EstatefulGeating from './components/ClassComponent';
import SimpleNavbar from './components/SimpleNavbar';

function App() {
  return (
    <div className={css.App}>
      <SimpleNavbar name ="Marcus"/>
    </div>
  );
}

export default App;