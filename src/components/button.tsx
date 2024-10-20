'use client';

import { ButtonHTMLAttributes, useState } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  const [someState, setSomeState] = useState(false);

  return <button {...props} />;
}
