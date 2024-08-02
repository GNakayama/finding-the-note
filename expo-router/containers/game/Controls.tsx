import { View, XStack } from 'tamagui';
import { Button } from 'components';
import { GameStatus } from './types';

const MAX_BPM = 120;
const MIN_BPM = 20;

interface ControlProps {
  status: GameStatus;
  bpm: number;
  onFinish: () => void;
  onSpeedUp: () => void;
  onSpeedDown: () => void;
}

export function Controls(props: ControlProps) {
  const { bpm } = props;
  return (
    <XStack>
      <View paddingHorizontal={5}>
        <Button
          onPress={props.onSpeedDown}
          height={60}
          disabled={bpm <= MIN_BPM}
        >
          Speed Down
        </Button>
      </View>
      <View paddingHorizontal={5}>
        <Button onPress={props.onFinish} height={60}>
          Finish
        </Button>
      </View>
      <View paddingHorizontal={5}>
        <Button onPress={props.onSpeedUp} height={60} disabled={bpm >= MAX_BPM}>
          Speed Up
        </Button>
      </View>
    </XStack>
  );
}
