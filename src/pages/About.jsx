const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-xl mt-2">Discover my journey and skills</p>
      </header>

      <section className="max-w-3xl px-4">
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg shadow-xl p-6">
          <p className="mt-4 text-lg">
            I am a passionate developer specializing in building dynamic web applications using React. 
            My journey began with a curiosity about technology and has evolved into a dedication to creating 
            seamless and engaging user experiences.
          </p>
          <p className="mt-4 text-lg">
            I thrive on solving complex problems and am always eager to learn new skills. 
            When I am not coding, you will find me exploring innovative tech trends and contributing to open-source projects.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
