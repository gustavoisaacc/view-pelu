import { useNavigate } from "react-router-dom";
import { formatDate } from "../../hooks/date";
import { UserClient } from "../../schema/auth";
import { Button } from "../ButtonP";
import CardContainer from "../CardContainer";
import ModalViewAppointment from "./ModalViewAppointment";
import { useQueryClient } from "@tanstack/react-query";
import { Clock, Calendar, Clock3 } from "lucide-react";
import { MapClient } from "../MapClient";
import { Location } from "../../view/PeluqueroDetailView";
import { useEffect, useState } from "react";
import { getCoordinatesLocationIQ } from "../../lib/Location";
import { MapPin } from "lucide-react";

type TabListProps = {
  selectedTab: string;
  data: UserClient;
};

const TabList = ({ selectedTab, data }: TabListProps) => {
  console.log("🚀 ~ TabList ~ data:", data);
  const [location, setLocation] = useState<Location>();
  const navigate = useNavigate();
  const quryClient = useQueryClient();
  const address = `${data.user.country} ${data.user.state} ${data.user.localities} ${data.user.direction}`;
  useEffect(() => {
    const el = async () => {
      const res = await getCoordinatesLocationIQ(data.user);
      console.log("🚀 ~ el ~ res:", res);
      setLocation(res);
    };
    el();
  }, []);
  return (
    <div>
      <div className="mt-4">
        {selectedTab === "ubicacion" && (
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Ubicacion</h3>
            {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            </div> */}
            <div className="w-full">
              <MapClient location={location} address={address} />
              <p className="text-gray-200 flex mt-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                {address}
              </p>
            </div>
          </div>
        )}

        {selectedTab === "appointments" && (
          <div className="">
            <div className="bg-[#9c27b0] text-white rounded-t-lg">
              <h3 className="text-2xl font-bold text-center">Agendar Cita</h3>
            </div>
            <div className="space-y-4 w-full">
              {data && data.appointments && data.appointments.length > 0 ? (
                <>
                  {data.appointments.map((appointment) => (
                    <CardContainer className="p-5 bg-white flex justify-between items-center">
                      <div className="flex flex-col gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#9c27b0]" />
                          <span>{formatDate(appointment.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#9c27b0]" />
                          <span>{appointment.startTime}</span>
                        </div>
                        <div className="flex items-center justify-between bg-[#f3e5f5] rounded-lg">
                          <div className="flex items-center gap-2">
                            <Clock3 className="w-4 h-4 text-[#9c27b0]" />
                            <span className="font-sm text-sm text-[#4a148c]">
                              Tiempo de espera estimado:
                            </span>
                          </div>
                          <span className="font-bold text-[#9c27b0]">
                            {appointment.delay} min
                          </span>
                        </div>
                      </div>
                      <Button
                        onClick={() => {
                          navigate(`?view-appointment=${appointment._id}`);
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
