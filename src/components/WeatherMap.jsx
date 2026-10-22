import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function WeatherMap() {
  return (
    <MapContainer
      center={[17.385, 78.4867]} // Hyderabad
      zoom={10}
      className="h-[400px] w-full rounded-3xl"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[17.385, 78.4867]}>
        <Popup>Hyderabad</Popup>
      </Marker>
    </MapContainer>
  );
}

export default WeatherMap;
