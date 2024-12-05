import React from "react";

async function getState() {
  try {
    const URL = `https://apis.datos.gob.ar/georef/api/provincias`;
    const res = await fetch(URL);
    return res.json();
    console.log("🚀 ~ apiCountry ~ URL:", URL);
  } catch (error) {
    console.log(error);
  }
}

export default getState;
