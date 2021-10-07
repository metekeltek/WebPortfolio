import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Datenschutz'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Mete Keltek'} />
      </Helmet>
      <p>Data Privacy Statement</p>
      <p>My Services/Apps don't use or collect personal data. Insofar as personal data (e.g. name, address or email address) is collected on our website, this is always done on a voluntary basis as far as possible. These data will not be passed on to third parties without your express consent. We would like to point out that data transmission over the Internet (e.g. when communicating by e-mail) can have security gaps. A complete protection of the data against access by third parties is not possible. We hereby expressly object to the use of the contact data published in the context of the imprint obligation by third parties to send advertising and information materials that have not been expressly requested. The operators of the pages expressly reserve the right to take legal action in the event of unsolicited sending of advertising information, such as spam emails.</p>
    </>
  );
};
