import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader = false, textSecondCell = null, textFirstCell }) {
    return (
        <tr>
            {if (isHeader) {
                if (textSecondCell=null) {
                    return <th colSpan="2">props.textFirstCell</th>
                }
            }}
        </tr>

        CourseListRow.PropTypes = {
            isHeader : PropTypes.bool,
            textFirstCell : PropTypes.string.isRequired,
            textSecondCell: PropTypes.string
        }
    )
}