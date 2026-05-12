export function useDateCalc(startDate) {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  // Calculate months more accurately
  let months = (now.getFullYear() - startDate.getFullYear()) * 12;
  months += now.getMonth() - startDate.getMonth();
  if (now.getDate() < startDate.getDate()) months--;

  return { days, months };
}
