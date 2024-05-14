import { useEffect, useState } from 'react';

export const useDate = () => {
  const locale = 'en';
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date());

    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  });

  return {
    date,
    time,
  };
};
