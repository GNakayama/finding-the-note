import React from 'react';
import { Accidental, GameStatus, Octave, Pitch } from './types';

export const GameContext = React.createContext({
  status: GameStatus.Loading,
  count: 3,
  bpm: 30,
  note: {
    pitch: Pitch.A,
    accidental: Accidental.Sharp,
    octave: Octave.Five,
  },
  setBpm: (bpm: number) => {},
});
