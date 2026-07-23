"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


interface User {
  id: number;
  firstName: string;
  lastName: string;
}


interface Practice {
  id: number;
  practiceName: string;
}


interface AppointmentFormProps {

  appointment?: any;

  practices: Practice[];

  users: User[];

}



export default function AppointmentForm({

  appointment,

  practices,

  users

}: AppointmentFormProps) {


const router = useRouter();


const [form,setForm] = useState({

  practiceId: appointment?.practiceId?.toString() || "",

  userId: appointment?.userId?.toString() || "",

  title: appointment?.title || "",

  description: appointment?.description || "",

  appointmentDate:
    appointment?.appointmentDate
      ? new Date(appointment.appointmentDate)
          .toISOString()
          .slice(0,16)
      : "",

  status: appointment?.status || "Scheduled"

});


return (

<form>

  {/* your fields here */}

</form>

);


}