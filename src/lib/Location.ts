export const getCoordinatesLocationIQ = async (data: string) => {
  const address = `${data.country} ${data.state} ${data.localities} ${data.direction} `;
  console.log("🚀 ~ getCoordinatesLocationIQ ~ address:", address);

  const apiKey = "pk.0c5b224e47b24f48c18919a9ab8f0674"; // Reemplaza con tu API Key
  const url = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${encodeURIComponent(
    address
  )}&format=json&limit=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0]; // Coordenadas
      console.log("Coordenadas obtenidas con LocationIQ:", { lat, lon });
      return { lat, lon };
    } else {
      console.error("No se encontraron resultados en LocationIQ.");
    }
    return data;
  } catch (error) {
    console.error("Error al obtener coordenadas con LocationIQ:", error);
  }
};
