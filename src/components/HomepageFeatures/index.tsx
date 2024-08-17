import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Who we are',
    Svg: require('@site/static/img/undraw_collaborators_re_hont.svg').default,
    description: (
      <>
        We are people who work at Berkeley Lab that are interested in streamlining collaboration between
        software engineers and researchers.
      </>
    ),
  },
  {
    title: 'What we do',
    Svg: require('@site/static/img/undraw_community_re_cyrm.svg').default,
    description: (
      <>
        We meet virtually once per quarter to share our practical experience with one another and support each other's
        professional development.
      </>
    ),
  },
  {
    title: 'How to join',
    Svg: require('@site/static/img/undraw_join_re_w1lh.svg').default,
    description: (
      <>
        You can join us by adding your <samp>lbl.gov</samp> account to both
          our <a
            href={"https://groups.google.com/a/lbl.gov/g/lbl-rse/about"}
            target={"_blank"}
            className={"text--semibold"}>Google Group</a> and
          our <a
            href={"https://lbl-rse.slack.com/"}
            target={"_blank"}
            className={"text--semibold"}>Slack workspace</a>.
          It's a completely self-service process.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
