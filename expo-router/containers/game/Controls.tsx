import { View, XStack } from 'tamagui'
import { Button } from 'components'
import { GameStatus } from './types'

interface ControlProps {
  status: GameStatus,
  onStart: () => void,
  onFinish: () => void,
  onSpeedUp: () => void,
  onSpeedDown: () => void,
}

export function Controls(props: ControlProps) {
  const { status } = props

  return (
    <XStack>
      <View
        paddingHorizontal={5}
      >
        <Button
          onPress={props.onSpeedUp}
          height={60}
        >
          Speed Up
        </Button>
      </View>
      <View
        paddingHorizontal={5}
      >
        <Button
          onPress={status == GameStatus.Playing ? props.onFinish : props.onStart}
          height={60}
        >
          {status == GameStatus.Playing ? "Finish" : "Start"}
        </Button>
      </View>
      <View
        paddingHorizontal={5}
      >
        <Button
          onPress={props.onSpeedDown}
          height={60}
        >
          Speed Down
        </Button>
      </View>
    </XStack>
  );
}

