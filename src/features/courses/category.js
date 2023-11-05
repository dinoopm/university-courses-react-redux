
import { Course } from "./course";
export const Category = ({ category, courses }) => {
    const imageUrl = `images/${category}.png`;
    const content = courses.map((course, index) => (<Course key={index} course={course} />))

    return (
        <div className="row course p-0">
            <div className="column col-1 p-0 text-center">
                <img width="32" height="32" src={imageUrl} alt={category} />
            </div>
            <div className="column col-11 p-0">
                {content}
            </div>
        </div>
    )
}
