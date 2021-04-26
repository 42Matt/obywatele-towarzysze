import Head from 'next/head';
import PropTypes from 'prop-types';

export const Meta = ({ title, keywords, description }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <title>{title}</title>
  </Head>
);

Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
};

Meta.defaultProps = {
  title: 'Obywatele Obywatelki! - gra PC',
  keywords: 'Next.js, gra rpg, prl, zabawna, absurdy prlu, multiplayer, wieloosobowa',
  description: "Graj wspólnie z znajomymi w grę planszową w klimatach PRL'u",
};
