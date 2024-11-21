import { useQuery } from "@tanstack/react-query";
import { getAllDetailAppointmentReservation } from "../api/DetaillApi";
import ListAppointmentDetail from "../components/citas/ListAppointmentDetail";
import Button from "../components/Button";

function DetailView() {
  const { data } = useQuery({
    queryKey: ["detail"],
    queryFn: getAllDetailAppointmentReservation,
  });
  console.log("🚀 ~ DetailView ~ data:", data);
  if (data)
    return (
      <div className="w-full  mx-auto p-4 min-h-screen">
        <div className="max-w-screen-lg mx-auto p-4 bg-purple-300 rounded-lg">
        <Button
          route="/dashboard"
          className="mb-4 flex justify-center bg-primary hover:bg-secondary"
        >
          Volver
        </Button>
        <div className="bg-purple-500 text-white">
          <h3 className="text-2xl font-bold py-5 text-center">
            Turnos Reservados
          </h3>
        </div>
        <ListAppointmentDetail data={data} />
      </div>
      </div>
    );
}

export default DetailView;
