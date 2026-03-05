import { createDefine } from "fresh";
import { UserType } from "@kinde-oss/kinde-typescript-sdk";

// This specifies the type of "ctx.state" which is used to share
// data among middlewares, layouts and routes.
export interface State {
  user: UserType;
  shared: string;
  roles: string[];
  skipLayout?: boolean;
  useShareLayout?: boolean;
}

export const define = createDefine<State>();

const cache = new Map<string, any>();

export async function cachedFetch(
  url: string,
  options?: RequestInit,
): Promise<any> {
  console.log("requesting url", url);
  const key = url + JSON.stringify(options || {});
  if (cache.has(key)) {
    return cache.get(key);
  }
  const response = await fetch(url, options);
  if (!response.ok) {
    console.log(response);
    throw new Error(`Fetch failed: ${response.status}`);
  }
  const data = await response.json();
  cache.set(key, data);
  return data;
}
