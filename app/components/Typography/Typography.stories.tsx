import { Text } from './index';
import { useTokens } from 'utils';
import { TextVariant } from './types';

export default {
  title: 'Typography',
};

export const Display = () => {
  return <Template filter="Display" />;
};

export const Body = () => {
  return <Template filter="Body" />;
};

export const Button = () => {
  return <Template filter="Button" />;
};

export const Link = () => {
  return <Template filter="Link" />;
};

export const Label = () => {
  return <Template filter="Label" />;
};

export const All = () => {
  return <Template filter="" />;
};

const Template = ({
  filter,
  regular = true,
  bold = true,
  text = 'The big brown fox jumps over the lazy dog',
}: {
  filter: string;
  regular?: boolean;
  bold?: boolean;
  text?: string;
}) => {
  const { tokens } = useTokens();

  return (
    <ul style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
      {Object.entries(tokens.mode)
        .filter(([key]) => new RegExp(`Typography${filter}`).test(key))
        .sort(([, a], [, b]) => {
          const numA = parseInt(a.fontSize.base);
          const numB = parseInt(b.fontSize.base);
          return numB - numA;
        })
        .map(([key, value]) => {
          const name = key.split('Typography')[1];
          const variant = `${name.slice(0, 1).toLowerCase()}${name.slice(1)}` as TextVariant;
          const { fontSize, letterSpacing, lineHeight } = value;
          const fluidProps = [
            ['Font size', fontSize],
            ['Letter spacing', letterSpacing],
            ['Line height', lineHeight],
          ];

          return (
            <li key={name} style={{ borderBottom: '1px solid #eee', padding: '2em 0' }}>
              <Text variant="bodySmall" style={{ opacity: 0.75 }} spacing="bottom">
                {name}
              </Text>
              {regular && <Text variant={variant}>{text}</Text>}
              {bold && (
                <Text variant={variant} bold style={{ ...(regular && { marginTop: '0.25em' }) }}>
                  {text}
                </Text>
              )}
              <Text as="div" spacing="top" style={{ display: 'grid', gridTemplateColumns: 'min-content 1fr', gap: '0.25em 1em' }}>
                {fluidProps.map(([propName, range]) => (
                  <>
                    <Text as="span" variant="bodySmall" style={{ whiteSpace: 'nowrap' }}>
                      {propName}:
                    </Text>
                    <Text as="span" variant="bodySmall" style={{ whiteSpace: 'nowrap' }}>
                      {range.min} → {range.base}
                    </Text>
                  </>
                ))}
              </Text>
            </li>
          );
        })}
    </ul>
  );
};
