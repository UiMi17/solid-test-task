import {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import useIsDesktop from '../../../hooks/useIsDesktop.ts';
import getCurrentLanguage from '../../../utils/getCurrentLanguage.ts';
import {UserLanguage} from "../../../constants";

const LanguageSwitcherBtn = () => {
  const { t, i18n } = useTranslation();
  const isDesktop = useIsDesktop();
  const currentLanguage = getCurrentLanguage();

  const handleLanguageChange = useCallback(
    (language?: UserLanguage) => {
      if (language) {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
      } else {
        if (i18n.language === 'en') {
          i18n.changeLanguage('ua');
          localStorage.setItem('language', 'ua');
        } else {
          i18n.changeLanguage('en');
          localStorage.setItem('language', 'en');
        }
      }
    },
    [i18n]
  );

  return !isDesktop ? (
    <button onClick={() => handleLanguageChange()} className="font-medium text-sm leading-[calc(24/14)] text-primary">
      {t('current-language')}
    </button>
  ) : (
    <div className="flex gap-4 pr-2 font-medium text-sm leading-[calc(24/14)] text-primary">
      <button
        onClick={() => handleLanguageChange(UserLanguage.EN)}
        className={`w-6 h-6 ${currentLanguage === 'en' ? 'text-[#B0B4BE]' : ''}`}
      >
        Eng
      </button>
      <button
        onClick={() => handleLanguageChange(UserLanguage.UA)}
        className={`w-6 h-6 ${currentLanguage === 'ua' ? 'text-[#B0B4BE]' : ''}`}
      >
        Укр
      </button>
    </div>
  );
};

export default LanguageSwitcherBtn;
