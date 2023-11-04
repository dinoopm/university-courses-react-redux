
export const Progress = ({ progress }) => {
    const progressClass = `course-progress level-${progress}`;

    return (
        <div className={progressClass}>
            <div className="level"></div>
            <div className="level"></div>
            <div className="level"></div>
            <div className="level"></div>
            <div className="level"></div>
        </div>
    )
}
