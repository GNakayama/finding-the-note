import { View } from 'tamagui'
import { Text } from 'components'

interface BPMProps {
  bpm: number
}

export function BPM(props: BPMProps) {
  return (
    <View
      paddingVertical={25}
    >
      <Text
        fontSize={30}
      >
        {`Speed: ${props.bpm} BPM`}
      </Text>
    </View>
  )
}
