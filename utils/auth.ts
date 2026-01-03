import {createKindeServerClient, GrantType} from "@kinde-oss/kinde-typescript-sdk";

// Client for authorization code flow
export const kindeClient = createKindeServerClient(GrantType.AUTHORIZATION_CODE, {
  authDomain: Deno.env.get('KINDE__AUTH_DOMAIN') || '',
  clientId: Deno.env.get('KINDE__CLIENT_ID') || '',
  clientSecret: Deno.env.get('KINDE__CLIENT_SECRET'),
  redirectURL: Deno.env.get('KINDE__REDIRECT_URL') || '',
  logoutRedirectURL: Deno.env.get('KINDE__LOGOUT_REDIRECT_URL'),
});
