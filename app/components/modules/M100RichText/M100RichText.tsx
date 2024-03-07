import clsx from 'clsx';

import styles from './M100RichText.module.css';
import { M100RichTextModule } from '~/api/types';
import { Headline } from '~/components/Typography/Headline/Headline';
import { Text } from '~/components/Typography/Text/Text';
import { Container } from '../Container/Container';
import { CallToAction } from '~/components/CallToAction/CallToAction';

export type M100RichTextProps = M100RichTextModule;

export const M100RichText = ({ headline, displayType, richText, secondaryColumn, callToAction }: M100RichTextProps) => {
  const multiCol = Boolean(richText?.length && secondaryColumn?.length);

  return (
    <Container gutter spacing>
      <div className={clsx(styles.m100, multiCol ? styles.m100MultiCol : styles.m100SingleCol)}>
        {headline && (
          <Headline variant={displayType} bold as="h1">
            {headline}
          </Headline>
        )}
        {(richText || secondaryColumn) && (
          <div className={styles.content}>
            <div className={clsx(styles.columns, styles.richTextOverride)}>
              {richText && <Text variant="bodyLarge" dangerouslySetInnerHTML={{ __html: richText }} />}
              {secondaryColumn && <Text variant="bodyLarge" dangerouslySetInnerHTML={{ __html: secondaryColumn }} />}
            </div>
            {callToAction?.url && (
              <CallToAction className={styles.cta} {...callToAction} href={callToAction.url}>
                {callToAction.title}
              </CallToAction>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};
