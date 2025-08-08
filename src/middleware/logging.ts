import type { MiddlewareHandler } from "hono";
import { logger as honoLogger } from "hono/logger";
import { log } from "../config/logger.js";

export const logging: MiddlewareHandler = honoLogger(
  (msg?: string, ...rest: unknown[]) => {
    if (msg) {
      const args = rest.map(r => String(r));
      log.info(msg, ...args);
    }
  }
);
