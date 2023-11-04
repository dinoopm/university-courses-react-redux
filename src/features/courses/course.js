import { Progress } from "./progress";

export const Course = ({ course }) => {
    const { title, duration, doneby, progress } = course;
    return (
        <div className="row course-item">
            <div className="column col-8 p-0">
                <p><a href="#">{title}</a></p>
            </div>
            <div className="column col-4 p-0">
                <div className="row">
                    <div className="column col-6 p-0 pb-5px">{duration}</div>
                    <div className="column col-6 p-0 pb-5px">
                        <Progress progress={progress} />
                    </div>
                </div>
                <div className="row">
                    <div className="column col-6 p-0 pb-5px">To be done by:</div>
                    <div className="column col-6 p-0 pb-5px">{doneby}</div>
                </div>
            </div>
        </div>
    )
}
