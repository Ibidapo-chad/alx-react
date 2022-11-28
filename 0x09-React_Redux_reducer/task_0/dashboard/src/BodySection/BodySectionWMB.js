import React from 'react';
import BodySection from './BodySection';
import './BodySectionWMB.css';
import PropTypes from 'prop-types';

const BodySectionWMB = ({ title, children }) => {
	return (
		<div className='bodySectionWithMargin'>
			<BodySection title={title}>{children}</BodySection>
		</div>
	);
};

BodySectionWMB.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default BodySectionWMB;