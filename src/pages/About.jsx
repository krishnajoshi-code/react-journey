function About() {
  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About React Mart</h2>
      <div className="bg-white rounded-xl p-6 shadow-md">
        <p className="text-gray-600 leading-relaxed mb-4">
          React Mart is a learning project built by Krishna Joshi while learning React.js from scratch.
          This project covers JSX, Components, Props, useState, useEffect, React Router, and more!
        </p>
        <h3 className="text-lg font-bold mb-2">Technologies Used:</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">React.js</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Vite</span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">React Router</span>
          <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Context API</span>
          <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Fake Store API</span>
        </div>
      </div>
    </div>
  );
}

export default About;
