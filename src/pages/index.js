import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import SearchBar from "@theme/SearchBar";

import styles from "./index.module.css";
import guideSketch from "@site/static/img/guides-sketch.png";
import referenceSketch from "@site/static/img/reference-sketch.png";
import trainingSketch from "@site/static/img/training-sketch.png";
import gotQuestionsImage from "@site/static/img/got-questions.png";

import contribBlock from "@site/static/img/contrib-block.png";
import contribBlock2x from "@site/static/img/contrib-block@2x.png";
import contribDocs from "@site/static/img/contrib-docs.png";
import contribDocs2x from "@site/static/img/contrib-docs@2x.png";
import contribScaffold from "@site/static/img/contrib-scaffold.png";
import contribScaffold2x from "@site/static/img/contrib-scaffold@2x.png";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
    >
      <main>
        <header className={`${styles.heroBanner} home__heroBanner`}>
          <h1 style={{maxWidth: '30ch', textWrap: 'pretty', marginInline: 'auto'}}>Welcome to the 10up Block Editor Best Practices!</h1>
          <p>Tutorials, resources, references and example code for all things Block Editor.</p>
          <SearchBar className={styles.searchBar} />
        </header>
        <section className={`${styles.grid} content-wrapper`}>
          <article className={`${styles.gridItem} homeGrid__item`}>
            <Link to={"/reference"}>
              <img
                src={referenceSketch}
                alt="Hand drawn papers"
                width={279}
                height={344}
              />
            </Link>
            <h2>Reference</h2>
            <p>
              This is where you will find detailed information about how we
              approach building blocks at 10up. The reference documentation is
              structured into a few different sections.
            </p>
            <Link className={styles.gridLink} to={"/reference"}>
              Quick access
            </Link>
          </article>
          <article className={`${styles.gridItem} homeGrid__item`}>
            <Link to="/training">
              <img
                src={trainingSketch}
                alt="Hand drawn lifting weights"
                width={320}
                height={153}
              />
            </Link>
            <h2>Training</h2>
            <p>
              The purpose of this project is to help you build and customize
              (Gutenberg) blocks. This training applies to all engineering
              disciplines at 10up.
            </p>
            <Link className={styles.gridLink} to="/training">
              I am ready!
            </Link>
          </article>
          <article className={`${styles.gridItem} homeGrid__item`}>
            <Link to="/guides">
              <img
                src={guideSketch}
                alt="Two hand drawn books with light bulb over them"
                width={176}
                height={237}
              />
            </Link>
            <h2>Guides</h2>
            <p>
              This section of the WordPress Block Editor Best Practices is meant as a
              collection of individual deep dive articles. You are also welcome
              to contribute articles to this guide!
            </p>
            <Link className={styles.gridLink} to="/guides">
              Give me the details
            </Link>
          </article>
        </section>

        <hr />

        <section className="gotQuestions">
          <h2>Got a question?</h2>
          <div className="gotQuestions__wrapper">
            <img
              src={gotQuestionsImage}
              alt=""
              className="gotQuestions__image"
              width={663}
              height={250}
            />
          </div>

          <Link className={styles.gridLink} href="https://github.com/10up/gutenberg-best-practices/discussions">
            Head to our Discussions board
          </Link>
        </section>

        <section className="content-wrapper">
          <div className="contributing">
            <header className="contributing__heading">
              <h2>You can help us grow our pool of knowledge</h2>
            </header>
            <div className="contributing__grid">
              <div className="contributing__half">
                <img
                  src={contribBlock}
                  srcSet={contribBlock2x + " 2x"}
                  width={500}
                  height={89}
                  alt="10up block components GitHub Read me introduction"
                />
                <p>
                  Contribute to the{" "}
                  <Link className={styles.gridLink} to="https://github.com/10up/block-components">
                    block components
                  </Link>
                </p>
              </div>
              <div className="contributing__half">
                <img
                  src={contribDocs}
                  srcSet={contribDocs2x + " 2x"}
                  width={500}
                  height={89}
                  alt="Open pull request in the docs project in Github"
                />
                <p>
                  Edit this{" "}
                  <Link className={styles.gridLink} to="https://github.com/10up/gutenberg-best-practices">
                    documentation
                  </Link>
                </p>
              </div>
              <div className="contributing__full">
                <img
                  src={contribScaffold}
                  srcSet={contribScaffold2x + " 2x"}
                  width={1040}
                  height={376}
                  alt="List of open pull requests for WP Scaffold in Github"
                />
                <p>
                  Expand the{" "}
                  <Link className={styles.gridLink} to="https://github.com/10up/wp-scaffold">
                    WP Scaffold theme
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}