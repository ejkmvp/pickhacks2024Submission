import mapimg from "./map.png";
import './mapp.css';

export const Mapp = () => {
  return (
    <div>
        <img src={mapimg} alt="map" className="mapp"/>
    </div>
  );
};

export default Mapp;