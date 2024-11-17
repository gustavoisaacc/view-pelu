import { useNavigate } from "react-router-dom";
import { formatDate } from "../../hooks/date";
import { UserClient } from "../../schema/auth";
import { Button } from "../ButtonP";
import CardContainer from "../CardContainer";
import ModalViewAppointment from "./ModalViewAppointment";

type TabListProps = {
  selectedTab: string;
  data: UserClient;
};

const TabList = ({ selectedTab, data }: TabListProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-4">
        {selectedTab === "images" && (
          <div>
            <h3 className="text-lg font-semibold mb-5">Galería de Trabajos</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {[].map((i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-lg bg-purple-100"
                >
                  <img
                    alt={`Trabajo ${i}`}
                    className="h-full w-full object-cover"
                    src={`/placeholder.svg?height=300&width=300`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === "appointments" && (
          <div className="">
            <h3 className="text-lg font-semibold mb-5">Agendar Cita</h3>
            <div className="space-y-4 w-full">
              {data && data.appointments ? (
                <>
                  {data.appointments.map((item) => (
                    <CardContainer className="p-2 bg-slate-300 flex justify-between items-center">
                      <div>
                        <h3>{formatDate(item.date)}</h3>
                        <p>{item.startTime}</p>
                        <p>{item.delay} min</p>
                      </div>
                      <Button
                        onClick={() =>
                          navigate(`?view-appointment=${item._id}`)
                        }
                        variant="outline"
                        className="text-lightpurple border-lightpurple"
                      >
                        Reservar
                      </Button>
                    </CardContainer>
                  ))}
                </>
              ) : (
                <p>NO hay turnos disponuibles</p>
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
