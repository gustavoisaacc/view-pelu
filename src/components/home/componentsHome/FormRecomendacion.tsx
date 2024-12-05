

const FormRecomendacion= () => {
  return (
    <>
    
    <div className=" grid place-items-center h-full w-5/12  bg-primary m-auto mt-56 rounded-lg shadow-lg shadow-purple-300 py-3">
      <h1 className='text-center font-bold text-white'>CORTES RECOMENDADOS DEL MES</h1>
      <div className="flex justify-center p-8">
      <form className="flex flex-col w-full max-w-md p-6 bg-purple-300 shadow-md rounded-md md:w-2/3 lg:w-1/2 mr-8">
        <h2 className="text-2xl font-bold text-center mb-2">Corte Mullet</h2>
        <p className="text-sm text-gray-600 text-center mb-4">Corte recomendado por nuestros profecionales</p>
        <img
          src="https://lamejor.com.mx/u/fotografias/m/2024/5/28/f768x1-15843_15970_5050.jpg"
          alt="Imagen del Formulario"
          className="mx-auto mb-4 w-full max-w-xs rounded-md"
        />
      </form>
      <form className="flex flex-col w-full max-w-md p-6 bg-purple-300 shadow-md rounded-md md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-bold text-center mb-2">Corte Pixie</h2>
        <p className="text-sm text-gray-600 text-center mb-4">Corte recomendado por nuestros profecionales</p>
        <img
          src="https://content.clara.es/medio/2024/08/26/cortes-de-pelo-corto-para-mujer-2024-pixie-desfilado_162d7889_240826113304_800x1000.webp"
          alt="Imagen del Formulario"
          className="mx-auto mb-4 w-full max-w-xs rounded-md h-56 object-cover"
        />
      </form>
      </div>
    </div>
    </>
  );
};

export default FormRecomendacion;