import { IPatientCreated } from "./patient.interface"
import { IUserCreated } from "./user.interface"

export interface IAppointment {
    diagnostic: string
    startDate: Date
    endDate: Date
    specialtyId: number
    patientId: number
    doctorId: number
}

export interface IAppointmentCreated extends IAppointment {
    id: string
    createdAt: string
    patient: IPatientCreated,
    doctor: IUserCreated
}