import { Dispatch, SetStateAction } from 'react'
import { Button } from '@chakra-ui/react'

interface Json {
  [keys: string]: Json | string;
}

interface Props {
  setter: Dispatch<SetStateAction<any | null>>;
}

export function Fetch({ setter }: Props) {

  const get = () => {
    fetch("http://sports.core.api.espn.com/v2/sports/football/leagues/nfl")
      .then(resp => resp.json())
      .then(json => {
        setter(json);
      })
  }

  return (
    <Button onClick={() => get()} />
  );
}
