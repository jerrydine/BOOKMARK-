import './App.css';
import Download from './component/Download';
import Features from './component/Features';
import Header from './component/Header'
import Main from './component/Main';
import Faqs from './component/Faqs'
import Form from './component/Form';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Features/>
      <Main/>
      <Download/>
      <Faqs/>
      <Form/>
      <Footer/>

    </div>
  );
}

export default App;
