import React, { useState } from "react";
import InfoCard from "./InfoCard";
import infoPhone from "../../Images/Info-phone.png";
import infoLocation from "../../Images/info-locations.png";
import infoEmail from "../../Images/info-email.png";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const Location = () => {
  
  const [containerStyle, setContainerStyle] = useState({
    width: '100%',
    height: '400px',
    borderRadius: '15px',
  }
  )

  const [center, setCenter] = useState({
      lat: 1.3521,
      lng: 103.8198
  })


  const [style, setStyle] = useState({
    color: "black",
    background: "#DAF2FF",
  });


  return (
    <div className="bg-[#F3F7FF] p-5 sm:p-10 md:px-20 lg:px-32 py-10 space-y-8">
      <div className="flex flex-col space-y-2 items-center text-center justify-center">
        <h1 className="text-3xl font-bold">Find Us Here</h1>
      </div>
      <div className="grid gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-center lg:items-center lg:space-x-7">
        <button className="py-3 px-10 font-semibold rounded-xl" style={style}
        onClick={() => setCenter({lat: 1.3521, lng: 103.8198})}
        >
          Singapore
        </button>
        <button className="py-3 px-10 font-semibold rounded-xl" style={style}
        onClick={() => setCenter({lat: 56.1304, lng: 106.3468})}
        >
          Canada
        </button>
        <button className="py-3 px-10 font-semibold rounded-xl" style={style}
        onClick={() => setCenter({lat: 12.9716, lng: 77.5946})}
        >
          Bangalore
        </button>
        <button className="py-3 px-10 font-semibold rounded-xl" style={style}
        onClick={() => setCenter({lat: 61.5240, lng: 105.3188})}
        >
          Russia
        </button>
      </div>
      <div>

      <LoadScript
      googleMapsApiKey="AIzaSyDJa0ARtqzEKBP2p0c3FxnIby6OcSvXiXA"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} animation="DROP" />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>

      </div>
      <div className="flex flex-wrap items-center justify-center md:space-x-0 lg:space-x-10">
        <InfoCard
          image={infoPhone}
          heading="PHONE"
          description="+91 9632585475"
          background='white'
        />
        <InfoCard
          image={infoLocation}
          heading="CORPORATE ADDRESS"
          description="6th Floor, Classic Converge,
Sakti Statesman, Green Glen
Layout, near Ibblur lake,
Bellandur 560103"
background='white'
        />
        <InfoCard
          image={infoEmail}
          heading="EMAIL"
          description="enquiries@plausibility solutions.com"
          background='white'
        />
      </div>
    </div>
  );
};

export default React.memo(Location);
