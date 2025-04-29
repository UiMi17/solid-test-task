import Container from "./components/shared/Container.tsx";
import Header from "./components/Header";
import PaymentSection from "./components/PaymentSection";
import Separator from "./components/shared/ui/Separator.tsx";
import PaymentFormSection from "./components/PaymentFormSection";
import OrderDetailsSection from "./components/OrderDetailsSection";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <div className='w-full h-full'>
      <Container>
        <Header/>
          <PaymentSection/>
          <div className='w-full pt-6'>
              <Separator text='or pay with card'/>
          </div>
          <PaymentFormSection/>
          <OrderDetailsSection/>
          <Footer/>
      </Container>
    </div>
  )
}

export default App
