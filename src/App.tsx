import GameModal from './components/GameModal';
import HangmanFigure from './components/HangmanFigure';
import Keyboard from './components/Keyboard';
import WordDisplay from './components/WordDisplay';
import useHangman from './hooks/use-hangman';

export default function App() {
  const {
    word,
    tip,
    remainingGuesses,
    guessedLetters,
    onGuessLetter,
    gameStatus,
    selectWord,
  } = useHangman();

  return (
    <div className='flex min-h-screen flex-col items-center gap-8 bg-blue-200 p-8'>
      <h1 className='text-4xl font-bold text-pink'>Hangman</h1>
      <HangmanFigure remainingGuesses={remainingGuesses} />
      <div className='text-center text-gray-100'>
        <p className='mb-2 text-xl sm:text-2xl'>
          Remaining guesses:&nbsp;
          <span className='font-bold'>{remainingGuesses}</span>
        </p>
        <p className='text-lg'>Tip: {tip}</p>
      </div>
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Keyboard guessedLetters={guessedLetters} onGuessLetter={onGuessLetter} />
      <GameModal gameStatus={gameStatus} word={word} onNewWord={selectWord} />
    </div>
  );
}
