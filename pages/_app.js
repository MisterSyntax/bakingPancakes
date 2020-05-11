import App from 'next/app';
import Link from 'next/link';
import Head from 'next/head';

export default function MyApp({
  Component
}) {
  return (
    <main>
      <Head>
        <title>Baking Some Pancakes</title>
      </Head>
      <Component />
    </main>
  );
}
