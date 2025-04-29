import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {yupResolver} from "@hookform/resolvers/yup";
import i18n from "i18next";
import LoaderIcon from "../../icons/LoaderIcon.tsx";
import SubtractIcon from "../../icons/SubtractIcon.tsx";
import cardPaymentFormSchema from "../CardPaymentFormSchema.ts";

const CardPaymentForm = () => {
    const {t} = useTranslation();
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(cardPaymentFormSchema)
    });

    useEffect(() => {
        i18n.on('languageChanged', () => {
            reset({}, { keepValues: false });
        });
    }, [reset]);

    const mockPayment = (data: any): Promise<void> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //TODO: Testing CardPaymentForm server error response
                if (data.cardNumber === "4000000000000002") {
                    reject(new Error("Card declined by mock server"));
                } else {
                    resolve();
                }
            }, 1000);
        });
    };

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            await mockPayment(data);

            // throw new Error("Test server error");

            toast.success(t('payment-success'));
            console.log("CardPaymentForm Data:", data);
        } catch (error: any) {
            const message = error?.message || t('payment-error');
            toast.error(message);
            console.error("CardPaymentForm error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
            <label className="block mb-0">
                <span className="font-medium text-[12px] leading-[calc(16/12)] text-secondary">{t('card-number')}</span>
                <input
                    type="text"
                    {...register("cardNumber")}
                    placeholder="1234 1234 1234 1234"
                    maxLength={16}
                    className="block mt-[3px] w-full rounded-md border border-border-secondary shadow-sm py-[10px] px-3 text-base"
                />
                {errors.cardNumber && (
                    <p className="block pt-1 text-[12px] leading-[calc(16/12)] text-error">
                        {errors.cardNumber.message}
                    </p>
                )}
            </label>

            <div className="flex gap-4 m-0 mt-3">
                <label className="flex flex-col">
                    <span
                        className="font-medium text-[12px] leading-[calc(16/12)] text-secondary">{t('expiration-date')}</span>
                    <input
                        type="text"
                        {...register("expiration")}
                        placeholder="MM/YY"
                        className="block mt-[3px] w-full rounded-md border border-border-secondary shadow-sm py-[10px] px-3 text-base"
                    />
                    {errors.expiration && (
                        <p className="block pt-1 text-[12px] leading-[calc(16/12)] text-error">
                            {errors.expiration.message}
                        </p>
                    )}
                </label>

                <label className="flex flex-col relative">
                    <span className="font-medium text-[12px] leading-[calc(16/12)] text-secondary">{t('cvc')}</span>
                    <input
                        type="password"
                        {...register("cvc")}
                        placeholder="•••"
                        maxLength={3}
                        className="block mt-[3px] w-full pr-9 rounded-md border border-border-secondary shadow-sm py-[10px] px-3 text-base"
                    />
                    <div className="absolute flex justify-center items-center w-[44px] h-[44px] right-0 top-5">
                        <SubtractIcon/>
                    </div>
                    {errors.cvc && (
                        <p className="block pt-1 text-[12px] leading-[calc(16/12)] text-error">
                            {errors.cvc.message}
                        </p>
                    )}
                </label>
            </div>

            <button
                type="submit"
                disabled={loading}
                className={`flex justify-center items-center w-full h-12 mt-4 rounded-md font-semibold text-white 
                ${loading ? "cursor-not-allowed bg-focus-fade" : "bg-focus-primary hover:bg-focus-fade active:bg-focus-secondary active:translate-y-[6px]"} 
                transition-all duration-200`}
            >
                {loading ? (
                    <>
                        <LoaderIcon className='animate-spin mr-3'/>
                        {t('payment-processing')}
                    </>
                ) : (
                    t('start-trial')
                )}
            </button>
        </form>
    );
};

export default CardPaymentForm;
