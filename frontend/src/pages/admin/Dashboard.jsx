import { useState, useEffect, useReducer } from 'react'
import { addProject, getProjects, deleteProject, logoutUser } from '../../services/FetchingService'
import { Navigate, useNavigate } from 'react-router-dom'


function Dashboard() {
    const [projects, setProjects] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [msg, setMsg] = useState({ success: '', error: '' })
    const navigate = useNavigate()

    const initialState = {title: '', description: '', stack: ''};

    const Formreducer = (form, action) => {
        switch(action.type){

            case 'title':
                return {...form, title: action.payload};

            case 'description':
                return {...form, description: action.payload};

            case 'stack':
                return {...form, stack: action.payload};

            case 'empty':
                return {...initialState};
            
            default:
                return form;
        }
    }

    const [form, dispatch] = useReducer(Formreducer, initialState);

    useEffect(() => {
        getProjects()
            .then(data => setProjects(data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        addProject(form)
            .then(data => {

                if (data.isAdded) {
                    setShowModal(false);

                    setMsg({ success: data.message, error: '' });

                    setProjects([...projects, data.newProject]);
                }
                else {
                    setMsg({ success: '', error: data.message });
                }

                dispatch({type: 'empty'});
            })
    }

    const handleDelete = (id) => {
        deleteProject(id)
            .then(() => setProjects(projects.filter(project => project.id !== id)));

    }

    const handleLogout = () => {
        logoutUser()
        .then(() => {
            localStorage.removeItem('token');
            navigate('/');
        })
    }

    useEffect(() => {
        if (msg.success || msg.error) {
            const timer = setTimeout(() => {
                setMsg({ success: '', error: '' });
            }, 3000);

            return () => clearTimeout(timer)
        }
    }, [msg.success, msg.error])

    return (
        <>
            <div className="fixed top-20 right-4 z-50">
              <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
              onClick={handleLogout}
              >
                Logout
              </button>
            </div>

            <div className="max-w-4xl mx-auto px-8 py-12 relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
                    {msg.success && <p className="text-green-600 text-sm">{msg.success}</p>}
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                    >
                        + Add Project
                    </button>
                </div>
                {/* Project List */}
                <div className="flex flex-col gap-4">
                    {projects.map(p => (
                        <div key={p.id} className="flex justify-between items-center border border-gray-200 rounded-xl px-6 py-4">
                            <div>
                                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{p.description}</p>
                                <span className="text-xs text-gray-400 mt-2 inline-block">{p.stack}</span>
                            </div>
                            <button
                                onClick={() => handleDelete(p.id)}
                                className="text-sm text-red-500 border border-red-200 bg-red-50 px-3 py-1.5 rounded-lg hover:bg-red-100 transition"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    {projects.length === 0 && (
                        <p className="text-gray-400 text-center py-12">No projects yet.</p>
                    )}
                </div>
                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        {msg.error && <p className="text-red-500 text-sm">{msg.error}</p>}
                        <div className="bg-white rounded-xl border border-gray-200 p-8 w-full max-w-md mx-4">
                            <form onSubmit={handleSubmit}>
                                <h3 className="text-lg font-semibold text-gray-900 mb-6">New Project</h3>
                                <div className="flex flex-col gap-4 mb-6">
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        value={form.title}
                                        onChange={e => dispatch({type: 'title', payload: e.target.value})}
                                        className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                    />
                                    <textarea
                                        placeholder="Description"
                                        rows={3}
                                        value={form.description}
                                        onChange={e => dispatch({type: 'description', payload: e.target.value})}
                                        className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-sm resize-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Stack (e.g. React · Node · MongoDB)"
                                        value={form.stack}
                                        onChange={e => dispatch({type: 'stack', payload: e.target.value})}
                                        className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                    />
                                </div>
                                <div className="flex gap-3 justify-end">
                                    <button
                                        type='button'
                                        onClick={() => setShowModal(false)}
                                        className="text-sm text-gray-500 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type='submit'
                                        className="text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                                    >
                                        Add Project
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Dashboard