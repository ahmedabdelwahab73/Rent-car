import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/dailyrent.css'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.css';
import marker from '../images/markmap.png'
import ButtomDelivery from './revicetype/ButtomDelivery';
import ButtomPikup from './revicetype/ButtomPikup';
const Map = ({btn,}) => {
  const [currentLocation, setCurrentLocation] = useState([0, 0]);
  const [selectedLocation, setSelectedLocation] = useState([0, 0]);
  const mapRef = useRef(null);

  useEffect(() => {
    // Get current location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]);
          setSelectedLocation([latitude, longitude]);
        },
        (error) => {
          console.error('Error getting current location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    // Zoom in on the marker when the component is mounted
    if (mapRef.current) {
      mapRef.current.setView(selectedLocation, 13); // Set the desired zoom level
    }
  }, [selectedLocation]);

  const handleMarkerDrag = (e) => {
    setSelectedLocation([e.latlng.lat, e.latlng.lng]);
  };
    return (
      <div className='map'>
        {btn  ? <ButtomDelivery/> : <ButtomPikup/>}
      <MapContainer
        center={currentLocation}
        zoom={15}
        style={{ height: '400px', width: '100%' }}
        ref={mapRef}
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={selectedLocation}
        draggable={true}
        onDragend={handleMarkerDrag}
        icon={L.icon({
          iconUrl: marker,
          iconSize: [15, 25],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        })}
        >
        <Popup>
          Selected Location: {selectedLocation[0]}, {selectedLocation[1]}
        </Popup>
      </Marker>
    </MapContainer>

      </div>

      );
    };


export default Map