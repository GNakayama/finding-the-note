import { XStack } from 'tamagui'
import { Button } from 'components'
import { GameStatus } from './types'

interface ControlProps {
  status: GameStatus,
}

export function Controls(props: ControlProps) {
  const { status } = props

  return (
    <XStack width="50px" height="50px" backgroundColor="$background">
      <Button>Speed Up</Button>
      <Button>{status == GameStatus.Playing ? "Finish" : "Start"}</Button>
      <Button>Speed Down</Button>
    </XStack>
  );
}

