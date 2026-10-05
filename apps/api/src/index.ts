import { Hono } from 'hono';

const app = new Hono();

app.get('/health', (c) => {
    return c.json({ status: 'ok', time: new Date().toISOString() });
});

export default app;


// exporting end-to-end types for frontend via Hono's 'hc' client.
export type AppType = typeof app;