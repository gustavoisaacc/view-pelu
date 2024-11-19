import { Calendar, Clock, Scissors } from "lucide-react";
import { formatDate } from "../../hooks/date";

function ListAppointmentDetail({ data }) {
  return (
    <div>
      {data.map((appointment) => (
        <div
          key={appointment._id}
          className="my-4 p-4 bg-white rounded-lg shadow hover:bg-purple-50 transition-colors"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-600">
                <Scissors className="w-5 h-5" />
                <span className="font-medium text-lg capitalize">
                  {appointment.name}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{appointment.startTime}</span>
                duracion:<span>{appointment.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                {/* <span>{formatDate(appointment.date)}</span> */}
                <span>
                  {appointment.date ? formatDate(appointment.date) : "q"}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">
                ${appointment.price.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                ID: {appointment.userId.slice(0, 8)}...
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListAppointmentDetail;
