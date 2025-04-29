import * as yup from 'yup';

const cardPaymentFormSchema = yup.object({
    cardNumber: yup.string().required("This field is required").min(16, "This field must contain not less than 16 numbers").matches(/^\d+$/, "This field can only contain numbers"),
    expiration: yup
        .string()
        .required("This field is required")
        .matches(
            /^(0[1-9]|1[0-2])\/\d{2}$/,
            "Wrong date format"
        ),
    cvc: yup.string().required("This field is required").min(3, "This field must contain not less than 3 numbers").matches(/^\d+$/, "This field can only contain numbers"),
})

export default cardPaymentFormSchema;