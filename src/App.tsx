import Container from "./components/shared/Container.tsx";
import Header from "./components/Header";
import PaymentSection from "./components/PaymentSection";
import SeparatorWithText from "./components/shared/ui/SeparatorWithText.tsx";

function App() {
  return (
    <div className='w-full h-full'>
      <Container>
        <Header/>
          <PaymentSection/>
          <div className='w-full pt-6'>
              <SeparatorWithText text='or pay with card'/>
          </div>
      </Container>
    </div>
  )
}

export default App
