import * as yup from 'yup';
import i18n from 'i18next';

const cardPaymentFormSchema = yup.object({
  cardNumber: yup
    .string()
    .required(() => i18n.t('cardNumber-required'))
    .min(16, () => i18n.t('cardNumber-min'))
    .matches(/^\d+$/, () => i18n.t('cardNumber-matches')),

  expiration: yup
    .string()
    .required(() => i18n.t('expiration-required'))
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, () => i18n.t('expiration-matches')),

  cvc: yup
    .string()
    .required(() => i18n.t('cvc-required'))
    .min(3, () => i18n.t('cvc-min'))
    .matches(/^\d+$/, () => i18n.t('cvc-matches')),
});

export default cardPaymentFormSchema;
