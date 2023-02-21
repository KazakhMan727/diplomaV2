import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Navbar/Header";

import MainPage from "./MainPage/MainPage";

import Advertisements from "./Advertisements/Advertisements";
import AdvertisementForm from "./Advertisements/AdvertisementForm";

import AccountPage from "./Account/AccountPage";
import Register from "./Account/Register";
import Login from "./Account/Login";

import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/advertisements" element={<Advertisements />} />
                    <Route path="/create" element={<AdvertisementForm />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
  }
  
export default App;