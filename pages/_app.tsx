import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Callout, Heading, SideNav, TableOfContents, TopNav } from '../components';

import 'prismjs';
// Import other Prism themes here
import 'prismjs/components/prism-bash.min';
import 'prismjs/themes/prism.css';

import '../public/globals.css'

import type { AppProps } from 'next/app'
import type { MarkdocNextJsPageProps } from '@markdoc/next.js'
import Page from './right_page';
import RightPage from './right_page';
import "../styles/global.css";

const TITLE = 'Markdoc';
const DESCRIPTION = 'A powerful, flexible, Markdown-based authoring framework';

function collectHeadings(node, sections = []) {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0];
      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title
        });
      }
    }
    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

export type MyAppProps = MarkdocNextJsPageProps

export default function MyApp({ Component, pageProps }: AppProps<MyAppProps>) {


  let title = TITLE;
  let description = DESCRIPTION;


  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];





  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        {/* <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <TopNav>
        <Link href="/docs">Docs</Link>
      </TopNav>
      <div className="page">
        <SideNav />
        <main className="flex column">
          <div className="float-container">


            <div className="float-child">
              <Link href="#markdoc">What is MarkDoc?</Link><br></br>
              <div id="swagger"></div>
              <div className="green"><Component {...pageProps} /></div>
              <div id="markdoc"></div>
              <Link href="#swagger">What is Swagger?</Link>

           
            </div>

            <div className="float-child">
              <div className="blue"><Page isResponse={false}></Page></div>
            </div>
            <div className="float-child">
              <div className="blue"><Page isResponse={true}></Page></div>
            </div>


          </div>
        </main>

      </div>
      <style jsx>
        {`
          .page {
            position: fixed; 
            top: var(--top-nav-height);
            display: flex;
            width: 100vw;
            flex-grow: 1;
          }
          main {
            overflow: auto;
            height: calc(100vh - var(--top-nav-height));
            flex-grow: 1;
            font-size: 16px;
            padding: 0 2rem 2rem;
          }
          .float-container {
            border: 3px solid #fff;
            padding: 20px;
        }
        
        .float-child {
            width: 50%;
            float: left;
            padding: 10px 40px 10px 40px;
            border: 0px solid red;
        }
        `}
      </style>
    </>
  );
}
