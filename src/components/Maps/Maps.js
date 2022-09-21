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
    <>
      <div>
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="w-[600px] h-[400px]"
        >
          <>
            <Marker position={center} />
          </>
        </GoogleMap>
      </div>

      <div className="flex flex-col flex-1 items-center">
        <h2 className="text-3xl font-bold mt-12 mb-6">Stop by the Shop!</h2>
        <p>2515 SLS Road</p>
        <p>Chandler, AZ 85286</p>
        <p className="mt-3 font-semibold">Phone</p>
        <p>480-555-6789</p>
        <h4 className="text-md font-bold mt-3">Hours</h4>
        <p>M-F: 8a - 7p</p>
        <p>Sat: 10a - 7p</p>
        <p>Sun: 10a - 5p</p>
      </div>
    </>
  );
};

export default Maps;
