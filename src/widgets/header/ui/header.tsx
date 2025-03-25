import { Navigation } from '@/widgets/navigation/ui/Navigation';
import LinkButton from '@/shared/ui/linkbutton';

export const Header = () => {
  return (
    <>
      <header className="header">
        <>
          <div>
            <LinkButton to="/">
              <h2 className="header__title">Potteroloves</h2>
            </LinkButton>
          </div>
        </>
        <Navigation />
      </header>
    </>
  );
};
