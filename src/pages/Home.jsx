import { useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';

const Home = () => {
  const { status } = useSelector((state) => state.auth);

  // If the user is not logged in, redirect to "Get Started" page
  if (!status) {
    return <Navigate to="/get-started" />;
  }

  const projects = [
    {
      title: 'TO DO List',
      description: 'Simple and intuitive Todo List app built with React for managing tasks efficiently.',
      path: '/todolist',
    },
    {
      title: 'Calculator',
      description: 'Interactive Calculator built with React for performing basic arithmetic operations seamlessly.',
      path: '/calculator',
    },
    {
      title: 'Counter in Redux',
      description: 'Simple Counter app built with React using Redux for incrementing and decrementing values effortlessly.',
      path: '/counterRedux',
    },
    {
      title: 'Calculator in Redux',
      description: 'Interactive Calculator built with React in Redux for performing basic arithmetic operations seamlessly.',
      path: '/calculatorRedux',
    },
    {
      title: 'TO DO List in Redux',
      description: 'Simple and intuitive To Do List app built with React in Redux for managing tasks efficiently.',
      path: '/todolistRedux',
    },
    {
      title: 'Weather APP in Redux',
      description: 'Simple and intuitive Weather app built with React in Redux for managing tasks efficiently.',
      path: '/weatherApp',
    },
    {
      title: 'Rock Paper Scissors',
      description: 'Simple and intuitive Rock, Paper, Scissors built with React for entertainment.',
      path: '/rps',
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen py-14 justify-center bg-white text-black">
      <header className="mb-8">
        <h1 className="text-5xl font-bold">My Projects</h1>
        <p className="text-lg mt-2">Showcasing my work in React</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-teal-500 to-blue-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
            <p className="mt-2 text-white">{project.description}</p>
            {/* Change this anchor to Link */}
            <Link 
              to={project.path} 
              className="mt-4 inline-block bg-white text-black py-2 px-4 rounded">
              View Project
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
