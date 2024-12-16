export async function getState() {
  try {
    const URL = `https://apis.datos.gob.ar/georef/api/provincias`;
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getLocalities(provinciaId) {
  try {
    const URL = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinciaId}&max=112`;
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
