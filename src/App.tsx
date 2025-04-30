import {useTranslation} from "react-i18next";
import useIsDesktop from "./hooks/useIsDesktop.ts";
import Container from "./components/shared/Container.tsx";
import Header from "./components/Header";
import PaymentSection from "./components/PaymentSection";
import Separator from "./components/shared/ui/Separator.tsx";
import PaymentFormSection from "./components/PaymentFormSection";
import OrderDetailsSection from "./components/OrderDetailsSection";
import Footer from "./components/Footer/Footer.tsx";

function App() {
    const {t} = useTranslation();
    const isDesktop = useIsDesktop();

    return (
        <div className='flex flex-col items-center w-full h-full'>
            <Header/>
            <Container>
                {!isDesktop ? <>
                    <div className='max-w-[420px]'>
                        <PaymentSection/>
                        <div className='w-full pt-6'>
                            <Separator text={t('pay-with-card')}/>
                        </div>
                        <PaymentFormSection/>
                        <OrderDetailsSection/>
                    </div>
                </> : <div className='flex gap-8 w-full max-w-[872px]'>
                    <div className='flex flex-col w-full'>
                        <PaymentSection/>
                        <div className='w-full pt-6'>
                            <Separator text={t('pay-with-card')}/>
                        </div>
                        <PaymentFormSection/>
                    </div>
                    <OrderDetailsSection/>
                </div>}
                <Footer/>
            </Container>
        </div>
    )
}

export default App
