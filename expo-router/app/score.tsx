import { Text, View, YStack } from 'tamagui'

export default function Score() {
  return (
    <View flex={1} alignItems="center" justifyContent="center" backgroundColor="$background">
      <YStack gap="$2">
        <Text>Score</Text>
      </YStack>
    </View>
  )
}


