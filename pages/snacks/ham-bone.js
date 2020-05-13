import React from 'react';

import Link from 'next/link';
import Head from 'next/head';
import Blinker from 'components/Blinker/Blinker';
import Marquee from 'components/Marquee/Marquee'
import Spinning from 'components/Spinning/Spinning';

export default function FirstPost() {
  const [score, setScore] = React.useState(0);

  const scoreUp = () => setScore(score + 1);

  return (
    <>
      <h1>Score: {score}</h1>
      <Link href="/"><a>Home</a></Link>
      <div>
        <Blinker>
          <button onClick={() => setScore(score + 1)}>1</button>
        </Blinker>

        <Marquee>
        <button onClick={() => setScore(score + 10)}>10</button>
        </Marquee>
        <Spinning>
          <Marquee>
            <Blinker>
              <button onClick={() => setScore(score + 10)}>10</button>
            </Blinker>
          </Marquee>
        </Spinning>
      </div>
    </>
  );
}
