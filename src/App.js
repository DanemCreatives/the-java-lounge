import "animate.css/animate.min.css";
import "./utilities/page.style.scss";
import "./utilities/animations.style.scss";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./components/Header/header.component";
import Footer from "./components/Footer/footer.component";
import HomePage from "./pages/HomePage/home-page.page";
import About from "./pages/About/about.page";
import BrewGuide from "./pages/BrewGuide/brew-guide.page";
import ProductListing from "./pages/ProductListing/product-listing.page";
import SingleProduct from "./pages/SingleProduct/single-product.page";
import Contact from "./pages/Contact/contact.page";
import Login from "./pages/Login/login.page";
import ForgotPassword from "./pages/ForgotPassword/forgot-password.page";
import Register from "./pages/Register/register.page";
import PrivacyPolicy from "./pages/PrivacyPolicy/privacy-policy.page";
import TermsAndConditions from "./pages/TermsAndConditions/terms-and-conditions.page";
import FAQs from "./pages/Faqs/faqs.page";
import MobileMenu from "./components/MobileMenu/mobile-menu.component";

const App = () => {
  const [offset, setOffset] = useState("transparent");
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenu(false);
  }, [location]);

  window.addEventListener("scroll", () =>
    window.scrollY > 0 ? setOffset("fill") : setOffset("transparent")
  );

  const handleMobileMenu = (status) => {
    setMobileMenu(status);
  };

  return (
    <main>
      <Header handleMobileMenu={handleMobileMenu} type={offset} />
      <MobileMenu handleMobileMenu={handleMobileMenu} mobileMenu={mobileMenu} />
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="brew-guide" element={<BrewGuide />} />
          <Route path="shop" element={<ProductListing />} />
          <Route path="shop/:id" element={<SingleProduct />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="register" element={<Register />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="faqs" element={<FAQs />} />
        </Routes>
      </ParallaxProvider>
      <Footer showImage={location.pathname === "/" ? true : false} />
    </main>
  );
};

export default App;
