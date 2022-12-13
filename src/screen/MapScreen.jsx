import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const MapScreen = () => {
  return (
    <MapContainer
      center={[21.006860317350128, 105.84517256817203]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[21.006860317350128, 105.84517256817203]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapScreen;
