import Link from 'next/link';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Link href="/"><a>Home</a></Link>
    </>
  );
}
