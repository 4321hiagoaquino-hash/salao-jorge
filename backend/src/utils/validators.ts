import { z } from 'zod'

export const CreateServiceSchema = z.object({
  name: z.string().min(3).max(100),
  description: z.string().optional(),
  price: z.number().positive(),
  duration: z.number().positive().int(),
  category: z.enum(['masculino', 'feminino']),
})

export const CreateAppointmentSchema = z.object({
  clientName: z.string().min(3).max(100),
  clientPhone: z.string().min(10).max(15),
  clientEmail: z.string().email().optional(),
  serviceId: z.string().cuid(),
  appointmentDate: z.string().datetime(),
  paymentMethod: z.enum(['pix', 'cash']),
  notes: z.string().optional(),
})

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type CreateServiceInput = z.infer<typeof CreateServiceSchema>
export type CreateAppointmentInput = z.infer<typeof CreateAppointmentSchema>
export type LoginInput = z.infer<typeof LoginSchema>
