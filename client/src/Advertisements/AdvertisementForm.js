import { useState } from "react";
import "./form.css"

import { addAdvertisement } from "../firebase";

function AdvertisementForm () {
    let [estateType, setEstateType] = useState("home");
    let [area, setArea] = useState(0);
    let [price, setPrice] = useState(0);
    let [payType, setPayType] = useState("sell");
    let [image, setImage] = useState(null);

    function onChangePicture (e) {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    return (
        <div className="createForm borderRed">
            <div className="form__сontainer">
                <select onChange={e => setEstateType(e.target.value)} className="textbox">
                    <option value="home" key="home">Дом</option>
                    <option value="apartment" key="apartment">Квартира</option>
                    <option value="office" key="office">Офис</option>
                </select>

                <input onChange={e => setArea(e.target.value)} type="number" className="textbox" placeholder="Площадь недвижимости" />
                <input onChange={e => setPrice(e.target.value)} type="number" className="textbox" placeholder="Цена продажи/аренды" />

                <select onChange={e => setPayType(e.target.value)} className="textbox">
                    <option value="sell" key="sell">Продажа</option>
                    <option value="rent" key="rent">Аренда</option>
                </select>

                <input style={{marginBottom: "10px"}} type="file" onChange={e => onChangePicture(e)} accept=".jpg, .jpeg, .png" />

                <button onClick={() => addAdvertisement(estateType, area, price, payType, image)} className="create_btn">Сделать объявление</button>
            </div>
        </div>
    );
}

export default AdvertisementForm;