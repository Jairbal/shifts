import { IAppointment, IAppointmentNew } from "@/interfaces/appointment.interface";

import moment from "moment";

export const createAppointment = async (data: IAppointmentNew) => {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("Token no valido");

    const res = await fetch("/api/appointment", {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...data,
            appointment: {
                ...data.appointment,
                startDate: moment(data.appointment.startDate).toISOString(),
                endDate: moment(data.appointment.endDate).toISOString(),
            }
        }),
    });
    return await res.json();
}

export const deleteAppointment = async (id: number) => {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("Token no valido");

    const res = await fetch(`/api/appointment/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    return await res.json();
}

export const getAppointments = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("Token no valido");

    const res = await fetch("/api/appointment", {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    const _appointments = await res.json();
    return _appointments.map((appointment: IAppointment) => {
        return {
            ...appointment,
            startDate: moment(appointment.startDate).toDate(),
            endDate: moment(appointment.endDate).toDate(),
        };
    });
}
