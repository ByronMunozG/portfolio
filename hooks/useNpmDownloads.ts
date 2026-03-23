import { useState, useEffect } from "react";

const useNpmDownloads = (pkg: string): number | null => {
  const [downloads, setDownloads] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.npmjs.org/downloads/point/last-month/${pkg}`)
      .then((res) => res.json())
      .then((data) => setDownloads(data.downloads))
      .catch(() => {});
  }, [pkg]);

  return downloads;
};

export default useNpmDownloads;
