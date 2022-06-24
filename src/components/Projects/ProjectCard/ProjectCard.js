import { Link } from "react-router-dom";

import "./ProjectCard.css";

export default function ProjectCard(props) {
    return (
        <div className="project-card">
            <div className="project-card-info">
                <h3 className="project-card-title">EasySpeak{props.title}</h3>
                <p className="project-card-desc">Using Virtual Reality I've created a Serious Game for people with Social Anxiety to train public speaking</p>
                <Link to={"/projects/" + props.link} className="link">
                    See More
                </Link>
            </div>
            <img className="project-card-image" src={"https://i.imgur.com/WfmszC2.jpeg"} alt={props.title} />
        </div>
    )
}

/*
<div className="project-card" style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,.4), rgba(0,0,0,1)), 
                    url(https://i.imgur.com/WfmszC2.jpeg),`
                }}>
                <h3 className="project-card-title">EasySpeak{props.title}</h3>
                <p className="project-card-desc">Using Virtual Reality I've created a Serious Game for people with Social Anxiety to train public speaking</p>
                <Link to={"/projects/" + props.link} className="link">
                    See More
                </Link>
        </div>
*/