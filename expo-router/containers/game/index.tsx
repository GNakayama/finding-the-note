import { useEffect, useState } from 'react';
import { View, YStack } from 'tamagui';
import { Header } from 'components';

import { GameContext } from './context';
import { GameMain } from './Main';
import { Countdow } from './Countdown';
import { getRandomNote } from './helpers';
import { GameStatus } from './types';

function RenderGame(props: { status: GameStatus; count: number }) {
  if (props.status == GameStatus.Loading) {
    return <Countdow count={props.count} />;
  }

  return <GameMain />;
}

export default function Game() {
  const [status, setStatus] = useState(GameStatus.Loading);
  const [count, setCount] = useState(3);
  const [bpm, setBpm] = useState(30);
  const [note, setNote] = useState(getRandomNote());
  const frequency = (60 / bpm) * 1000;

  useEffect(() => {
    if (count === 0) {
      if (status === GameStatus.Loading) {
        setStatus(GameStatus.Playing);
      }

      const timeoutId = setTimeout(() => {
        const note = getRandomNote();
        setNote(note);
      }, frequency);

      return () => {
        clearTimeout(timeoutId);
      };
    }

    const timeoutId = setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count, frequency, status, note]);

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
        <GameContext.Provider value={{ status, count, bpm, note, setBpm }}>
          <RenderGame status={status} count={count} />
        </GameContext.Provider>
      </YStack>
    </View>
  );
}
