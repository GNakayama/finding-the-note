import { View, YStack } from 'tamagui'
import { Header } from 'components/Header'

import { Controls } from './Controls'
import { GameNote } from './GameNote'
import { BPM } from './BPM'
import { Accidental, GameStatus, Octave, Pitch, TimerUnit } from './types';

function Countdow() {
  return <View width="50px" height="50px" backgroundColor="$background" />
}

function Feedback() {
  return (
    <View height="50px" backgroundColor="$background" justifyContent="center">
      <YStack gap="$2">
        <View width="50px" height="50px" backgroundColor="$background" />
        <View width="50px" height="50px" backgroundColor="$background" />
      </YStack>
    </View>
  )
}

function GameMain({ status }: { status: GameStatus }) {
  const bpm = 80
  const note = {
    pitch: Pitch.A,
    accidental: Accidental.Natural,
    octave: Octave.Five
  }

  return <View height="200px" width="200px" backgroundColor="$background">
    <GameNote
      pitch={note.pitch}
      accidental={Accidental.Natural}
      octave={Octave.Five}
    />
    <BPM bpm={bpm} />
    <Controls status={status} />
  </View>
}

function renderGame(status: GameStatus) {
  if (status == GameStatus.Loading) {
    return (
      <Countdow />
    )
  }

  if (status == GameStatus.Finished) {
    return (
      <Feedback />
    )
  }

  return (<GameMain status={status} />)
}

export default function Game() {
  const status = GameStatus.Playing

  return (
    <View flex={1} alignItems="center" justifyContent="center" backgroundColor="$background">
      <YStack gap="$2">
        <Header />
        {renderGame(status)}
      </YStack>
    </View>
  )
}
