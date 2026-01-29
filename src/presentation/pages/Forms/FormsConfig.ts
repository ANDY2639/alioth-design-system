import { z } from "zod";

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
  postId: number;
};

export type FormsProps = {
  initialValues: FormValues;
  submittedData: FormValues | null;
  submitError: string | null;
  validationSchema: z.ZodType<FormValues>;
  onSubmit: (values: FormValues) => void;
};

export const demoFormSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  bio: z.string().max(500, "Bio cannot exceed 500 characters").optional(),
  otp: z.string().length(6, "OTP must be exactly 6 digits"),
  acceptTerms: z.boolean().refine(val => val === true, "You must accept the terms"),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
  gender: z.string().min(1, "Please select a gender"),
  country: z.string().min(1, "Please select a country"),
  city: z.string().min(1, "Please select a city"),
  notifications: z.boolean(),
  volume: z.number().min(0).max(100),
});

export type FormValues = z.infer<typeof demoFormSchema>;

export const initialValues: FormValues = {
  email: "",
  password: "",
  bio: "",
  otp: "",
  acceptTerms: false,
  interests: [],
  gender: "",
  country: "",
  city: "",
  notifications: false,
  volume: 50,
};

export const countries = [
  { key: "us", label: "United States" },
  { key: "mx", label: "Mexico" },
  { key: "ca", label: "Canada" },
  { key: "uk", label: "United Kingdom" },
  { key: "de", label: "Germany" },
  { key: "fr", label: "France" },
  { key: "es", label: "Spain" },
  { key: "it", label: "Italy" },
];

export const cities = [
  { key: "nyc", label: "New York" },
  { key: "la", label: "Los Angeles" },
  { key: "chi", label: "Chicago" },
  { key: "hou", label: "Houston" },
  { key: "phx", label: "Phoenix" },
  { key: "phi", label: "Philadelphia" },
  { key: "san", label: "San Antonio" },
  { key: "sd", label: "San Diego" },
];
