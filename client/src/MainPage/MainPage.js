import "./mainpage.css";

function MainPage () {
    return (
        <div className="dataBlock borderRed" style={{marginTop: "50px", marginBottom: "50px"}}>
            <div className="firstBlock borderGreen">
                <div className="carousel borderBlue"></div>
            </div>

            <div className="secondBlock borderGreen">
                <div className="row borderBlue">
                    <div className="blockCategory borderYellow"></div>
                    <div className="blockCategory borderYellow"></div>
                    <div className="blockCategory borderYellow"></div>
                </div>

                <div className="row borderBlue">
                    <div className="blockCategory borderYellow"></div>
                    <div className="blockCategory borderYellow"></div>
                    <div className="blockCategory borderYellow"></div>
                </div>

                <div className="row borderBlue">
                    <div className="blockCategory borderYellow"></div>
                    <div className="blockCategory borderYellow"></div>
                    <div className="blockCategory borderYellow"></div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;