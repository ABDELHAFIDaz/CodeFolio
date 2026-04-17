import { Link, useLocation } from 'react-router-dom'

const links = [
    { to: '/', page: "Home" },
    { to: '/projects', page: "Projects" },
    { to: '/about', page: "AboutUs" },
    { to: '/contact', page: "ContactUs" },
]

function Navbar() {

    const location = useLocation();

    return (
        <nav className="bg-white border-b border-gray-100 px-8 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">Portfoliono</Link>
            <div className="flex gap-8">
                {links.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={location.pathname === link.to ? "text-black border-b-2 border-black" : "text-gray-600 hover:text-black transition" }
                    >
                        {link.page}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar