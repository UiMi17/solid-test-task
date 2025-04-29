import {useCallback, useState, useEffect} from "react";
import {useTranslation} from "react-i18next";

const LanguageSwitcherBtn = () => {
    const {i18n} = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState<any>('');

    useEffect(() => {
        switch (i18n.language) {
            case 'en':
                setCurrentLanguage('EN');
                break;
            case 'ua':
                setCurrentLanguage('UA');
                break;
                default:
                    setCurrentLanguage('EN');
        }
    }, [i18n.language])

    const handleLanguageChange = useCallback(() => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('ua');
            setCurrentLanguage('UA');
        } else {
            i18n.changeLanguage('en');
            setCurrentLanguage('EN');
        }
    }, [i18n]);

    return <button onClick={handleLanguageChange} className='font-medium text-sm leading-[calc(24/14)] text-primary'>{currentLanguage}</button>
}

export default LanguageSwitcherBtn;