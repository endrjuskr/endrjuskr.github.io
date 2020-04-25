import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    const mediaMatch = window.matchMedia(query);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  return matches;
};

export default useMediaQuery;
