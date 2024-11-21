const HairSalonSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-24 h-24">
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
