import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Address, Location } from "../view/EditarProfileView";

type MapProps = {
  location: Location;
  setNewAddress: React.Dispatch<React.SetStateAction<Address>>;
};

function CenterOnZoom({ location }: { location: Location }) {
  const map = useMapEvents({
    zoomend: () => {
      map.panTo([Number(location.lat), Number(location.lon)]);
    },
  });
  return null;
}

function Map({ location, setNewAddress }: MapProps) {
  const [address, setAddress] = useState<string | null>(null);
  const [latLng, setLatLng] = useState<L.LatLng>(
    new L.LatLng(Number(location.lat), Number(location.lon))
  ); // Guardar lat y lon en estado

  const handleDragEnd = (event: L.DragEndEvent) => {
    const marker = event.target as L.Marker;
    const newLatLng = marker.getLatLng();
    setLatLng(newLatLng);
  };

  useEffect(() => {
    const fetchAddress = async () => {
      if (latLng.lat && latLng.lng) {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latLng.lat}&lon=${latLng.lng}&format=json`
        );
        const data = await response.json();
        console.log("🚀 ~ fetchAddress ~ data:", data);

        // Filtrar la respuesta para obtener solo la calle, localidad y provincia
        const street = data.address?.road || "Calle no disponible";
        const locality =
          data.address?.city_district || "Localidad no disponible";
        const province = data.address?.state || "Provincia no disponible";
        const house_number = data.address?.house_number || "";
        setNewAddress({
          street: data.address?.road,
          locality: data.address?.city_district,
          province: data.address?.state,
          house_number: data.address?.house_number || "",
        });
        const fullAddress = `${street} ${house_number}, ${locality}, ${province}`;
        setAddress(fullAddress);
        console.log("🚀 ~ Address data:", fullAddress);
      }
    };

    fetchAddress();
  }, [latLng]);

  return (
    <MapContainer
      center={[latLng.lat, latLng.lng]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marcador que es arrastrable */}
      <Marker
        position={latLng}
        draggable={true}
        autoPan={true}
        eventHandlers={{
          dragend: handleDragEnd, // Actualiza las coordenadas cuando el marcador es movido
        }}
      >
        <Popup>Dirección: {address}</Popup>
      </Marker>

      <CenterOnZoom location={latLng} />
    </MapContainer>
  );
}

export default Map;
