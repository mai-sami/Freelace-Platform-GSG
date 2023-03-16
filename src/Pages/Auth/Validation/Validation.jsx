import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter a valid email"),
});

export const PasswordSchema = yup.object({
  password: yup.string().required("Please enter your password").min(5),
});
export const registerSchema = yup.object({
  first_name: yup.string().required("Please enter a first_name").min(3),
  last_name: yup.string().required("Please enter a last_name").min(3),
  email: yup.string().required("Please enter a email").email(),
  password: yup.string().required("Please enter a password").min(6),
 });
