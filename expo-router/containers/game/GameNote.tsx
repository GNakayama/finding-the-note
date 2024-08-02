import { XStack } from 'tamagui';
import { Text } from 'components';
import { Accidental, Octave, Pitch } from './types';

interface NoteProps {
  pitch: Pitch;
  accidental: Accidental;
  octave: Octave;
}

export function GameNote(props: NoteProps) {
  const { pitch, accidental, octave } = props;

  return (
    <XStack>
      <Text fontSize={180}>{pitch}</Text>
      <Text fontSize={150}>{accidental}</Text>
      <Text fontSize={180}>{octave}</Text>
    </XStack>
  );
}
