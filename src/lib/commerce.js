import Commerce from '@chec/commerce.js';

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
export const commercePaypal = new Commerce(process.env.REACT_APP_PAYPAL_PUBLIC_KEY, true);
