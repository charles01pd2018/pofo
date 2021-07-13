// dependencies
import Head from 'next/head';
// layout
import { DefaultLayout } from '../layout';
// components
import { Hero } from '../components';

const Home = ({
  content: {
    pageTitle,
    heroContent,
  }
}) => {


  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <DefaultLayout>
        <Hero id='hero-main' content={heroContent} />
      </DefaultLayout>
    </>
  );
}

/* STATIC CONTENT */
const homeContent = {
  pageTitle: 'pofo',
  heroContent: {
    text: 'crafting the "Just Right" website for you is our specialty'
  }
};

export function getStaticProps() {
  return {
    props: {
      content: homeContent,
    }
  }
}

export default Home;