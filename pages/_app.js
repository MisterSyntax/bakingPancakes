import App from 'next/app';
import Link from 'next/link';
import Head from 'next/head';
import './global.css';

export default function MyApp({
  Component
}) {
  return (
    <>
      <Head>
        <title>Baking Some Pancakes</title>
      </Head>
      <main>
        <Component />
      </main>
      <footer>
      Its a foot
      </footer>
    </>
  );
}
