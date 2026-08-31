# Postman collection

## Import

1. Start the API with `npm run dev`.
2. Open Postman and select **Import**.
3. Import `Sales-Debt-Management-API.postman_collection.json`.
4. Import the environment for the target you want to call:
   - `Local.postman_environment.json` for `http://localhost:4000`.
   - `Production.postman_environment.json` for the Vercel deployment.
5. Select **Sales Debt API - Local** or **Sales Debt API - Production** in Postman.
6. Open **Auth > Login**, enter your email and password directly in the JSON body, and select
   **Send**.
7. After the login returns `200 OK`, call any protected request. It inherits the collection's
   Bearer token and uses the `accessToken` saved by the login script.

The environments intentionally contain no email or password. Do not save real credentials in the
shared Login request or export them with the collection. Access and refresh tokens start empty and
are populated at runtime in the selected environment.

Login saves `accessToken`, `refreshToken`, and `userId` automatically. Create Party, Create
Debt, and Create Payment save their returned IDs for the following requests.

Recommended test order:

1. Auth > Login
2. Parties > Create Party
3. Parties > Get Party Detail
4. Debts > Create Debt
5. Debts > Get Debt Detail
6. Debts > Create Payment for Debt
7. Payments > List Payments

Requests marked `[DESTRUCTIVE]` or `[DANGEROUS]` change or disable data. Run them manually
only when intended. They are skipped by default. Set `allowDestructive` to `true` in the active
environment to enable them.

## Request history

Postman records sent requests in its **History** sidebar. The collection also updates these
environment variables after every response:

- `lastRequestName`
- `lastStatusCode`
- `lastRunAt`

For a persistent team-visible history, save important responses as collection examples or run
the collection and export the run report from Postman.

## Export

To share the latest files after editing them in Postman:

1. Open the collection menu and select **Export**.
2. Choose **Collection v2.1**.
3. Replace the collection JSON in this folder.
4. Export the environment separately if its variables changed.
5. Before sharing an environment export, clear `password`, `accessToken`, and `refreshToken`.

For **Export Debts to Excel**, open that request and use **Send and Download** to save the XLSX
response.
