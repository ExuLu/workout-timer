import { useEffect, useMemo, useState } from 'react';

import Calculator from './Calculator';
import ToggleSounds from './ToggleSounds';

import { formatTime } from './utils';

const App = () => {
  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));

  // Will be be AM or PM
  const partOfDay = time.slice(-2);

  const workouts = useMemo(
    () => [
      {
        name: 'Full-body workout',
        numExercises: partOfDay === 'AM' ? 9 : 8,
      },
      {
        name: 'Arms + Legs',
        numExercises: 6,
      },
      {
        name: 'Arms only',
        numExercises: 3,
      },
      {
        name: 'Legs only',
        numExercises: 4,
      },
      {
        name: 'Core only',
        numExercises: partOfDay === 'AM' ? 7 : 5,
      },
    ],
    [partOfDay]
  );

  useEffect(() => {
    const id = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <main>
      <h1>Workout timer</h1>
      <time>For your workout on {time}</time>
      <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound} />
      <Calculator workouts={workouts} allowSound={allowSound} />
    </main>
  );
};

export default App;
