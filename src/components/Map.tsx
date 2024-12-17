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
        // Reemplaza 'YOUR_OPENCAGE_API_KEY' con tu clave de API de OpenCage
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?key=420381b72818429e99bccc91cae0b567&q=${latLng.lat}+${latLng.lng}&pretty=1&no_annotations=1`
        );
        const data = await response.json();
        console.log("🚀 ~ fetchAddress ~ data:", data);

        if (data.results && data.results.length > 0) {
          const result = data.results[0];
          console.log("🚀 ~ fetchAddress ~ data:", result);

          // Filtrar la respuesta para obtener solo la calle, localidad y provincia
          const street = result.components.road || "Calle no disponible";
          const locality =
            result.components.city ||
            result.components.town ||
            "Localidad no disponible";
          const province = result.components.state || "Provincia no disponible";
          const house_number = result.components.house_number || "";

          // Actualiza el estado con la dirección completa
          setNewAddress({
            street,
            locality,
            province,
            house_number,
          });

          const fullAddress = `${street} ${house_number}, ${locality}, ${province}`;
          setAddress(fullAddress);
          console.log("🚀 ~ Address data:", fullAddress);
        } else {
          console.error("Error al obtener la dirección:", data.status);
        }
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
