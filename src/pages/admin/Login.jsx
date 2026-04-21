import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/FetchingService';


function Login() {

  let [form, setForm] = useState({ email: '', password: '' })
  let [isPending, setIsPending] = useState(false);
  let [isAdmin, setIsAdmin] = useState(false);
  let [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    loginUser(form)
      .then(data => {

        if (data.isFound) {

          setIsAdmin(true)
          localStorage.setItem('token', data.token);
          navigate('/dashboard')

        }
        else
          setError(data.message)

        setIsPending(false); // this just for the login button
      })

  };

  // if (isAdmin) {
  //   return (
  //     <h1 className='min-h-screen flex items-center justify-center'>Hello Cdm, Welecome Back</h1>
  //   )
  // }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm border border-gray-200 rounded-xl p-8">
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Admin Login</h2>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              required
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              required
              onChange={e => setForm({ ...form, password: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              type='submit'
            >
              {!isPending && "Login"}
              {isPending && "Login..."}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login