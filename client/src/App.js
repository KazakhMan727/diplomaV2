import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Navbar/Header";
import MainPage from "./MainPage/MainPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
  }
  
export default App;