import { useState } from 'react'

function Login(){

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminData = {email, password};

    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
    }, 2000);

    console.log(adminData);
  };
  
      return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm border border-gray-200 rounded-xl p-8">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Admin Login</h2>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
              className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
              className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              type='submit'
            >
              { !isPending && "Login" }
              { isPending && "Login..." }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login