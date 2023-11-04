import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    courseAsync, selectCourses, selectStatus,
} from './courseSlice';

import { Category } from './category';

export const CategoryList = () => {
    const courses = useSelector(selectCourses);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(courseAsync())
        }
    }, [dispatch]);

    let content;

    if (status === 'fulfilled') {
        const groupedCourses = {};
        courses.forEach((course) => {
            const category = course.category;
            if (!groupedCourses[category]) {
                groupedCourses[category] = [];
            }
            groupedCourses[category].push(course);
        });

        content = Object.keys(groupedCourses).map((category) => (
            <Category key={category} category={category} courses={groupedCourses[category]} />
        ));
    }

    return (
        <div>{content}</div>
    )
}
