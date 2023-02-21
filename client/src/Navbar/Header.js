import { useNavigate } from "react-router-dom";
import "./header.css";

function Header () {
    let navigate = useNavigate();

    return (
        <nav className="header">
            <div className="headerContainer borderGreen">
                <div className="headerLinks borderBlue">
                    <p onClick={() => navigate("/")}>Home</p>
                    <p onClick={() => navigate("/advertisements")}>Advertisements</p>
                    <p onClick={() => navigate("/account")}>Account</p>
                </div>
            </div>
        </nav>
    );
}

export default Header;