import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Boiled Pumpkins
        </h1>
        Go get  <Link href="/snacks/ham-bone"><a>smoked ham bone</a></Link>
      </main>
    </div>
  )
}
