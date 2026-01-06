import {
  createKindeServerClient,
  GrantType,
  LoginURLOptions,
  SessionManager,
  UserType,
} from "@kinde-oss/kinde-typescript-sdk";
import { sessionManager as s } from "./SessionManager.ts";

class KindeClient {
  // Client for authorization code flow
  private kindeClient = createKindeServerClient(GrantType.AUTHORIZATION_CODE, {
    authDomain: Deno.env.get("KINDE__AUTH_DOMAIN") || "",
    clientId: Deno.env.get("KINDE__CLIENT_ID") || "",
    clientSecret: Deno.env.get("KINDE__CLIENT_SECRET"),
    redirectURL: Deno.env.get("KINDE__REDIRECT_URL") || "",
    logoutRedirectURL: Deno.env.get("KINDE__LOGOUT_REDIRECT_URL"),
  });

  constructor(
    private sessionManager: SessionManager,
  ) {
  }

  async getUser(): Promise<UserType> {
    return await this.kindeClient.getUser(this.sessionManager);
  }

  handleRedirectToApp(url: URL) {
    return this.kindeClient.handleRedirectToApp(this.sessionManager, url);
  }

  login(options?: LoginURLOptions) {
    return this.kindeClient.login(this.sessionManager, options);
  }

  logout() {
    return this.kindeClient.logout(this.sessionManager);
  }

  getPermissions() {
    try {

      return this.kindeClient.getPermissions(this.sessionManager);
    } catch (_) {
      console.log('User is not authenticated! Cannot get permissions.');
    }

    return [];
  }

  getRoles() {
    return this.kindeClient.getUserOrganizations
  }
}

export default new KindeClient(s);
