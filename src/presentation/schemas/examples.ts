import { z } from "zod";

/**
 * Schema de ejemplo: Login
 */
export const loginSchema = z.object({
  email: z.string().min(1, "Email es requerido").email("Email inválido"),
  password: z.string().min(8, "La contraseña debe tener mínimo 8 caracteres").min(1, "Password es requerido"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

/**
 * Schema de ejemplo: Registro
 */
export const registerSchema = z
  .object({
    name: z.string().min(2, "El nombre debe tener mínimo 2 caracteres").max(50, "El nombre debe tener máximo 50 caracteres"),
    email: z.string().min(1, "Email es requerido").email("Email inválido"),
    password: z.string().min(8, "La contraseña debe tener mínimo 8 caracteres"),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;

/**
 * Schema de ejemplo: Perfil de usuario
 */
export const userProfileSchema = z.object({
  firstName: z.string().min(2, "Mínimo 2 caracteres").max(30, "Máximo 30 caracteres"),
  lastName: z.string().min(2, "Mínimo 2 caracteres").max(30, "Máximo 30 caracteres"),
  age: z.number().int("Debe ser un número entero").min(18, "Debes ser mayor de 18 años").max(120, "Edad inválida").optional(),
  bio: z.string().max(500, "La biografía no puede exceder 500 caracteres").optional(),
  website: z.string().url("URL inválida").optional().or(z.literal("")),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "Debes aceptar los términos y condiciones",
  }),
});

export type UserProfileFormValues = z.infer<typeof userProfileSchema>;

/**
 * Schema de ejemplo: Contacto
 */
export const contactSchema = z.object({
  name: z.string().min(2, "Nombre muy corto").max(100, "Nombre muy largo"),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .regex(/^[+]?[\d\s-()]+$/, "Número de teléfono inválido")
    .optional()
    .or(z.literal("")),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres").max(200, "El asunto es muy largo"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(2000, "El mensaje no puede exceder 2000 caracteres"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
