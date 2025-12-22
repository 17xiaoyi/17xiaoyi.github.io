'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import ContactIcons from '../Contact/ContactIcons';
import PageWrapper from '../../../app/components/PageWrapper';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    // <PageWrapper>
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image
            src="/images/me.jpg"
            alt="Yiqi Huang"
            width={200}
            height={200}
            priority
          />
        </Link>
        <header>
          <h2>Yiqi Huang</h2>
          {/* <p>
            <a href="mailto:michael@mldangelo.com">michael@mldangelo.com</a>
          </p> */}
          <p style={{ textTransform: 'none' }}>
            yiqih777[at]mit[dot]edu<br />
            <a href="https://scholar.google.com/citations?user=pCsTf2cAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          </p>
        </header>
        <p style={{ fontFamily: 'Verdana, Geneva, sans-serif', fontSize: '12px', fontWeight: 'lighter' }}>
          Department of Mathematics<br />
          Massachusetts Institute of Technology<br />
          77 Massachusetts Avenue, Cambridge
        </p>
      </section>

      {/* <section className="blurb"> */}
      {/* <h2>About</h2> */}
      {/* <p style={{ fontFamily: 'Arial, sans-serif' }}>
          Department of Mathematics<br />
          Massachusetts Institute of Technology<br />
          77 Massachusetts Avenue, Cambridge
        </p> */}
      {/* <ul className="actions">
            <li>
              {pathname && !pathname.includes('/resume') ? (
                <Link href="/resume" className="button">
                  Learn More
                </Link>
              ) : (
                <Link href="/about" className="button">
                  About Me
                </Link>
              )}
            </li>
          </ul> */}
      {/* </section> */}

      <section id="footer">
        {/* <ContactIcons /> */}
        <p className="copyright">
          {/* &copy; Michael D&apos;Angelo <a href="https://mldangelo.com/" target="_blank" rel="noopener noreferrer">mldangelo.com</a>. */}
          Source code of this website is available <a href="https://github.com/mldangelo/personal-site" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </section>
    </section>
    // </PageWrapper>
  );
};

export default SideBar;
