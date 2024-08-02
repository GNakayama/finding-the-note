export enum Accidental {
  Natural = '',
  Sharp = '#',
  Flat = 'b',
}

export enum Octave {
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
}

export enum Pitch {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
}

export enum GameStatus {
  Loading = 'loading',
  Playing = 'playing',
  Waiting = 'waiting',
}

export interface Note {
  pitch: Pitch;
  accidental: Accidental;
  octave: Octave;
}
