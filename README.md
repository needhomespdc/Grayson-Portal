# NeedHomes Grayson Dashboard

Responsive React/Vite dashboard implemented from the supplied designs. It includes login, overview analytics, transactions, fund-request workflows, searchable tables, filters, CSV export, responsive navigation, and interactive detail/approval/rejection modals.

## Run locally

```bash
npm install
npm run dev
```

Create a production bundle with `npm run build`, then preview it with `npm run preview`.

## API configuration

API placeholders are in `.env`. Vite exposes client-side variables only when they start with `VITE_`.

```env
VITE_API_BASE_URL=https://api.example.com
VITE_AUTH_API_URL=
VITE_TRANSACTIONS_API_URL=
VITE_FUND_REQUESTS_API_URL=
VITE_EXPORT_API_URL=
VITE_PAYSTACK_PUBLIC_KEY=
VITE_USE_MOCK_DATA=false
```

Restart the dev server after changing environment variables. Never place private or secret server keys in a Vite environment variable because frontend values are included in the browser bundle. Only public keys belong here; secret keys must stay on the backend.

## Connecting the backend

The API boundary is in `src/api.js`. The current UI works with mock data when `VITE_USE_MOCK_DATA=true` or `VITE_API_BASE_URL` is empty. Implement or adjust these endpoint mappings there:

- `POST /auth/login`
- `POST /fund-requests/:id/approve`
- `POST /fund-requests/:id/reject` with `{ "reason": "..." }`

Dashboard fixtures live in `src/data.js`. When list endpoints are available, move their fetching into `src/api.js`, return the same object shape used by the UI, and replace the imported fixtures with component state populated in `useEffect` (or your preferred server-state library).

Expected transaction fields: `date`, `id`, `purpose`, `type`, `amount`, `status`.

Expected fund-request fields: `date`, `id`, `purpose`, `amount`, `status`.

## Routes

- `/login`
- `/overview`
- `/transactions`
- `/requests`

Additional sidebar entries are visual placeholders ready for future screenshots and routes.
