import { useEffect } from 'react';

const KEY_ROWS = [
  'qwertyuiop'.split(''),
  'asdfghjkl'.split(''),
  'zxcvbnm'.split(''),
];

const KEY_CLASSES = {
  guessed: 'bg-gray-100 text-gray-200 cursor-not-allowed',
  unguessed: 'bg-blue-100 text-white hover:bg-pink/80',
};

interface KeyboardProps {
  guessedLetters: Set<string>;
}

export default function Keyboard({ guessedLetters }: KeyboardProps) {
  function handleKeyDown(event: KeyboardEvent) {
    const letter = event.key.toLowerCase();
    if (KEY_ROWS.flat().includes(letter)) {
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='flex flex-col items-center gap-2'>
      {KEY_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} role='row' className='flex gap-1'>
          {row.map((letter) => {
            const isGuessed = guessedLetters.has(letter);

            return (
              <button
                disabled={isGuessed}
                key={letter}
                className={`size-8 rounded bg-blue-100 uppercase text-white transition-colors hover:bg-pink focus:outline-none focus:ring-2 focus:ring-pink disabled:hover:bg-gray-100 sm:size-10 ${isGuessed ? KEY_CLASSES.guessed : KEY_CLASSES.unguessed}`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
