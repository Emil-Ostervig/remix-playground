import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import style from './NavigationIndicator.module.css';
import { useNavigation } from '@remix-run/react';

type Props = {
  label?: string;
  initialState?: boolean;
};

export const NavigationIndicator = ({ label, initialState = false }: Props) => {
  const { state } = useNavigation();


  const [active, setActive] = useState(initialState);

  const onRouteChangeStart = useCallback(() => setActive(true), []);
  const onRouteChangeDone = useCallback(() => setActive(false), []);

  const properties = {
    ...(label && {
      'aria-label': label,
      'role': 'progressbar',
    }),
  };

  useEffect(() => {
    if (state === 'loading') {
      onRouteChangeStart();
    }
    if (state === 'idle') {
      onRouteChangeDone();
    }
    return () => {
      onRouteChangeDone();
    };
  }, [state]);

  return (
    <div className={clsx(style.container, { [style.visible]: active })} {...properties}>
      <span className={style.progressbarOne} />
      <span className={style.progressbarTwo} />
    </div>
  );
};
