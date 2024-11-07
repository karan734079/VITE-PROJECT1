import { Link } from "react-router-dom"

 
const MyYoutube = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 text-white p-8 pb-20">
      <h1 className="text-4xl font-bold mb-4">My-Youtube</h1>
      <p className="text-lg mb-6 text-justify max-w-2xl">
      Developed a YouTube clone using ReactJS for the front-end, Redux for state management, and TailwindCSS for responsive styling. Integrated YouTube Data API v3 for fetching video details, search results, and thumbnails. Implemented key features like a search bar, live chat, and dynamic video display. Deployed the project on Vercel for easy sharing and access, ensuring a seamless user experience.
      </p>
      <Link 
        to={"https://my-youtube-tan.vercel.app/"}
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-teal-700 to-blue-700 hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Visit My-Youtube App
      </Link>
    </div>
  )
}

export default MyYoutube
