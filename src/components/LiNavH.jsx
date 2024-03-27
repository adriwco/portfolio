import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LiNavH = ({ children, to }) => {
  return (
    <div>
      <Link
        to={to}
        className="text-lg text-fonte-cor-1 leading-7 px-5 py-2 block bg-fundo-3 dark:bg-fundo-3-d dark:text-fonte-cor-1-d rounded-md shadow-primeira shadow-md transition-all duration-300 hover:text-primeira hover:shadow-lg"
      >
        {children}
      </Link>
    </div>
  );
};

LiNavH.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

export default LiNavH;
