import PaymentFeesBlock from "./components/PaymentFeesBlock.tsx";
import ApplePayBtn from "./components/ApplePayBtn.tsx";

const PaymentSection = () => {
    return <section className='w-full pt-6'>
        <div className='flex flex-col gap-6'>
            <PaymentFeesBlock/>
            <ApplePayBtn/>
        </div>
    </section>
}

export default PaymentSection;