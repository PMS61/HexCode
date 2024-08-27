import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'font-awesome/css/font-awesome.min.css'; // Include FontAwesome CSS

const Map = ({ latitude = 19.02217175, longitude = 72.85620391516045, zoomLevel = 12, locationName = "Mumbai", width = '1000px', height = '400px' }) => {
    const mapRef = useRef(null); // Ref to store the map instance

    useEffect(() => {
        // Check if the map is already initialized
        if (mapRef.current === null) {
            // Initialize the map
            mapRef.current = L.map('map').setView([latitude, longitude], zoomLevel);

            L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=TjqLUOrWKEBi18GTwW6V', {
                attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
            }).addTo(mapRef.current);

            // Create a custom icon using FontAwesome
            const fontAwesomeIcon = L.divIcon({
                className: 'fa-custom-icon',
                html: '<i class="fas fa-map-marker-alt"></i>',
                iconSize: [24, 24],
                iconAnchor: [12, 24],
                popupAnchor: [0, -24]
            });

            const marker = L.marker([latitude, longitude], { icon: fontAwesomeIcon }).addTo(mapRef.current);
            marker.bindPopup(`<b>${locationName}</b><br> Latitude: ${latitude}, Longitude: ${longitude}`).openPopup();
        }

        return () => {
            if (mapRef.current !== null) {
                // Clean up the map instance when the component unmounts
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [latitude, longitude, zoomLevel, locationName]);

    return <div id="map" style={{ width: width, height: height, margin: '0 auto' }}></div>;
    return <div id="map" style={{ width: width, height: height, margin: '0 auto' }}></div>;
};

export default Map;

/*
Use the map as:
    <Map 
        latitude={latitude} 
        longitude={longitude} 
        locationName={locationName} 
        width={width} 
        height={height} 
    />
*/
