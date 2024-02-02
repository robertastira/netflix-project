import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import FooterSection from './components/FooterSection';
import MainSection from './components/MainSection';


function App() {
  return (
    <div>
      <header>
      <NavbarComponent/>
      <MainSection/>
      <FooterSection/>
      </header>
    </div>
  );
}

export default App;
