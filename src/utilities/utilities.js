const formatTime = (time) => {
  if (time < 60) {
    return `${time} min read`;
  }
  time = time / 60;
  const hour = Math.trunc(time);
  const min = Math.floor((time - hour) * 60);
  if (min > 5) {
    return `${hour} h ${min} min read`;
  }
  return `${hour} h read`;
};
export default formatTime;
