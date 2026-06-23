export interface Service {
  id: string
  name: string
  description?: string
  price: number
  duration: number
  category: 'masculino' | 'feminino'
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Appointment {
  id: string
  clientName: string
  clientPhone: string
  clientEmail?: string
  serviceId: string
  appointmentDate: Date
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  paymentMethod: 'pix' | 'cash'
  totalPrice: number
  notes?: string
  whatsappSent: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Admin {
  id: string
  email: string
  name: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface JWTPayload {
  id: string
  email: string
  iat: number
  exp: number
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  timestamp: string
}
