import { Button as TamaguiButton } from 'tamagui';
import { View } from "tamagui";

export function Button(props: any) {
  const { marginHorizontal, marginVertical } = props;
  return (
    <View
      flexGrow={1}
      {...props}
    >
      <View
        width="100%"
        backgroundColor="$shadowColor"
        marginHorizontal={marginHorizontal}
        marginVertical={marginVertical}
        height={props.height || 40}
        position="absolute"
        top={5}
        left={5}
        borderRadius={5}
        flexGrow={1}
      ></View>
      <TamaguiButton
        height={40}
        borderRadius={5}
        borderWidth={2}
        borderColor="#000"
        backgroundColor="$main"
        {...props}
      />
    </View>
  );
}
