// import logo from './logo.svg';
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Search from "./Components/Search";
import Home from "./Components/Home";
import Likes from "./Components/Likes";
import MyShop from "./Components/MyShop";


import Header from "./Headers/Header";
import Footer from "./Headers/Footer";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import News from "./Components/News";
import Effects from "./Components/Effects";
import Translate from "./Components/Translate";
import Charts from "./Components/Charts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About name='LARAVEL' author='PHP' />} />
          <Route path="/contact" element={<Contact write='COMPONENT' />} />
          <Route path="/search" element={<Search />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/news" element={<News />} />
          <Route path="/effects" element={<Effects />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/chart" element={<Charts />} />
          <Route path="/myshop" element={<MyShop />} />

        </Routes>
      </BrowserRouter>

      <Footer></Footer>


    </>
  );
}

export default App;
