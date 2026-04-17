function ContactUs() {
  return (
    <div className="max-w-lg mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your name"
          className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="email"
          placeholder="Your email"
          className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          rows={5}
          placeholder="Your message"
          className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
        />
        <button className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Send Message
        </button>
      </div>
    </div>
  )
}

export default ContactUs