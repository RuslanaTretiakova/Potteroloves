import { Link } from 'react-router-dom';
import { FC } from 'react';

interface ILinkButton {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const LinkButton: FC<ILinkButton> = ({ to, children, className }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
