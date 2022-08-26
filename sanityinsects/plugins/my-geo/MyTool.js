import React from 'react'
import { useGeolocated } from "react-geolocated";


export default function Mygeo(props) {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  const latitud = coords?.latitude
  const longitud = coords?.longitude

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (<>
    {latitud}  {longitud}
  </>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
}


