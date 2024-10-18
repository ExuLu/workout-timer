import { memo } from 'react';

const ToggleSounds = ({ allowSound, setAllowSound }) => (
  <button
    className='btn-sound'
    onClick={() => setAllowSound((allow) => !allow)}
  >
    {allowSound ? '🔈' : '🔇'}
  </button>
);

export default memo(ToggleSounds);
