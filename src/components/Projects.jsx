import React from 'react';
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font p-8">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-green-400" />
          <h2 className="text-2xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h2>
        </div>
        <div className="flex flex-wrap ">
          {projects.map((project) => (
            <a
              href={project.link}
              target='_blank'
              key={project.image}
              className="sm:w-1/2 w-full p-4 ">
              <div className="relative">
                <img
                  alt="gallery"
                  className="object-center h-[300px] w-[300px] m-auto"
                  src={project.image}
                />
                <div className="absolute inset-0 px-8 py-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed">Technologies: {project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
