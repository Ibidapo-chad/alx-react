import PropTypes from 'prop-types';

const Courseshape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired
});

export default Courseshape