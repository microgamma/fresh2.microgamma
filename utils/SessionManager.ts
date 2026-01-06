/// <reference lib="deno.unstable" />

import { SessionManager } from "@kinde-oss/kinde-typescript-sdk";

const kv = await Deno.openKv();

export const sessionManager: SessionManager = {
  async getSessionItem(key: string) {
    const result = await kv.get(["session", key]);
    return result.value;
  },
  async setSessionItem(key: string, value: unknown) {
    await kv.set(["session", key], value);
  },
  async removeSessionItem(key: string) {
    await kv.delete(["session", key]);
  },
  async destroySession() {
    // For destroySession, we'll clear all session keys
    // This is a simplified approach - in production you might want to track session keys
    const iter = kv.list({ prefix: ["session"] });
    for await (const entry of iter) {
      await kv.delete(entry.key);
    }
  }
};
