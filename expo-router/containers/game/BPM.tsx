import { View } from 'tamagui'
import { Text } from 'components'

interface BPMProps {
  bpm: number
}

export function BPM(props: BPMProps) {
  return (
    <View height="50px" backgroundColor="$background" justifyContent="center">
      <Text>{`Speed: ${props.bpm} BPM`}</Text>
    </View>
  )
}
