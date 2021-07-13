// dependencies
import Head from 'next/head';
// layout
import { DefaultLayout } from '../layout';

const Home = ({
  content: {
    pageTitle
  }
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <DefaultLayout>
          <h1>
              NextJS Starting Template
          </h1>
          <p>Hello, is this font fcool </p>

          <img className='logo-placeholder' src="/favicon.svg" alt='site-logo' />
      </DefaultLayout>
    </>
  );
}

/* STATIC CONTENT */
const homeContent = {
  pageTitle: 'pofo',
};

export function getStaticProps() {
  return {
    props: {
      content: homeContent,
    }
  }
}

export default Home;