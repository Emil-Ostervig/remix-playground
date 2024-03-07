import styles from './M10Hero.module.css';
import { M010HeroModule } from '~/api/types';
import { Container } from '../Container/Container';
import clsx from 'clsx';
import { Headline, Text } from '~/components/Typography';
import { CallToAction } from '~/components/CallToAction/CallToAction';

export type M10HeroProps = M010HeroModule;
export const M10Hero = ({ image, video, headline, subHeadline, callToAction }: M10HeroProps) => {
  const hasMedia = !!(image || video);

  return (
    <Container className={clsx(styles.container, {
      [styles.lightText]: hasMedia,
    })} gutter={false} spacing={false} fullWidth>
      <div className={styles.m10}>
        <Container gutter className={styles.m10Container}>
          <div className={styles.content}>
            {headline ? <Headline as="h1" variant='display2' bold>{headline}</Headline> : null}
            {subHeadline ? <Text>{subHeadline}</Text> : null}
            {callToAction?.url && <CallToAction href={callToAction.url} children={callToAction.title} target={callToAction.target}  />}
          </div>
        </Container>
        {hasMedia && (
          <div className={styles.mediaWrapper}>
            {image && <img src={image.src} alt={image.alt ?? ''} style={{ objectFit: 'cover' }} loading="lazy" />}
          </div>
        )}
      </div>
    </Container>
  );
};
