import React from 'react';
import PropTypes from 'prop-types';
import Courseshape from './CourseShape';
import CourseListRow from './CourseListRow';
import './CourseShape';

function CourseList({listCourses}) {
    return (
        <>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
              {
                listCourses.length > 0 ? (
                    listCourses.map((course) => {
                        return(
                            <CourseListRow 
                                key={course.id}
                                textFirstCell={course.name}
                                textSecondCell={course.credit}
                            />
                        )
                    })
                ) :
                (
                    <CourseListRow textFirstCell='No course available yet' />
                )
              }  
            </tbody>
        </>
    )
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(Courseshape)
};

CourseList.defaultProps = {
    listCourses: []
};

export default CourseList