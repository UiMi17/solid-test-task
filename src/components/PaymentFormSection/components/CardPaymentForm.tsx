import {useForm} from "react-hook-form";
import SubtractIcon from "../../icons/SubtractIcon.tsx";
import {yupResolver} from "@hookform/resolvers/yup";
import cardPaymentFormSchema from "../CardPaymentFormSchema.ts";

const CardPaymentForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(cardPaymentFormSchema)
    });

    const onSubmit = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
            <label className="block mb-0">
                <span className="font-medium text-[12px] leading-[calc(16/12)] text-secondary">Card Number</span>
                <input
                    type="text"
                    {...register("cardNumber")}
                    placeholder="1234 1234 1234 1234"
                    maxLength={16}
                    className="block mt-[3px] w-full rounded-md border border-border-secondary shadow-sm py-[10px] px-3 text-base"
                />
                {errors.cardNumber &&
                    <p className="block pt-1 text-[12px] leading-[calc(16/12)] text-error">{errors.cardNumber.message}</p>}
            </label>

            <div className="flex gap-4 m-0 mt-3">
                <label className="flex flex-col">
                    <span
                        className="font-medium text-[12px] leading-[calc(16/12)] text-secondary">Expiration Date</span>
                    <input
                        type="text"
                        {...register("expiration")}
                        placeholder="MM/YY"
                        className="block mt-[3px] w-full rounded-md border border-border-secondary shadow-sm py-[10px] px-3 text-base"
                    />
                    {errors.expiration &&
                        <p className="block pt-1 text-[12px] leading-[calc(16/12)] text-error">{errors.expiration.message}</p>}
                </label>

                <label className="flex flex-col relative">
                    <span className="font-medium text-[12px] leading-[calc(16/12)] text-secondary">CVC</span>
                    <input
                        type="password"
                        {...register("cvc")}
                        placeholder="•••"
                        maxLength={3}
                        className="block mt-[3px] w-full pr-9 rounded-md border border-border-secondary shadow-sm py-[10px] px-3 text-base"
                    />
                    <button className="absolute flex justify-center items-center w-[44px] h-[44px] right-0 top-5">
                        <SubtractIcon/>
                    </button>
                    {errors.cvc &&
                        <p className="block pt-1 text-[12px] leading-[calc(16/12)] text-error">{errors.cvc.message}</p>}
                </label>
            </div>

            <button
                type="submit"
                className="flex justify-center items-center w-full h-12 mt-4 bg-focus-primary font-semibold text-white rounded-md"
            >
                Start Trial
            </button>
        </form>
    )
}

export default CardPaymentForm;