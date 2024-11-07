
const ShimmerLoader = () => {
    return (
        <>
            <div className="flex flex-col items-center min-h-screen py-14 justify-center bg-white text-black">
                <header className="mb-8">
                    <h1 className="text-5xl font-bold">My Projects</h1>
                    <p className="text-lg mt-2">Showcasing my work in React</p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 w-full">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-gray-200 to-gray-300 p-6 rounded-lg shadow-lg animate-pulse w-full max-w-7xl mx-auto"
                        >
                            {/* Title Shimmer */}
                            <div className="h-6 w-2/3 bg-gray-400 rounded mb-4"></div>

                            {/* Description Shimmer */}
                            <div className="space-y-2">
                                <div className="h-4 w-full bg-gray-400 rounded"></div>
                                <div className="h-4 w-11/12 bg-gray-400 rounded"></div>
                            </div>

                            {/* Button Shimmer */}
                            <div className="h-10 w-32 bg-gray-400 rounded mt-6"></div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
};

export default ShimmerLoader;