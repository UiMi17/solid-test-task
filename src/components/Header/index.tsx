import BackBtn from "../shared/ui/BackBtn.tsx";
import LanguageSwitcherBtn from "./components/LanguageSwitcherBtn.tsx";

const Header = () => {
    return <header className='flex justify-between items-center w-full'>
        <BackBtn/>
        <h1 className='font-semibold text-lg leading-[calc(32/18)] text-primary'>Checkout</h1>
        <LanguageSwitcherBtn/>
    </header>
}

export default Header;