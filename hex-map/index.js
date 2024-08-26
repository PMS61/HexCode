let map = L.map('map').setView([19.0760, 72.8777], 14);

L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=TjqLUOrWKEBi18GTwW6V', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

let fontAwesomeIcon = L.divIcon({
    className: 'fa-custom-icon',
    html: '<i class="fas fa-map-marker-alt"></i>',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48]
});

let circle = L.circle([19.0760, 72.8777], {radius: 1000}).addTo(map);

let marker = L.marker([19.0760, 72.8777], {icon: fontAwesomeIcon}).addTo(map);

marker.bindPopup("<b>Mumbai</b>, <i>Maharashtra</i> <br> India.").openPopup();
