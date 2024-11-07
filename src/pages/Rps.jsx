import { useState } from "react"

const Rps = () => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [result, setResult] = useState("");

    const choices = ['Rock', 'Paper', 'Scissor'];

    const handlePlayerChoice = (choice) => {
        setPlayerChoice(choice);
        const randomIndex = Math.floor(Math.random() * choices.length);
        const randomChoice = choices[randomIndex];

        setComputerChoice(randomChoice);
        determineWinner(choice, randomChoice);
    }

    const determineWinner = (user, computer) => {
        if (user === computer) {
            setResult("It's a tie!");
        } else if (
            (user === "Rock" && computer === "Scissor") ||
            (user === "Paper" && computer === "Rock") ||
            (user === "Scissor" && computer === "Paper")
        ) {
            setPlayerScore(playerScore + 1);
            if (playerScore === 5) {
                setResult("player winner")
                setPlayerChoice(null);
                setComputerChoice(null);
                setPlayerScore(0)
                setComputerScore(0);
            }
        } else {
            setComputerScore(computerScore + 1);
            if (computerScore === 5) {
                setResult("computer winner")
                setPlayerChoice(null);
                setComputerChoice(null);
                setComputerScore(0);
                setPlayerScore(0);
            }
        }
    };



    const resetGame = () => {
        setPlayerChoice(null);
        setComputerChoice(null);
        setPlayerScore(0);
        setComputerScore(0);
        setResult("");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-blue-500">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg w-96">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Rock Paper Scissor</h1>

                <div className="mb-4">
                    <p className="text-xl text-gray-700">Your Score: {playerScore}</p>
                    <p className="text-xl text-gray-700">Computer&apos;s Score: {computerScore}</p>
                </div>

                <div className="mb-4">
                    <p className="text-xl text-gray-700">Your choice:{playerChoice ? playerChoice : " None"} </p>
                    <p className="text-xl text-gray-700">Computer&apos;s choice: {computerChoice ? computerChoice : " None"}</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Result : {result ? result : "None"}</h2>
                </div>

                <div className="flex justify-center space-x-4">
                    {choices.map((choice) => (
                        <button
                            key={choice}
                            onClick={() => handlePlayerChoice(choice)}
                            className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-semibold hover:bg-blue-600 transition"
                        >
                            {choice.charAt(0).toUpperCase() + choice.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="mt-6">
                    <button
                        onClick={resetGame}
                        className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                        Reset Game
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rps
