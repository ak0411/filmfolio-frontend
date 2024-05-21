import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, ProgressBar } from 'react95';
import styled from 'styled-components';

const funFacts = [
  "The longest film ever made is 'Logistics' (2012), with a runtime of 857 hours (35 days and 17 hours).",
  "The first film ever made is considered to be 'Roundhay Garden Scene' (1888), directed by French inventor Louis Le Prince. It lasts only 2.11 seconds.",
  "As of recent data, 'Pirates of the Caribbean: On Stranger Tides' (2011) is one of the most expensive films ever made, with a budget of approximately $379 million.",
  "Beatrice Straight won an Oscar for her performance in 'Network' (1976), which lasted only 5 minutes and 40 seconds on screen.",
  "The first fully CGI character in a feature film was the stained glass knight in 'Young Sherlock Holmes' (1985).",
  "'Paranormal Activity' (2007) is one of the most profitable films ever, with a budget of $15,000 and a gross of over $193 million.",
  "'Titanic' (1997) was the first film to gross over $1 billion worldwide.",
  "The James Bond franchise, starting with 'Dr. No' in 1962, is one of the longest-running and most successful film franchises in history.",
  "In 'The Wizard of Oz' (1939), the iconic ruby slippers were originally silver in L. Frank Baum's book. They were changed to ruby red to take advantage of the new Technicolor technology.",
  "Mel Blanc, known as 'The Man of a Thousand Voices,' voiced nearly every character in the original 'Looney Tunes' and 'Merrie Melodies' cartoons.",
  "The longest fight scene in a film is from 'They Live' (1988), lasting 5 minutes and 20 seconds.",
  "Disney's 'Snow White and the Seven Dwarfs' (1937) was the first-ever feature-length animated film.",
  "Charlie Chaplin's 'The Great Dictator' (1940) was his first 'talkie' and is considered one of the greatest satirical comedies ever made.",
  "'The Power of Love' (1922) was the first 3D feature film, although the technology didn’t catch on until decades later.",
  "Al Pacino was almost rejected for the role of Michael Corleone in 'The Godfather' (1972) because producers thought he looked too young and inexperienced.",
];

const getRandomFact = () =>
  funFacts[Math.floor(Math.random() * funFacts.length)];

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

const FunFact = styled.div`
  font-size: 1.2em;
  text-align: center;
`;

const Loading = () => {
  const [percent, setPercent] = useState(0);
  const [funFact, setFunFact] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setFunFact(getRandomFact());
    const timer = setInterval(() => {
      setPercent((previousPercent) => {
        if (previousPercent === 100) {
          navigate('/films');
        }
        const diff = Math.random() * 10;
        return Math.min(previousPercent + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, [navigate]);

  return (
    <LoadingWrapper>
      <FunFact>
        <p className='bold'>Fun Fact:</p>
        {funFact}
      </FunFact>
      <ProgressBar variant='tile' value={Math.floor(percent)} />
      <Link to='/films'>
        <Button className='bold'>SKIP</Button>
      </Link>
    </LoadingWrapper>
  );
};

export default Loading;
