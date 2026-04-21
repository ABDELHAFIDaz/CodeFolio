import { useEffect, useState } from "react"
import { getSkills } from "../services/FetchingService"

// const skills = ["Html", "Css", "Js", "Php", "Git", "Jira", "Laravel", "React js", "Computer Hardware"]

function AboutUs() {

  const [skills, setSkills] = useState([])

  useEffect(() => {
    getSkills()
      .then(data => setSkills(data))
  }, [])

  return (
    <div className="max-w-2xl mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        My name is ABD ELHAFID AZLIGUE,
        I'm a 21 years old full stack developer, who can build clean and performant web applications.
        I specialize in React and Laravel.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <span key={skill.id} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs