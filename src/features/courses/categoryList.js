import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    courseAsync, selectCourses, selectStatus,
} from './courseSlice';

import { Category } from './category';
import { Loader } from "../../components/loader";

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

        content = Object.keys(groupedCourses).map((category, index) => (
            <Category key={index} category={category} courses={groupedCourses[category]} />
        ));
    } else {
        content = <Loader />;
    }

    return (
        <div>{content}</div>
    )
}
