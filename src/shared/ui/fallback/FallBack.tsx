import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const FallBack: FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <div>
      <h2>Oooops! Something went wrong!</h2>
      <button onClick={handleGoHome}>Go Home</button>
    </div>
  );
};
