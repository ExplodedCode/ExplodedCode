import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';

import {useDocTitle} from './components/CustomHook';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Exploded Code: An Open Source Company");

  const RedirectUrl = ({ url, page }) => {
    useEffect(() => {
      window.open(url, '_blank');
      window.location.href = window.location.protocol + "//" + window.location.host + page;
    }, [url]);

    return <Home />;
  };

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
            <Route path="/twitter" element={<RedirectUrl url="https://twitter.com/explodedcode" page="/" />}  />
            <Route path="/instagram" element={<RedirectUrl url="https://www.instagram.com/explodedcode" page="/" />}  />
            <Route path="/linkedin" element={<RedirectUrl url="https://www.linkedin.com/company/exploded-code" page="/" />}  />
            <Route path="/giftamizer" element={<RedirectUrl url="https://giftamizer.com" page="/get-demo" />}  />
            <Route path="/puppyclock" element={<RedirectUrl url="https://puppyclock.com" page="/get-demo" />}  />
          </Routes>
      </Router>
    </>
  );
}


export default App;
