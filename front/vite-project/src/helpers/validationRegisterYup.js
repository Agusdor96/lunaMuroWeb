// import * as Yup from 'yup';

// export const validationSchema = Yup.object().shape({
//     name: Yup.string()
//     .matches(/^[A-Za-z\s]+$/, "Must be letters")
//     .min(2, 'Too Short!')
//     .max(40, 'Too Long!')
//     .required("Name is required"),

//     email:Yup.string()
//     .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)
//     .email("Must be a valid email")
//     .required("Email is required"),

//     birthdate: Yup.string()
//     .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, "Must be a valid date in format DD/MM/YYYY")
//     .required("Birthdate is required"),

//   nDni: Yup.number()
//     .typeError("Must be a number")
//     .integer("Must be an integer")
//     .min(10000000, "Must be at least 8 digits")
//     .required("nDNI is required"),

//   username: Yup.string()
//     .matches(/^[a-zA-Z0-9]{6,20}$/, "Username must have between 6-20 characters and only accept letters & numbers")
//     .required("Username is required"),

//   password: Yup.string()
//     .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password must have at least 8 characters, one number & one uppercase letter")
//     .required("Password is required"),

//   confirmPassword: Yup.string().oneOf([Yup.ref("password"), null])
// })