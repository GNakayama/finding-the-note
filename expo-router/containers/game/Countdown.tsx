import { View } from 'tamagui';
import { Text } from 'components';

interface CountdowProps {
  count: number;
}

export function Countdow(props: CountdowProps) {
  return (
    <View width="100%" flexGrow={1}>
      <View flexGrow={1} flex={1}>
        <View flexGrow={1} flex={1} alignItems="center" justifyContent="center">
          <Text fontSize={180}>{props.count}</Text>
        </View>
      </View>
    </View>
  );
}
