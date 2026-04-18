import { useState, useEffect } from "react"

const projects = [
  { id: 1, title: "Eventify", desc: "An event management web site", tech: "React · Node" },
  { id: 2, title: "WorkSphere", desc: "A Virtual Workspace", tech: "React · Tailwind" },
  { id: 3, title: "CodeFolio", desc: "My portfolio", tech: "Node · MongoDB" },
]

function Projects() {

  let [projects, setProjects] = useState([])

  useEffect(() => {

    fetch('http://localhost:8001/api/projects') 
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        console.log(data);
      })
  
  }, [])
1
  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{project.desciption}</p>
            <span className="text-xs text-gray-400">{project.stack}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects