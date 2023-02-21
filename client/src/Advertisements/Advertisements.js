import "./advertisements.css";
import "bootstrap/dist/css/bootstrap.css";

import { useEffect, useState } from "react";

import { getAdvertisements } from "../firebase";

function Advertisements () {
    let [ads, setAds] = useState([]);
    let [render, setRender] = useState();

    async function fetchData () {
        const response = await getAdvertisements();
        return response;
    }

    useEffect(() => {
        const result = fetchData()
            .then((result) => {
                let arr = result;
                console.log(arr);
                setRender(result.map(ad => (
                    <div className="col borderCyan">
                        <img style={{width: "250px", height: "250px"}} src={ad.imgUrl} alt="yes" />
                        <p key={ad.id}>{ad.id}</p>
                    </div>
                )));

                // ads.push(...result);
                // setAds(ads);
                // console.log(ads);
            });

        

    }, []);

    return (
        <div className="advertisements container borderRed" style={{marginTop: "50px", marginBottom: "50px"}}>
            <div className="container fluid borderGreen">
                <div className="row row-cols-lg-4 borderBlue">
                    {render}
                </div>
            </div>
        </div>
    );
}

export default Advertisements;