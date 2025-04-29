import {useTranslation} from "react-i18next";

const PaymentFeesBlock = () => {
    const {t} = useTranslation();

    return <div className='flex flex-col items-center'>
        <p className='font-semibold text-2xl leading-[calc(32/24)] text-primary'>{t('free-trial')}</p>
        <p className='font-medium text-sm leading-[calc(20/14)] text-primary'>{t('price')}</p>
    </div>
}

export default PaymentFeesBlock;