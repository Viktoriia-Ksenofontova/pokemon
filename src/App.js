import image1 from './img/bg1.jpg';
import image2 from './img/bg3.jpg';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header
        title="This is Header Title"
        descr="This is Header description" />
      <Layout
        title="Layout 1"
        descr="Thit is Layout 1 description"
        urlBg={image1}
      />
      <Layout
        title="Layout 2"
        descr="Thit is Layout 2 description"
        colorBg="#e2e2e2"
      />
      <Layout
        title="Layout 3"
        descr="Thit is Layout 3 description"
        urlBg={image2}
      />
      <Footer/>
    </div>
  );
}

export default App;
