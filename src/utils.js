const formatTime = (date) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);

export { formatTime };
