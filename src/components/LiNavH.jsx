import { Link } from 'react-router-dom';

const LiNavH = ({ children, to }) => {
  const isExternalLink = to.startsWith('https://');

  return (
    <div>
      <Link
        to={to}
        target={isExternalLink ? '_blank' : undefined}
        rel={isExternalLink ? 'noopener noreferrer' : undefined}
        className="text-lg text-fonte-cor-1 leading-7 px-5 py-2 block bg-fundo-3 dark:bg-fundo-3-d dark:text-fonte-cor-1-d rounded-md shadow-primeira shadow-md transition-all duration-300 hover:text-primeira hover:shadow-lg"
      >
        {children}
      </Link>
    </div>
  );
};

export default LiNavH;
