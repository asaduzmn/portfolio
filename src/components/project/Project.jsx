import "./project.css"


// eslint-disable-next-line react/prop-types
const Project = ({img, link}) => {
    return (
        <div className="p">
            <div className="p-browswer">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank"> 
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    );
};

export default Project;