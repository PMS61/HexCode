import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'font-awesome/css/font-awesome.min.css'; // Include FontAwesome CSS

const defaultLocation = [{
    name: 'Mumbai',
    latitude: 19.02217175,
    longitude: 72.85620391516045
}];

const locationsList = [
    { name: 'Colaba', latitude: 18.9076, longitude: 72.8075 },
    { name: 'Bandra', latitude: 19.0544, longitude: 72.8402 },
    { name: 'Andheri', latitude: 19.1197, longitude: 72.8467 },
    { name: 'Dadar', latitude: 19.0176, longitude: 72.8423 },
    { name: 'Goregaon', latitude: 19.1644, longitude: 72.8493 },
    { name: 'Juhu', latitude: 19.0980, longitude: 72.8267 },
    { name: 'Kurla', latitude: 19.0653, longitude: 72.8794 },
    { name: 'Mulund', latitude: 19.1726, longitude: 72.9470 },
    { name: 'Malabar Hill', latitude: 18.9504, longitude: 72.7986 },
    { name: 'Worli', latitude: 19.0176, longitude: 72.8162 },
    { name: 'Mumbai', latitude: 19.0760, longitude: 72.8777 }
]; 

const Map = ({locations = locationsList, zoomLevel = 12, width = '60%', height = '40vh' }) => {
    const mapRef = useRef(null); // Ref to store the map instance

    useEffect(() => {
        // Check if the map is already initialized
        if (mapRef.current === null) {
            // Initialize the map
            mapRef.current = L.map('map').setView([defaultLocation[0].latitude, defaultLocation[0].longitude], zoomLevel);

            L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=TjqLUOrWKEBi18GTwW6V', {
                attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
            }).addTo(mapRef.current);

            // Create a custom icon using FontAwesome
            locations.forEach((location) => {
                const fontAwesomeIcon = L.divIcon({
                    className: 'fa-custom-icon',
                    html: '<i class="fas fa-map-marker-alt"></i>',
                    iconSize: [24, 24],  // Increased marker size
                    iconAnchor: [12, 24],
                    popupAnchor: [0, -24]
                });
    
                const marker = L.marker([location.latitude, location.longitude], { icon: fontAwesomeIcon }).addTo(mapRef.current);
                marker.bindPopup(`<b>${location.name}</b><br> Latitude: ${location.latitude}, Longitude: ${location.longitude}`).openPopup();
            });
        }

        return () => {
            if (mapRef.current !== null) {
                // Clean up the map instance when the component unmounts
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [locations, zoomLevel]);

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
