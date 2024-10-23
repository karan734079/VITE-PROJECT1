
const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pb-40 justify-center bg-white text-black">
      <header className="mb-8">
        <h1 className="text-5xl font-bold">My Projects</h1>
        <p className="text-lg mt-2 flex items-center justify-center">Showcasing my work in React</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gradient-to-r from-teal-500 to-blue-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
            <p className="mt-2 text-white">{project.description}</p>
            <a href={project.path} className="mt-4 inline-block bg-white text-black py-2 px-4 rounded">
              View Project
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

const projects = [
  {
    title: 'TO DO List',
    description: 'Simple and intuitive Todo List app built with React for managing tasks efficiently.',
    path : '/todolist'
  },
  {
    title: 'Calculator',
    description: 'Interactive Calculator built with React for performing basic arithmetic operations seamlessly.',
    path : '/calculator'
  },
  {
    title: 'Counter in Redux',
    description: 'Simple Counter app built with React using Redux for incrementing and decrementing values effortlessly.',
    path : '/counterRedux'
  },
  {
    title: 'Calculator in Redux',
    description: 'Interactive Calculator built with React in Redux for performing basic arithmetic operations seamlessly.',
    path : '/calculatorRedux'
  },
];

export default Home;
