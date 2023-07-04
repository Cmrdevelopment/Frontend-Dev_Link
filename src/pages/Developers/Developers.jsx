import DevelopersList from '../../components/DevelopersList/DevelopersList';
import { useMediaQuery } from 'react-responsive';

const Developers = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 880 });

  return (
    <div className="outletContainer">
      {isLargeScreen ? (
        <h1>
          {/* ¡Echa un vistazo a nuestros <u>desarrolladores</u> freelance! */}
          Conozca a nuestros <u>desarrolladores</u> freelance.
        </h1>
      ) : (

        <h1>
          Sigue a nuestros <u>Developers</u>!
        </h1>
      )}

      <div className="spinner"></div>
      <DevelopersList itemsPerPage={10} />
    </div>
  );
};

export default Developers;
