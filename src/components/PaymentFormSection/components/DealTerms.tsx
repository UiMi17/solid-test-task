import {Trans} from "react-i18next";

const DealTerms = () => {
    return <div className='mt-2 py-3 px-4 border border-border-primary rounded-lg'>
        <p className='text-[12px] leading-[calc(16/12) text-secondary'><Trans
            i18nKey="plan-pro"
            components={{
                span: <span className='font-semibold text-[12px] leading-[calc(16/12)]' />
            }}
        /></p>
    </div>
}

export default DealTerms;