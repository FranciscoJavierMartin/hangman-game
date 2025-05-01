import { GAME_STATUS, GUESSES, WORDS } from '@/constants';
import { GameStatus } from '@/types';
import { useState } from 'react';

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);

  return {
    word: WORDS[randomIndex].word.toLowerCase(),
    tip: WORDS[randomIndex].tip,
  };
}

export default function useHangman() {
  const [currentWord, setCurrentWord] = useState(getRandomWord);
  const [remainingGuesses, setRemainingGuesses] = useState(GUESSES);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const isWinner: boolean = currentWord.word
    .split('')
    .every((letter) => guessedLetters.has(letter));

  function onGuessLetter(letter: string) {
    if (
      getGameStatus() === GAME_STATUS.PLAYING &&
      !guessedLetters.has(letter)
    ) {
      setGuessedLetters((prev) => new Set([...prev, letter]));

      if (!currentWord.word.includes(letter)) {
        setRemainingGuesses((prev) => prev - 1);
      }
    }
  }

  function getGameStatus(): GameStatus {
    let gameStatus: GameStatus;

    if (isWinner) {
      gameStatus = GAME_STATUS.WON;
    } else if (remainingGuesses === 0) {
      gameStatus = GAME_STATUS.LOST;
    } else {
      gameStatus = GAME_STATUS.PLAYING;
    }

    return gameStatus;
  }

  function selectWord() {
    setCurrentWord(getRandomWord);
    setGuessedLetters(new Set());
    setRemainingGuesses(GUESSES);
  }

  return {
    word: currentWord.word,
    tip: currentWord.tip,
    remainingGuesses,
    guessedLetters,
    onGuessLetter,
    gameStatus: getGameStatus(),
    selectWord,
  };
}
