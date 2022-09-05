import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textSecondCell, textFirstCell }) {
    return (
        <tr>
            { (() => {
                        if (isHeader) {
                            if (textSecondCell===null)
                                return (<th colSpan="2">{textFirstCell}</th>)
                            if (textSecondCell !== null) {
                                return (
                                    <>
                                        <th> {textFirstCell} </th>
                                        <th> {textSecondCell} </th>
                                    </>
                                )
                            }
                        } else {
                            return (
                                <>
                                    <td> {textFirstCell} </td>
                                    <td> {textSecondCell} </td> 
                                </>
                            )
                        }
            })()
            }
        </tr>
    )
};

CourseListRow.propTypes = {
    isHeader : PropTypes.bool,
    textFirstCell : PropTypes.string.isRequired,
    textSecondCell: PropTypes.string
};

CourseListRow.defaultProps = {
    isHeader : false,
    textSecondCell : null
};

export default CourseListRow

//Alternative code
/**function CourseListRow({ isHeader, textSecondCell, textFirstCell }) {
    return (
        <tr>
            {isHeader} ? 
                ({textSecondCell === null} ? 
                    <th colSpan={2}>{textFirstCell}</th>
                {textSecondCell !== null} ? 
                    <th> {textFirstCell} </th>
                    <th> {textSecondCell} </th>)
                :
               ( <>
                    <td> {textFirstCell} </td>
                    <td> {textSecondCell} </td> 
                </> )
        </tr>
    )
}*/