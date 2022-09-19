import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY,
  });

  const center = useMemo(() => ({ lat: 33.29142, lng: -111.97979 }), []);

  return !isLoaded ? (
    <div>Loading Map to Shop...</div>
  ) : (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="w-[600px] h-[400px]"
    >
      <>
        <Marker position={center} />
      </>
    </GoogleMap>
  );
};

export default Maps;
