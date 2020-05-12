import Link from 'next/link';
import Head from 'next/head';
import Blinker from 'components/Blinker/Blinker';
import Marquee from 'components/Marquee/Marquee'
import Spinning from 'components/Spinning/Spinning';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Link href="/"><a>Home</a></Link>
      <Marquee>
      <Spinning>
        <Blinker>
          <span>Test</span>
        </Blinker>
      </Spinning>
      </Marquee>

    </>
  );
}
