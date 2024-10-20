import { HTMLAttributes } from 'react';

type BoxProps = HTMLAttributes<HTMLDivElement>;

export function Box(props: BoxProps) {
  return <div {...props} />;
}
