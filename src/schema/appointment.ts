export type AppointmentFormData = {
  date: string; // Usamos string para simplificar con `react-hook-form`
  startTime: string;
  delay: number;
  state: boolean;
};
