import { Text as TamaguiText } from 'tamagui'

export function Text(props: any) {
  return <
    TamaguiText
      fontFamily="monospace"
      fontWeight="bold"
      color="$text"
      shadowColor="#000"
      shadowOffset={{ width: 5, height: 5 }}
      {...props}
    />
}
