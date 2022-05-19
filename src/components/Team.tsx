import { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { HttpRequest } from '../utils/HttpRequest'

type Team = {
  id:             string;
  location:       string;
  name:           string;
  abbreviation:   string;
  color:          string;
  alternatecolor: string;
}

type Props = {
  id: number;
}

export function Team({ id }: Props) {
  const [team, setTeam] = useState<Team | null>(null);
  const url = `http://localhost:9000/nfl/teams/${id}`

  useEffect(() => {
    HttpRequest(setTeam, url);  
  }, [])

  return <>
    { team && <div style={{color: `#${team.color}`}}>
        <h1>{team.id}</h1>
        <h1>{team.location}</h1>
        <h1>{team.name}</h1>
        <h1>{team.abbreviation}</h1>
        <h1>{team.color}</h1>
        <h1>{team.alternatecolor}</h1>
      </div>
    }
  </>
}
