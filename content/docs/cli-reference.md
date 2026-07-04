# CLI Reference

The `mg` command configures and controls Microgamma. Run `mg --help` for full usage.

| Command | Description |
| --- | --- |
| `mg setup` | Interactive first-run setup: device name, music location, login, and library scan. |
| `mg login` | Log in via the device-code flow. Prints a URL to authorize on any device; saves the token locally. |
| `mg logout` | Remove the saved token. |
| `mg scan [path] [--reset]` | Scan the music library into the database. Defaults to the configured path; `--reset` rebuilds from scratch. |
| `mg config` | Show config, or set it with `--device-name` / `--music-path`. |
| `Microgamma [--headless]` | Launch the app. `--headless` runs it without a visible window. |

## Configuration

Config lives in `~/.microgamma`. Override the location with the `MG_BASE_PATH` environment variable. In Docker, mount a volume there to keep it across runs — see [Docker](/docs/docker).
