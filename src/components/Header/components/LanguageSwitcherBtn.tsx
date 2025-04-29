import {useCallback} from "react";
import {useTranslation} from "react-i18next";

const LanguageSwitcherBtn = () => {
    const {t, i18n} = useTranslation();

    const handleLanguageChange = useCallback(() => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('ua');
            localStorage.setItem('language', 'ua');
        } else {
            i18n.changeLanguage('en');
            localStorage.setItem('language', 'en');
        }
    }, [i18n]);

    return <button onClick={handleLanguageChange} className='font-medium text-sm leading-[calc(24/14)] text-primary'>{t('current-language')}</button>
}

export default LanguageSwitcherBtn;