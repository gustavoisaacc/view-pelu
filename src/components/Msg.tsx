const NoBookingsMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] bg-gray-50 border border-gray-300 rounded-md shadow-md p-6">
      <p className="text-lg font-semibold text-gray-600">
        No se han reservado turnos aún
      </p>
    </div>
  );
};

export default NoBookingsMessage;
