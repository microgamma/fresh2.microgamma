import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

type GTagFn = (...args: unknown[]) => void;

type withDataLayer<T> = T & {
  dataLayer: unknown[];
  gtag: GTagFn;
};

interface GAProviderInput {
  id: string;
}

type Consent = "granted" | "denied";

export function GAProvider({ id }: GAProviderInput) {
  const consentKey = "__microgamma__:privacyConsent";
  const url = `https://www.googletagmanager.com/gtag/js?id=${id}`;

  const showOverlay = useSignal(false);

  useEffect(() => {
    console.log('loading ga script');
    loadScript(url, setUp);
  }, []);

  function loadScript(url: string, callback: () => void) {
    const script = document.createElement("script");
    script.async = true;

    script.src = url;

    script.onload = function () {
      if (callback) callback();
    };

    script.onerror = function () {
      console.warn("Failed to load script.");
    };

    document.head.appendChild(script);

    const w = window as withDataLayer<Window & typeof globalThis>;

    w.dataLayer = w.dataLayer || [];

    w.gtag = function gtag() {
      w.dataLayer.push(arguments);
    };

    w.gtag("js", new Date());

    w.gtag("config", id);

    console.log("Initing consent");

    w.gtag("consent", "default", {
      "ad_storage": "denied",
      "ad_user_data": "denied",
      "ad_personalization": "denied",
      "analytics_storage": "denied",
    });

    setTimeout(() => {
      const consent = localStorage.getItem(consentKey) as Consent;

      if (!consent) {
        showOverlay.value = true;
      } else if (consent === "granted" || consent === "denied") {
        consentGrantedAdStorage(consent);
      }
    }, 1000);
  }

  function setUp() {
    console.log("Google Tag Manager should now be up and running");
  }

  function consentGrantedAdStorage(granted: Consent) {
    (globalThis as withDataLayer<typeof globalThis>).gtag("consent", "update", {
      "ad_storage": granted,
      "ad_user_data": granted,
      "ad_personalization": granted,
      "analytics_storage": granted,
    });

    localStorage.setItem(consentKey, granted);
    showOverlay.value = false;
  }

  return (
    <>
      <div
        className="fx-overlay p-4"
        style={`display: ${showOverlay.value ? "flex" : "none"}`}
      >
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 max-w-lg w-full text-center">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            We Value Your Privacy 🛡️
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mt-2">
            We use only essential cookies to enhance your experience. No
            tracking, no data selling—just a seamless experience tailored for
            you.
          </p>
          <div class="mt-4 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => consentGrantedAdStorage("granted")}
              class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => consentGrantedAdStorage("denied")}
              class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
