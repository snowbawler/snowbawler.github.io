# My Portfolio

Made with React + Vite

## Notion data

- The site reads project metadata from a Notion database through a public worker.
- By default it uses `https://notion-api.splitbee.io/v1`. Override this by adding `VITE_NOTION_API_BASE_URL=<your-worker-url>` to `.env.local` (or the host's environment).
- If the worker is down, the UI falls back to the cached records in `src/data/projectsFallback.json`. Update that file whenever you want to refresh the backup content.
