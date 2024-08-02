import { router } from 'expo-router';
import { View, YStack } from 'tamagui';
import { Header } from 'components/Header';

import { Controls } from './Controls';
import { GameNote } from './GameNote';
import { BPM } from './BPM';
import { Accidental, GameStatus, Octave, Pitch } from './types';

function Countdow() {
  return <View width="50px" height="50px" backgroundColor="$background" />;
}

function GameMain({ status }: { status: GameStatus }) {
  const bpm = 80;
  const note = {
    pitch: Pitch.A,
    accidental: Accidental.Sharp,
    octave: Octave.Five,
  };

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
      <Controls
        status={status}
        onStart={() => {}}
        onFinish={() => {
          router.replace('/score');
        }}
        onSpeedUp={() => {}}
        onSpeedDown={() => {}}
      />
    </View>
  );
}

function renderGame(status: GameStatus) {
  if (status == GameStatus.Loading) {
    return <Countdow />;
  }

  return <GameMain status={status} />;
}

export default function Game() {
  const status = GameStatus.Waiting;

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
        {renderGame(status)}
      </YStack>
    </View>
  );
}
