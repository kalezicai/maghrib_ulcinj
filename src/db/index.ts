import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
  __arenaNextJsDrizzleDb?: ReturnType<typeof drizzle>;
};

function createNoopDb(): any {
  return new Proxy(
    {},
    {
      get(_, prop) {
        if (prop === "then") return undefined;
        return () =>
          new Proxy(
            {},
            {
              get(_, q) {
                if (q === "then") return undefined;
                return () => Promise.resolve([]);
              },
            },
          );
      },
    },
  );
}

function lazyDb(): ReturnType<typeof drizzle> | ReturnType<typeof createNoopDb> {
  if (globalForDb.__arenaNextJsDrizzleDb) {
    return globalForDb.__arenaNextJsDrizzleDb;
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.warn("DATABASE_URL not set — using noop database");
    return createNoopDb();
  }

  if (!globalForDb.__arenaNextJsPostgresqlPool) {
    globalForDb.__arenaNextJsPostgresqlPool = new Pool({ connectionString: databaseUrl });
  }

  globalForDb.__arenaNextJsDrizzleDb = drizzle(globalForDb.__arenaNextJsPostgresqlPool);
  return globalForDb.__arenaNextJsDrizzleDb;
}

export const db = new Proxy<ReturnType<typeof drizzle>>({} as any, {
  get(_, prop) {
    const instance = lazyDb();
    const value = (instance as any)[prop];
    if (typeof value === "function") {
      return value.bind(instance);
    }
    return value;
  },
});
