import useIsDesktop from '../../hooks/useIsDesktop.ts';
import BackBtn from '../shared/ui/BackBtn.tsx';
import LanguageSwitcherBtn from './components/LanguageSwitcherBtn.tsx';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const isDesktop = useIsDesktop();

  return (
    <header className="flex justify-between items-center w-full max-w-[420px] px-4 pt-5 desktop:justify-end desktop:pt-4 desktop:px-0 desktop:max-w-[872px]">
      {!isDesktop && (
        <>
          <BackBtn />
          <h1 className="font-semibold text-lg leading-[calc(32/18)] text-primary">{t('checkout')}</h1>
        </>
      )}
      <LanguageSwitcherBtn />
    </header>
  );
};

export default Header;
