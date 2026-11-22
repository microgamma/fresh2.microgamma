import DocPage from "../../components/DocPage.tsx";
import CodeBlock from "../../islands/CodeBlock.tsx";

export default function AiProviderPage() {
  return (
    <DocPage slug="ai-provider">
      <p>
        Premium accounts get Microgamma's AI features out of the box. With the
        basic features you bring your own AI provider: a hosted service you have
        a key for, or a model running on your own network. Anything that speaks
        the OpenAI chat API works.
      </p>

      <h2>Where to set it</h2>
      <p>
        Open <strong>Settings → Integrations</strong> and find the{" "}
        <strong>AI</strong> section. It has four fields:
      </p>
      <ul>
        <li>
          <strong>Provider</strong>{" "}
          — DeepSeek, OpenAI, OpenRouter, Ollama (local network), or Custom
          (OpenAI-compatible).
        </li>
        <li>
          <strong>Base URL</strong>{" "}
          — filled in for each provider. Change it only if yours lives somewhere
          else.
        </li>
        <li>
          <strong>Model</strong>{" "}
          — every preset has a default, so you only need to fill it in for
          Custom, or to pick a different model.
        </li>
        <li>
          <strong>API key</strong>{" "}
          — required for DeepSeek, OpenAI and OpenRouter; optional for Ollama
          and Custom.
        </li>
      </ul>

      <h2>Which provider to pick</h2>
      <ul>
        <li>
          <strong>DeepSeek</strong>{" "}
          — cheap, and the only provider that grounds artist, album and song
          write-ups with a web search. See{" "}
          <a href="/docs/deepseek-token">DeepSeek AI Token</a>{" "}
          for getting a key.
        </li>
        <li>
          <strong>OpenAI</strong> or <strong>OpenRouter</strong>{" "}
          — if you already have an account there. OpenRouter gives you one key
          for many models.
        </li>
        <li>
          <strong>Ollama</strong>{" "}
          — a model on your own hardware. No key, no bill, and nothing leaves
          your network.
        </li>
        <li>
          <strong>Custom</strong>{" "}
          — any other OpenAI-compatible server, such as llama.cpp's{" "}
          <code>llama-server</code>.
        </li>
      </ul>

      <h2>A model on your own network</h2>
      <p>
        AI requests are sent by your streamer, the machine that holds your
        library, not by our servers. So a model running on that machine or
        anywhere on your home network is reachable. For Ollama on another
        machine, pick <strong>Ollama (local network)</strong>{" "}
        and point the Base URL at it:
      </p>
      <CodeBlock code={`http://<host>:11434/v1`} />
      <p>
        If Ollama runs on the streamer itself, the default{" "}
        <code>http://localhost:11434/v1</code>{" "}
        already works. The default model is <code>llama3.1</code>; set{" "}
        <strong>Model</strong>{" "}
        to whatever you have pulled. For another server, pick{" "}
        <strong>Custom</strong>, enter its <code>/v1</code>{" "}
        address and the model name.
      </p>

      <h2>Good to know</h2>
      <ul>
        <li>
          Write-ups are web-grounded only with DeepSeek. Other providers write
          from what the model already knows, so small local models may get
          details wrong.
        </li>
        <li>
          The <strong>Similar songs</strong>{" "}
          section on the queue asks the AI for suggestions every time the track
          changes. To save on calls, switch it off with the toggle beside its
          title; the choice is remembered per device.
        </li>
        <li>
          What the AI remembers about your taste is kept on your own machine.
        </li>
        <li>
          Treat an API key like a password. You can revoke or rotate it any time
          from your provider's console.
        </li>
      </ul>
    </DocPage>
  );
}
