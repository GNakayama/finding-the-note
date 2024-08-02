import { Button, Text, View, YStack } from 'tamagui'
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View flex={1} alignItems="center" justifyContent="center" backgroundColor="$background">
      <YStack gap="$2">
        <Text>Find The Note</Text>
        <Link href="/game" asChild>
          <Button width="100%">
            <Text>Start</Text>
          </Button>
        </Link>
      </YStack>
    </View>
  )
}

