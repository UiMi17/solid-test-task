import {useTranslation} from "react-i18next";
import useIsDesktop from "../../hooks/useIsDesktop.ts";
import PaymentFeesBlock from "./components/PaymentFeesBlock.tsx";
import ApplePayBtn from "./components/ApplePayBtn.tsx";
import BackBtn from "../shared/ui/BackBtn.tsx";

const PaymentSection = () => {
    const {t} = useTranslation();
    const isDesktop = useIsDesktop();

    return <section className='w-full pt-6 desktop:pt-0 desktop:flex desktop:flex-col desktop:gap-4'>
        {!isDesktop ? null : <div className='relative -left-6'><BackBtn text={t('checkout')}/></div>}
        <div className='flex flex-col gap-6'>
            <PaymentFeesBlock/>
            <ApplePayBtn/>
        </div>
    </section>
}

export default PaymentSection;