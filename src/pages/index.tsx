import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Research Software Engineers
        </Heading>
        <p className="hero__subtitle">
          <span>at Berkeley Lab</span>
        </p>
        <div>
          <a
            href={"/docs/About/overview"}
            className={clsx(
              "button button--secondary button--lg",
              styles.heroButton,
            )}
          >
            Learn more
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // Content for <title>...</title> tag
      title={siteConfig.title}
      // Content for <meta name="description" content="..." /> tag
      description={
        "Research Software Engineer group at Lawrence Berkeley National Laboratory"
      }
      // Custom class name we can use to style this component
      wrapperClassName={"index__layout"}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
