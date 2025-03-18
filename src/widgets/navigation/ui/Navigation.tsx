import LinkButton from '@/shared/ui/LinkButton';
import { items } from '../model/model';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.link}>
            <LinkButton to={item.link}>{item.title}</LinkButton>
          </li>
        ))}
      </ul>
    </nav>
  );
};
