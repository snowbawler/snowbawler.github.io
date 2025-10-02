import { useEffect, useState } from "react";
import { fetchNotionPage } from "../lib/notionApi";

export function useNotionRecordMap(pageId) {
  const [recordMap, setRecordMap] = useState(null);
  const [isLoading, setIsLoading] = useState(Boolean(pageId));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pageId) {
      return undefined;
    }

    let isMounted = true;
    setIsLoading(true);
    setError(null);

    fetchNotionPage(pageId)
      .then((data) => {
        const normalizedRecordMap = (() => {
          if (data?.recordMap) {
            return data.recordMap;
          }

          if (data?.block) {
            return data;
          }

          if (data && Object.keys(data).length > 0) {
            return { block: data };
          }

          return null;
        })();

        if (!normalizedRecordMap || !normalizedRecordMap.block) {
          throw new Error("Received invalid Notion recordMap");
        }

        if (!isMounted) {
          return;
        }

        const safeRecordMap = {
          ...normalizedRecordMap,
          block: normalizedRecordMap.block ?? {},
          collection: normalizedRecordMap.collection ?? {},
          collection_view: normalizedRecordMap.collection_view ?? {},
          collection_query: normalizedRecordMap.collection_query ?? {},
          notion_user: normalizedRecordMap.notion_user ?? {},
          user_root: normalizedRecordMap.user_root ?? {},
          user_settings: normalizedRecordMap.user_settings ?? {},
          signed_urls: normalizedRecordMap.signed_urls ?? {},
        };

        if (import.meta.env.DEV) {
          console.debug("Loaded Notion recordMap", safeRecordMap);
        }

        setRecordMap(safeRecordMap);
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
  }, [pageId]);

  return { recordMap, isLoading, error };
}
