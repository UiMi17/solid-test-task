import BackBtn from "../shared/ui/BackBtn.tsx";
import LanguageSwitcherBtn from "./components/LanguageSwitcherBtn.tsx";
import {useTranslation} from "react-i18next";

const Header = () => {
    const {t} = useTranslation();
    return <header className='flex justify-between items-center w-full px-4 pt-5'>
        <BackBtn/>
        <h1 className='font-semibold text-lg leading-[calc(32/18)] text-primary'>{t('checkout')}</h1>
        <LanguageSwitcherBtn/>
    </header>
}

export default Header;