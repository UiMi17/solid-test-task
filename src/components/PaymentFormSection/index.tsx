import CardPaymentForm from "./components/CardPaymentForm.tsx";
import DealTerms from "./components/DealTerms.tsx";

const PaymentFormSection = () => {
    return <section className='pt-4'>
        <CardPaymentForm/>
        <DealTerms/>
    </section>
}

export default PaymentFormSection;