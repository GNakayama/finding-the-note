import { View, YStack } from 'tamagui';
import { Link } from 'expo-router';
import { Button, Header, Text } from 'components';

export default function Index() {
  return (
    <View
      backgroundColor="$background"
      flex={1}
      paddingHorizontal={20}
      paddingVertical={40}
      alignItems="center"
      width="100%"
    >
      <YStack flexGrow={1} width="100%">
        <Header />
        <View flex={1} />
        <View height={60}>
          <Link href="/" asChild>
            <Button width="100%" height={60}>
              <Text>Home</Text>
            </Button>
          </Link>
        </View>
      </YStack>
    </View>
  );
}
