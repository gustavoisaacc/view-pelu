import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Location } from "../view/EditarProfileView";

type MapProps = {
  location: Location;
};

export function CenterOnZoom({ location }: { location: Location }) {
  const map = useMapEvents({
    zoomend: () => {
      map.panTo([Number(location.lat), Number(location.lon)]);
    },
  });
  return null;
}

export function MapClient({ location }: MapProps) {
  return (
    <MapContainer
      center={[Number(location.lat), Number(location.lon)]}
      zoom={13}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marcador que es arrastrable */}
      <Marker position={[Number(location.lat), Number(location.lon)]}>
        <Popup>Dirección: {}</Popup>
      </Marker>

      <CenterOnZoom location={location} />
    </MapContainer>
  );
}
