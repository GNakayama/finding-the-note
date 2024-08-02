import React from 'react';
import { router } from 'expo-router';

import { View } from 'tamagui';
import { BPM } from './BPM';
import { Controls } from './Controls';
import { GameContext } from './context';
import { GameNote } from './GameNote';

export function GameMain() {
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
