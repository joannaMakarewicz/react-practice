import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Projects.scss";
import Card from "../Card";

const Projects = () => {
  const api = "https://api.github.com/users/joannaMakarewicz/repos";
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProject = async () => {
      const { data: res } = await axios.get(api);
      setProjects(res);
    };
    getProject();
  }, []);
  return (
    <div >
      <h2 className="projects__heading text-center text-light pt-5 pb-5">
        My Projects
      </h2>
      <div className="projects p-5">
        {projects.map((project, index) => {
          if (project.topics.includes('react'))
          return (
              <Card project={project}/>
          )
        })}
      </div>
    </div>
  )
    }

export default Projects;
