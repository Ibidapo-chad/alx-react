import React from 'react';
import CourseListRow from './CourseListRow';

function CourseList(props) {
    return (
        <>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false}/>
                <CourseListRow textFirstCell="webpack" textSecondCell="20" isHeader={false}/>
                <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false}/>
            </tbody>
        </>
    )
};

export default CourseList