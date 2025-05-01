import HangmanFigure from './components/HangmanFigure';
import WordDisplay from './components/WordDisplay';

export default function App() {
  return (
    <div className='flex min-h-screen flex-col items-center gap-8 bg-blue-200 p-8'>
      <h1 className='text-4xl font-bold text-pink'>Hangman</h1>
      <HangmanFigure remainingGuesses={4} />
      <div className='text-center text-gray-100'>
        <p className='mb-2 text-xl sm:text-2xl'>
          Remaining guesses: <span className='font-bold'>6</span>
        </p>
        <p className='text-lg'>Tip: something to say</p>
      </div>
      <WordDisplay word='vercel' guessedLetters={new Set(['v', 'c', 'e'])} />
    </div>
  );
}
