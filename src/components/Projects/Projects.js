import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Projects.scss";

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
    <div className="projects">
      <h2 className="projects__heading text-center text-light mt-5">
        My Projects
      </h2>
      {projects.map((project, index) => {
        return (
          <div className="container">
            <div className="row">
              <div className="col">
                <p>{project.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
