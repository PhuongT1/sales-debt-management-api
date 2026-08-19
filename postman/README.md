# Postman collection

## Import

1. Start the API with `npm run dev`.
2. Open Postman and select **Import**.
3. Import `Sales-Debt-Management-API.postman_collection.json`.
4. Import `Local.postman_environment.json`.
5. Select the **Sales Debt API - Local** environment.
6. Run **Auth > Login** first.

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
