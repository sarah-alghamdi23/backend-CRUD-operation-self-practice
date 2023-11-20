import "dotenv/config";
export const dev = {
  app: { port: Number(process.env.PORT) || 3003 },
  db: {},
};
