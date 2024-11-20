import { useNavigate } from "react-router-dom";
import { formatDate } from "../../hooks/date";
import { UserClient } from "../../schema/auth";
import { Button } from "../ButtonP";
import CardContainer from "../CardContainer";
import ModalViewAppointment from "./ModalViewAppointment";
import { useQueryClient } from "@tanstack/react-query";

type TabListProps = {
  selectedTab: string;
  data: UserClient;
};

const TabList = ({ selectedTab, data }: TabListProps) => {
  const navigate = useNavigate();
  const quryClient = useQueryClient();
  return (
    <div>
      <div className="mt-4">
        {selectedTab === "images" && (
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Galería de Trabajos</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              <p className="py-10 text-center text-black">En proceso...</p>
            </div>
          </div>
        )}

        {selectedTab === "appointments" && (
          <div className="">
            <h3 className="text-lg font-semibold mb-5">Agendar Cita</h3>
            <div className="space-y-4 w-full">
              {data && data.appointments && data.appointments.length > 0 ? (
                <>
                  {data.appointments.map((item) => (
                    <CardContainer className="p-2 bg-purple-300 flex justify-between items-center">
                      <div>
                        <h3>{formatDate(item.date)}</h3>
                        <p>{item.startTime}</p>
                        <p>{item.delay} min</p>
                      </div>
                      <Button
                        onClick={() => {
                          navigate(`?view-appointment=${item._id}`);
                          quryClient.invalidateQueries({
                            queryKey: ["appointment"],
                          });
                        }}
                        variant="outline"
                        className="text-primary border-primary"
                      >
                        Reservar
                      </Button>
                    </CardContainer>
                  ))}
                </>
              ) : (
                <p className="py-10 text-center text-gray-400">
                  No hay turnos disponuibles
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <ModalViewAppointment />
    </div>
  );
};

export default TabList;
