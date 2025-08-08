import type { MiddlewareHandler } from "hono";
import { logger as honoLogger } from "hono/logger";
import { log } from "../config/logger.js";

export const logging: MiddlewareHandler = honoLogger(
  (msg?: string, ...rest: unknown[]) => {
    if (msg) {
      // تأكد rest كلها يمكن طباعتها أو استعملها حسب حاجتك
      log.info(msg, ...rest);
    }
  }
);
