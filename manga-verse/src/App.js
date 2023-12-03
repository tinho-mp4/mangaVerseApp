import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/intro/Home';
import Browse from './components/Browse/Browse';
import News from './components/News/News';
import Topbar from './components/topbar/Topbar';


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Home />
      <Browse />
      <News />
      <Contact />
      <Footer />
    </>
  )
}

export default App
