import { Text, View } from 'tamagui';

export function Header() {
  return (
    <View height="50px" backgroundColor="$background" justifyContent="center">
      <Text textAlign="center" fontSize={25}>
        Finding The Note
      </Text>
    </View>
  );
}
