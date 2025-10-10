const DEFAULT_NOTION_API_BASE_URL = "https://notion-api.splitbee.io/v1";
const NOTION_API_BASE_URL = (import.meta?.env?.VITE_NOTION_API_BASE_URL || DEFAULT_NOTION_API_BASE_URL).replace(/\/+$/, "");

async function fetchJson(url) {
  const response = await fetch(url);
  const contentType = response.headers.get("content-type") || "";
  const rawBody = await response.text();
  const trimmedBody = rawBody.trim();

  let payload = null;
  if (trimmedBody) {
    const looksLikeJson =
      contentType.includes("application/json") || trimmedBody.startsWith("{") || trimmedBody.startsWith("[");

    if (looksLikeJson) {
      try {
        payload = JSON.parse(trimmedBody);
      } catch {
        // ignore JSON parse error; payload remains null so the error message can surface rawBody.
      }
    }
  }

  if (!response.ok) {
    const error = new Error(
      `Request failed with status ${response.status}${trimmedBody ? `: ${trimmedBody}` : ""}`,
    );
    error.status = response.status;
    error.body = trimmedBody;
    error.url = url;
    throw error;
  }

  if (payload === null && trimmedBody) {
    throw new Error("Received a non-JSON response from the Notion API");
  }

  return payload ?? {};
}

export async function fetchNotionPage(pageId) {
  if (!pageId) {
    throw new Error("fetchNotionPage requires a pageId");
  }

  return fetchJson(`${NOTION_API_BASE_URL}/page/${pageId}`);
}

export async function fetchNotionCollection(collectionId) {
  if (!collectionId) {
    throw new Error("fetchNotionCollection requires a collectionId");
  }

  return fetchJson(`${NOTION_API_BASE_URL}/table/${collectionId}`);
}
