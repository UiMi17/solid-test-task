import {useTranslation} from "react-i18next";

const PaymentFeesBlock = () => {
    const {t} = useTranslation();

    return <div className='flex flex-col items-center desktop:items-start'>
        <p className='font-semibold text-2xl leading-[calc(32/24)] text-primary desktop:text-[32px] desktop:leading-[calc(40/32)]'>{t('free-trial')}</p>
        <p className='font-medium text-sm leading-[calc(20/14)] text-primary desktop:text-base desktop:leading-[calc(24/16)]'>{t('price')}</p>
    </div>
}

export default PaymentFeesBlock;