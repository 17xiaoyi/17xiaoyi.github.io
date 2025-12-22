import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import PageWrapper from './components/PageWrapper';
import Markdown from 'markdown-to-jsx';
import { aboutMarkdown } from '@/data/about';
import { introMarkdown } from '@/data/intro';

export const metadata: Metadata = {
  description:
    'Co-founder & CTO building LLM security tools. Previously VP Engineering, YC alum, Stanford ICME.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            {/* <h2> */}
            {/* <Link href="/about">About this site</Link> */}
            {/* About me */}
            {/* </h2> */}
            <p style={{ textTransform: 'none', fontWeight: 'bold' }}>
              Hi! I am a fourth-year Ph.D. student in Mathematics at MIT, advised by Professor <a href="https://math.mit.edu/directory/profile.html?pid=50" target="_blank" rel="noopener noreferrer">Tobias Holck Colding</a>. My research interests broadly lie in Differential Geometry and Geometric Analysis. I also work closely with Professor <a href="https://person.zju.edu.cn/wsjiang" target="_blank" rel="noopener noreferrer">Wenshuai Jiang</a> and Professor <a href="https://tristanozuch.github.io/" target="_blank" rel="noopener noreferrer">Tristan Ozuch</a>. 
            </p>
            {/* <Markdown>{introMarkdown}</Markdown> */}
          </div>
        </header>
        {/* <p>
          {' '}
          Please feel free to read more{' '}
          <Link href="/about">about me</Link>, or you can check out my{' '}
          <Link href="/resume">resume</Link>,{' '}
          <Link href="/projects">projects</Link>, view{' '}
          <Link href="/stats">site statistics</Link>, or{' '}
          <Link href="/contact">contact</Link> me.
        </p>
        <p>
          {' '}
          Source available{' '}
          <a href="https://github.com/mldangelo/personal-site">here</a>.
        </p> */}
        <Markdown options={{
          overrides: {
            a: {
              component: 'a',
              props: {
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }
          }
        }}>{aboutMarkdown}</Markdown>
      </article>
    </PageWrapper >
  );
}
