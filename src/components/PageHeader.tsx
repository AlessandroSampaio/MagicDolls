import { ReactNode } from 'react';

interface PageHeaderProps {
  children: ReactNode;
}

export function PageHeader({children} : PageHeaderProps ) {
  return (
    <h1 className="text-3xl py-6">{children}</h1>
  );
}
