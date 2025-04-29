import Separator from "../shared/ui/Separator.tsx";

const OrderDetailsSection = () => {
    return <section className='mt-8 w-full py-3 px-4 bg-tertiary rounded-lg'>
        <p className='font-semibold text-lg leading-[calc(24/18)] text-primary'>Order info &lt;&#61; 100 char.</p>
        <p className='block mt-4 font-medium text-sm leading-[calc(24/14)] text-primary'>Description &lt;&#61; 400
            char.</p>
        <div className='w-full mt-4'>
            <Separator/>
        </div>
        <p className='block mt-4 font-medium text-sm leading-[calc(20/14)] text-primary'>Lamel Professional Smart Skin
            Compact Powder</p>
        <p className='block mt-[2px] text-[12px] leading-[calc(16/12)] text-[#797E8B]'>Пудра для лиця</p>
        <div className='w-full mt-4'>
            <Separator/>
        </div>
        <p className='mt-4 text-right font-semibold text-primary'>299.99 UAH <span className='font-medium'>/</span> <span className='text-sm leading-[calc(24/14)]'>month</span></p>
    </section>
}

export default OrderDetailsSection;