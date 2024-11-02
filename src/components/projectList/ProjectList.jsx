import Project from "../project/Project";
import {projects}  from "../../data";
import "./projectList.css"

const ProjectList = () => {
    return (
        // pl for project lists
        <div className="pl"> 
            <div className="pl-texts">
                <h1 className="pl-title">Create and Inspire</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dolorum minus debitis beatae quia. Vel fugiat itaque recusandae cupiditate cum quod voluptatem dolorum eligendi, id sed cumque mollitia iusto. Optio.
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item)=>(
                    <Project key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
