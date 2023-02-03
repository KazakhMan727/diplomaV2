import "./header.css";

function Header () {
    return (
        // <nav className="header borderRed">
        //     <div className="headerContainer borderGreen">
        //         <div className="navigationBlock borderBlue">
        //             <div className="logo borderYellow">L</div>

        //             <div className="categories borderYellow">
        //                 <button>Категории</button>
        //             </div>
        //         </div>

        //         <div className="searchBlock borderBlue">
        //             <input type="text" placeholder="..." />
        //             <button>Искать</button>
        //         </div>

        //         <div className="functionsBlock borderBlue">
        //             <div className="favorites borderYellow" style={{width: '20%', height: '100%'}}></div>
        //             <div className="favorites borderYellow" style={{width: '20%', height: '100%'}}></div>
        //             <div className="favorites borderYellow" style={{width: '20%', height: '100%'}}></div>
        //         </div>
        //     </div>
        // </nav>

        <nav className="header">
            <div className="headerContainer borderGreen">
                <div className="headerLinks borderBlue">
                    <p>Home</p>
                    <p>Categories</p>
                    <p>Account</p>
                </div>
            </div>
        </nav>
    );
}

export default Header;