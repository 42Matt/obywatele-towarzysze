import PropTypes from 'prop-types';

const SvgProvider = ({ file, elementId, width, height }) => (
  <svg
    width={`${width}px`}
    height={`${height}px`}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use href={`${file.toString()}.svg#${elementId.toString()}`}> </use>
  </svg>
);

SvgProvider.propTypes = {
  file: PropTypes.string.isRequired,
  elementId: PropTypes.number.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

SvgProvider.defaultProps = {
  width: 100,
  height: 100,
};

export default SvgProvider;
