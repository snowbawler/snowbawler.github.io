import { useEffect, useState } from "react";
import { fetchNotionCollection } from "../lib/notionApi";

export function useNotionCollection(collectionId) {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(Boolean(collectionId));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!collectionId) {
      return undefined;
    }

    let isMounted = true;
    setIsLoading(true);
    setError(null);

    fetchNotionCollection(collectionId)
      .then((data) => {
        if (!isMounted) {
          return;
        }

        setRows(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (!isMounted) {
          return;
        }

        setError(err);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [collectionId]);

  return { rows, isLoading, error };
}

