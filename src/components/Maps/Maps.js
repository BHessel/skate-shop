import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
// import locationIcon from "@iconify/icons-mdi/map-marker";

const Maps = ({ location, zoomLevel }) => {
  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon="mdi:map-marker" className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );

//   console.log(location)
  return (
    <div className="w-full h-screen">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin lat={location.lat} lng={location.lng} text="The Shop" />
      </GoogleMapReact>
    </div>
  );
};

export default Maps;
