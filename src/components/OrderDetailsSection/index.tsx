import { Trans, useTranslation } from 'react-i18next';
import Separator from '../shared/ui/Separator.tsx';

const OrderDetailsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-8 w-full py-3 px-4 bg-tertiary rounded-lg desktop:mt-0 desktop:max-h-[274px] desktop:p-8 desktop:pb-10">
      <p className="font-semibold text-lg leading-[calc(24/18)] text-primary">{t('order-info')}</p>
      <p className="block mt-4 font-medium text-sm leading-[calc(24/14)] text-primary desktop:mt-6">
        {t('description')}
      </p>
      <div className="w-full mt-4">
        <Separator />
      </div>
      <p className="block mt-4 font-medium text-sm leading-[calc(20/14)] text-primary">
        Lamel Professional Smart Skin Compact Powder
      </p>
      <p className="block mt-[2px] text-[12px] leading-[calc(16/12)] text-[#797E8B]">Пудра для лиця</p>
      <div className="w-full mt-4">
        <Separator />
      </div>
      <p className="mt-4 text-right font-semibold text-primary">
        <Trans
          i18nKey="monthly-price"
          components={{
            0: <span className="font-medium" />,
            1: <span className="text-sm leading-[calc(24/14)]" />,
          }}
        />
      </p>
    </section>
  );
};

export default OrderDetailsSection;
