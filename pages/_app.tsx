import React from 'react';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
// import App from 'next/app';
// import { Layout } from 'antd';
import { appWithTranslation } from '../i18n';

const KeeweApp = ({ Component, pageProps }: AppPropsType) => {
  return (
    // <Layout style={{ height: '100%' }}>
      <Component {...pageProps} />
    // </Layout>
  );
};

// KeeweApp.getInitialProps = async appContext => {
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };

export default appWithTranslation(KeeweApp);