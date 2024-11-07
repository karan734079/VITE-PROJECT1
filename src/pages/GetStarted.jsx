import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-10 sm:px-8 sm:py-5 overflow-auto">
      {/* Header Section */}
      <div className="text-center mb-6 max-w-4xl cursor-pointer animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-1 tracking-tight transition-all duration-300 hover:text-slate-800">Karan Kumar</h1>
        <p className="text-lg font-semibold mb-2">Frontend Developer | MCA Graduate</p>
        <p className="text-sm opacity-80">+91-7340795241 | Punjab, India</p>
        <p className="text-sm mb-4 opacity-80">
          karanjangral60@gmail.com |{' '}
          <Link to="https://www.linkedin.com/in/karan2001/" className="text-black">
            LinkedIn
          </Link>{' '}
          |{' '}
          <Link to="https://github.com/karan734079" className="text-black">
            GitHub
          </Link>
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/register"
            className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-8 rounded-lg shadow-xl hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-gray-800 text-white py-3 px-8 rounded-lg shadow-xl hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-6xl mb-6 animate-fade-in-up">
        {/* Full-width Objective Card */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl shadow-2xl p-8 col-span-2 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4">Objective</h2>
          <p className="text-sm">
            Recent MCA graduate with proficiency in HTML, CSS, JavaScript, React.js, and Tailwind CSS,
            seeking to start a career as a Frontend Developer to create intuitive web applications and deliver exceptional user experiences.
          </p>
        </div>

        {/* Education Card */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold">Guru Nanak Dev University, Amritsar</h3>
              <p>Master of Computer Applications | CGPA: 8.09 | 2021-2024</p>
            </div>
            <div>
              <h3 className="font-semibold">Baring Union Christian College, Batala</h3>
              <p>BSc. Computer Science | 67% | 2018-2021</p>
            </div>
          </div>
        </div>

        {/* Skills Card */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="space-y-4 text-sm">
            <li><strong>Programming Languages:</strong> JavaScript, C++</li>
            <li><strong>Technologies:</strong> ReactJS, HTML, CSS, TailwindCSS, Redux</li>
            <li><strong>Extra Skills:</strong> Canva</li>
          </ul>
        </div>

        {/* Certifications Card */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <ul className="space-y-4 text-sm">
            <li>Namaste React : ReactJs Intermediate Course</li>
            <li>Google Cloud : Generative AI Fundamentals</li>
            <li>JPMorgan Chase & Co. : Virtual Software Engineering Internship</li>
          </ul>
        </div>

        {/* Achievements Card */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4">Achievements</h2>
          <ul className="space-y-4 text-sm">
            <li>First Place in Net Savvy event</li>
            <li>Active participant in College Chess Club</li>
            <li>Regular volunteer and community service activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
