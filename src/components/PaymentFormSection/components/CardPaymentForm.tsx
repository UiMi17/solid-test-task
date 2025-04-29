import {useForm} from "react-hook-form";
import SubtractIcon from "../../icons/SubtractIcon.tsx";

const CardPaymentForm = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto">
            <label className="block mb-0">
                <span className="font-medium text-[12px] leading-[calc(16/12)] text-secondary">Card Number</span>
                <input
                    type="text"
                    {...register("cardNumber")}
                    placeholder="1234 1234 1234 1234"
                    className="block mt-[3px] w-full rounded-md border border-border-secondary shadow-sm py-[10px] px-3 text-base"
                />
            </label>

            <div className="flex gap-4 m-0 mt-3">
                <label className="flex flex-col">
                    <span className="font-medium text-[12px] leading-[calc(16/12)] text-secondary">Expiration Date</span>
                    <input
                        type="text"
                        {...register("expiration")}
                        placeholder="MM/YY"
                        className="block mt-[3px] w-full rounded-md border border-border-secondary shadow-sm py-[10px] px-3 text-base"
                    />
                </label>

                <label className="flex flex-col relative">
                    <span className="font-medium text-[12px] leading-[calc(16/12)] text-secondary">CVC</span>
                    <input
                        type="password"
                        {...register("cvc")}
                        placeholder="•••"
                        className="block mt-[3px] w-full pr-9 rounded-md border border-border-secondary shadow-sm py-[10px] px-3 text-base"
                    />
                    <button className="absolute flex justify-center items-center w-[44px] h-[44px] right-0 top-5">
                        <SubtractIcon />
                    </button>
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