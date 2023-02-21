import "./advertisements.css";

function AdvertisementBlock (props) {
    return (
        <div className="advtBlock">
            {props.title}
        </div>
    );
}

export default AdvertisementBlock;