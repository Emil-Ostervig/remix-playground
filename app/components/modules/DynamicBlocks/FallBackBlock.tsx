import { Modules } from "~/api/types";
import { Headline } from "~/components/Typography";
import { Container } from "../Container/Container";
import styles from "./DynamicBlocks.module.css";
export const FallbackBlock = (props: Modules) => {
  const { type, ...rest } = props;

  return (
    <Container gutter>
      <div className={styles.fallbackBlock}>
        <Headline variant="display4" className={styles.fallbackBlockText}>Missing implementation for {type}</Headline>
        <pre className={styles.fallbackBlockCode}>
          <code>{JSON.stringify(rest, null, 2)}</code>
        </pre>
      </div>
    </Container>
  );
};