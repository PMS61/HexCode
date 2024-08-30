import React, { useState, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';

const LocationSearch = ({ onLocationSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const debouncedSearch = useCallback(
    debounce(async (input) => {
      if (input.length < 3) return;
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
          params: {
            q: input,
            format: 'json',
            limit: 5,
            countrycodes: 'in',
          }
        });
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    }, 300),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    debouncedSearch(value);
  };

  const handleSuggestionSelect = (place) => {
    onLocationSelect({
      name: place.display_name,
      lat: parseFloat(place.lat),
      lon: parseFloat(place.lon)
    });
    setSearchQuery(place.display_name);
    setSuggestions([]);
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for a location"
        style={{
          boxSizing: 'border-box',
          width: '100%',
          padding: '10px',
          margin: '10px 0',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
      {suggestions.length > 0 && (
        <ul style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          border: '1px solid #ccc',
          borderRadius: '0 0 5px 5px',
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          zIndex: 1000
        }}>
          {suggestions.map((suggestion, index) => (
            <li 
              key={index}
              onClick={() => handleSuggestionSelect(suggestion)}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee'
              }}
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSearch;