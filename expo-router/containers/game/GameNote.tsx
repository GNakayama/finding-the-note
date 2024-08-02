import { XStack } from 'tamagui'
import { Text } from 'components'
import { Accidental, Octave, Pitch } from './types';

interface NoteProps {
  pitch: Pitch,
  accidental: Accidental,
  octave: Octave
}

export function GameNote(props: NoteProps) {
  const { pitch, accidental, octave } = props

  return (
    <XStack width="50px" height="50px" backgroundColor="$background">
      <Text>{pitch}</Text>
      <Text>{accidental}</Text>
      <Text>{octave}</Text>
    </XStack>
  );
}
