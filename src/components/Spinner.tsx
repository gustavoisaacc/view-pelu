const HairSalonSpinner = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-gray-100 flex items-start justify-center h-screen">
      <div className="relative w-24 h-24 mt-72"> {/* Ajustar mt para centrar verticalmente */}
        {/* Spinner */}
        <div className="absolute inset-0 rounded-full border-4 border-t-4 border-pink-400 border-opacity-50 animate-spin"></div>

        {/* Icono de tijeras */}
        <div className="absolute inset-0 flex items-center justify-center text-pink-600 text-4xl font-bold">
          ✂️
        </div>
      </div>
    </div>
  );
};

export default HairSalonSpinner;
