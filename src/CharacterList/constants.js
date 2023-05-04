import PropTypes from "prop-types";

export const characterPropTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  origin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  image: PropTypes.string.isRequired
};
