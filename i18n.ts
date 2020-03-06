import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
  shallowRender: true,
  defaultLanguage: 'fr',
  otherLanguages: ['en'],
});

export default NextI18NextInstance
 
/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
  initPromise,
} = NextI18NextInstance;