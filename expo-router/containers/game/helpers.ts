import { Accidental, Note, Octave, Pitch } from './types';

export function getRandomNote(): Note {
  const pitches = Object.values(Pitch);
  const accidentals = Object.values(Accidental);
  const octaves = Object.values(Octave);

  const pitch = pitches[Math.floor(Math.random() * pitches.length)];
  const accidental =
    accidentals[Math.floor(Math.random() * accidentals.length)];
  const octave = octaves[Math.floor(Math.random() * octaves.length)];

  if (octave === Octave.Two && [Pitch.C, Pitch.D].includes(pitch)) {
    return getRandomNote();
  }

  return { pitch, accidental, octave };
}
