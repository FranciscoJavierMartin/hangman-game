import HangmanFigure from './components/HangmanFigure';

export default function App() {
  return (
    <div className='flex min-h-screen flex-col items-center bg-blue-200 gap-8 p-8'>
      <h1 className='text-4xl font-bold text-pink'>Hangman</h1>
      <HangmanFigure remainingGuesses={4}/>
    </div>
  );
}
