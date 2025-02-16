export const useFormatDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
