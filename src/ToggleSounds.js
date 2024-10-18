import { memo } from 'react';

const ToggleSounds = memo(({ allowSound, setAllowSound }) => (
  <button
    className='btn-sound'
    onClick={() => setAllowSound((allow) => !allow)}
  >
    {allowSound ? '🔈' : '🔇'}
  </button>
));

export default ToggleSounds;
