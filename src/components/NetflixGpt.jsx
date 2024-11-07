import { Link } from "react-router-dom";

const NetflixGpt = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 text-white p-8 pb-20">
      <h1 className="text-4xl font-bold mb-4">NetflixGpt</h1>
      <p className="text-lg mb-6 text-justify max-w-2xl">
        Developed a Netflix-style application using ReactJS for dynamic UI and Firebase for secure user authentication.
        Utilized Redux Toolkit for efficient state management and improved application performance. Integrated the Gemini API to deliver personalized movie recommendations and enhance user engagement. Designed a responsive and interactive user experience with modern web technologies.
      </p>
      <Link 
        to={"https://netflix-gpt-psi-blue.vercel.app/"}
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-teal-700 to-blue-700 hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Visit NetflixGpt App
      </Link>
    </div>
  );
}

export default NetflixGpt;

