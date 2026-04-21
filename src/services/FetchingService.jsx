const baseUrl = 'http://localhost:8001/api';

const authHeader = () => (
    {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
)

export const addProject = (form) => {
    return (
        fetch(`${baseUrl}/addProject`, {
            method: 'POST',
            headers: authHeader(),
            body: JSON.stringify(form),
        })
            .then(res => res.json())
    )
}

export const getProjects = () => {
    return (
        fetch(`${baseUrl}/projects`)
            .then(res => res.json())
    )
}

export const deleteProject = (id) => {
    return (
        fetch(`${baseUrl}/delete`, {
            method: 'POST',
            headers: authHeader(),
            body: JSON.stringify({ id })
        })
            .then(res => res.json())
    )
}

export const loginUser = (form) => {
    return (
        fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        }
        ).then(res => res.json())
    )
}

export const logoutUser = () => {
    return (
        fetch(`${baseUrl}/logout`, {
            method: 'POST',
            headers: authHeader(),
        })
            .then(res => res.json())
    )
}

export const getSkills = () => {
    return (
        fetch(`${baseUrl}/skills`)
            .then(res => res.json())
    )
}