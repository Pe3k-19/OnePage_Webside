import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 49.294,
  lng: 21.279,
};

export default function MapTest() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={{ lat: 49.294, lng: 21.279 }} />
      </GoogleMap>
    </LoadScript>
  );
}
