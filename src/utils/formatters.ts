export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return 'Data inválida';
  }
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); 
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
};

export const formatPhone = (phoneString: string): string => {
  const digitsOnly = phoneString.replace(/\D/g, '');

  if (digitsOnly.length !== 13) {
      return phoneString;
  }

  const country = digitsOnly.slice(0, 2);
  const ddd = digitsOnly.slice(2, 4);
  const part1 = digitsOnly.slice(4, 9);
  const part2 = digitsOnly.slice(9);

  return `+${country} (${ddd}) ${part1}-${part2}`;
};