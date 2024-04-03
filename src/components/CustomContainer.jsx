import PropTypes from 'prop-types';

const CustomContainer = ({ children }) => {
  return (
    <div className="w-full max-w-[1246px] px-[15px] mx-auto">{children}</div>
  );
};

CustomContainer.propTypes = {
  children: PropTypes.node,
};

export default CustomContainer;
