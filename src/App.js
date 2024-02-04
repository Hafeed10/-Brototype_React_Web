import Head from '../src/components/Head';
import Home from '../src/components/home/Home';
import Features from '../src/components/Features/Features';
import './App.css';
import Brocamp from './components/Brocamp/Brocamp';
import Domains from './components/Domains/Domains';
import Pages from './components/Pages/Middle';  // Adjust the path accordingly
import Last from '../src/components/Last/Last';
import Hop from './components/Hop/Hop';
import Whatsapp from './components/Whatsapp/Whatsapp';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Head/>
      <Home/>
      <Features/>
      <Brocamp/>
      <Domains/>
      <Pages/>
      <Last/>
      <Hop/>
      <Whatsapp/>
      <Footer/>
    </>
  );
}

export default App;
