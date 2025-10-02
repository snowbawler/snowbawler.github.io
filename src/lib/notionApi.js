const NOTION_API_BASE_URL = "https://notion-api.splitbee.io/v1";

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error(`Request failed with status ${response.status}`);
    error.status = response.status;
    throw error;
  }

  return response.json();
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

