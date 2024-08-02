import { Text as TamaguiText, TextProps } from 'tamagui';

export function Text(props: TextProps) {
  return (
    <TamaguiText
      fontFamily="monospace"
      fontWeight="bold"
      color="$text"
      shadowColor="#000"
      shadowOffset={{ width: 5, height: 5 }}
      {...props}
    />
  );
}
