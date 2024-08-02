import React from 'react';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, YStack } from 'tamagui';
import { Header, Text } from 'components';

import { Controls } from './Controls';
import { GameNote } from './GameNote';
import { BPM } from './BPM';
import { Accidental, GameStatus, Note, Octave, Pitch } from './types';

const GameContext = React.createContext({
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

interface CountdowProps {
  count: number;
}

function Countdow(props: CountdowProps) {
  return (
    <View width="100%" flexGrow={1}>
      <View flexGrow={1} flex={1}>
        <View flexGrow={1} flex={1} alignItems="center" justifyContent="center">
          <Text fontSize={180}>{props.count}</Text>
        </View>
      </View>
    </View>
  );
}

function GameMain() {
  const gameContext = React.useContext(GameContext);
  const { bpm, note, status, setBpm } = gameContext;

  return (
    <View width="100%" flexGrow={1}>
      <View flexGrow={1} flex={1}>
        <View flexGrow={1} flex={1} alignItems="center" justifyContent="center">
          <GameNote
            pitch={note.pitch}
            accidental={note.accidental}
            octave={note.octave}
          />
        </View>
        <View alignItems="center">
          <BPM bpm={bpm} />
        </View>
      </View>
      <View alignItems="center">
        <Controls
          bpm={bpm}
          status={status}
          onFinish={() => {
            router.replace('/score');
          }}
          onSpeedUp={() => {
            setBpm(bpm + 5);
          }}
          onSpeedDown={() => {
            setBpm(bpm - 5);
          }}
        />
      </View>
    </View>
  );
}

function RenderGame(props: { status: GameStatus; count: number }) {
  if (props.status == GameStatus.Loading) {
    return <Countdow count={props.count} />;
  }

  return <GameMain />;
}

function getRandomNote(): Note {
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

export default function Game() {
  const [status, setStatus] = useState(GameStatus.Loading);
  const [count, setCount] = useState(3);
  const [bpm, setBpm] = useState(30);
  const [note, setNote] = useState(getRandomNote());
  const frequency = (60 / bpm) * 1000;

  useEffect(() => {
    if (count === 0) {
      if (status === GameStatus.Loading) {
        setStatus(GameStatus.Playing);
      }

      const timeoutId = setTimeout(() => {
        const note = getRandomNote();
        setNote(note);
      }, frequency);

      return () => {
        clearTimeout(timeoutId);
      };
    }

    const timeoutId = setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count, frequency, status, note]);

  return (
    <View
      backgroundColor="$background"
      flex={1}
      paddingHorizontal={20}
      paddingVertical={40}
      alignItems="center"
      width="100%"
    >
      <YStack flexGrow={1} width="100%">
        <Header />
        <GameContext.Provider value={{ status, count, bpm, note, setBpm }}>
          <RenderGame status={status} count={count} />
        </GameContext.Provider>
      </YStack>
    </View>
  );
}
