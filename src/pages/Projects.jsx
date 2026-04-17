const projects = [
  { id: 1, title: "Eventify", desc: "An event management web site", tech: "React · Node" },
  { id: 2, title: "WorkSphere", desc: "A Virtual Workspace", tech: "React · Tailwind" },
  { id: 3, title: "CodeFolio", desc: "My portfolio", tech: "Node · MongoDB" },
]

function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
            <span className="text-xs text-gray-400">{p.tech}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects