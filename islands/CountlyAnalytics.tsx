import { useEffect } from "preact/hooks";
import Countly from "npm:countly-sdk-web";

interface CountlyAnalyticsProps {
  appKey: string;
  url?: string;
}

declare global {
  // Augment the global scope safely
  var Countly: any;
}

export function track(event: string, segmentation?: Record<string, unknown>) {
  globalThis.Countly?.add_event({
    key: event,
    segmentation,
  });
}

export default function CountlyAnalytics({ appKey, url }: CountlyAnalyticsProps) {

  useEffect(() => {
    console.log({appKey, url});

    Countly.init({
      app_key:  appKey,
      url: url || 'https://master.count.ly',
      debug: true,
    });

    Countly.track_sessions();
    Countly.track_clicks();
    Countly.track_links();
    Countly.track_pageview();
  }, [appKey, url]);

  return null;
}
