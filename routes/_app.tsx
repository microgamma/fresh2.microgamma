import CountlyAnalytics from "../islands/CountlyAnalytics.tsx";
import { define } from "../utils.ts";


export default define.page(function App({ Component }) {
  const COUNTLY_APP_KEY = Deno.env.get('COUNTLY_APP_KEY');

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Microgamma</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Fira+Code:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/maskable_icon_x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="/maskable_icon_x72.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/maskable_icon_x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/maskable_icon_x128.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/maskable_icon_x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="384x384"
          href="/maskable_icon_x384.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/maskable_icon_x512.png"
        />
        <link rel="apple-touch-icon" href="/maskable_icon_x180.png" />
      </head>
      <body>
        <Component />
        {COUNTLY_APP_KEY && <CountlyAnalytics appKey={COUNTLY_APP_KEY} />}
      </body>
    </html>
  );
});
