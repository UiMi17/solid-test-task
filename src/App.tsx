import {useTranslation} from "react-i18next";
import Container from "./components/shared/Container.tsx";
import Header from "./components/Header";
import PaymentSection from "./components/PaymentSection";
import Separator from "./components/shared/ui/Separator.tsx";
import PaymentFormSection from "./components/PaymentFormSection";
import OrderDetailsSection from "./components/OrderDetailsSection";
import Footer from "./components/Footer/Footer.tsx";

function App() {
    const {t} = useTranslation();

  return (
    <div className='flex flex-col items-center w-full h-full'>
        <Header/>
        <Container>
          <PaymentSection/>
          <div className='w-full pt-6'>
              <Separator text={t('pay-with-card')}/>
          </div>
          <PaymentFormSection/>
          <OrderDetailsSection/>
          <Footer/>
      </Container>
    </div>
  )
}

export default App
