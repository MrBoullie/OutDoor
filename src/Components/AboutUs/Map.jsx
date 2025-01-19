// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const MapComponent = () => {
//   // Map container style
//   const containerStyle = {
//     width: "70%",
//     height: "400px",
//   };

//   // Center on Beirut
//   const center = {
//     lat: 33.8938, // Latitude of Beirut
//     lng: 35.5018, // Longitude of Beirut
//   };

//    // Map options
//    const mapOptions = {
//     gestureHandling: "greedy", // Allows zooming with mouse wheel without Ctrl
//     zoomControl: true,        // Enables zoom controls on the map
//     scrollwheel: true,        // Enables zooming with the mouse wheel
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyBUxSaC90DbHbfok7azsviwuzM1SCa1ZP4">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={12} // Zoom level
//         options={mapOptions} // Apply the map options

//       >
//         <Marker position={center}  
//         icon={{
//         url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", // URL to the icon
//         scaledSize: new window.google.maps.Size(50, 50), // Adjust size (width, height)
//        }} 
//     />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapComponent;


import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const MapComponent = () => {
  // Map container style
  const containerStyle = {
    width: "70%",
    height: "400px",
  };

  // Center on Beirut
  const center = {
    lat: 33.8938, // Latitude of Beirut
    lng: 35.5018, // Longitude of Beirut
  };

  // Map options
  const mapOptions = {
    gestureHandling: "greedy", // Allows zooming with mouse wheel without Ctrl
    zoomControl: true,        // Enables zoom controls on the map
    scrollwheel: true,        // Enables zooming with the mouse wheel
  };

  // Load Google Maps script
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBUxSaC90DbHbfok7azsviwuzM1SCa1ZP4", // Replace with your API key
  });

  if (!isLoaded) {
    return <div>Loading...</div>; // Show a loading state until the map is ready
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12} // Zoom level
      options={mapOptions} // Apply the map options
    >
      <Marker
        position={{lat: 33.8938, lng: 35.5018}}
      />
    </GoogleMap>
  );
};

export default MapComponent;
