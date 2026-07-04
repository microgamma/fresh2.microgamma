# Getting Started

Microgamma turns your own music library into a private streaming server — your music, on every device, with no subscription. There are two ways to run it.

## As a desktop app

The simplest path — everything happens in the app window, no terminal needed:

1. **Download** the build for your platform from the [Downloads](/downloads) page.
2. **Run** Microgamma.
3. **Log in** with your Microgamma account.
4. **Configure** — give the device a name and choose your music folder; Microgamma scans your library.
5. **Ready to play.**

Per-platform install steps (macOS Gatekeeper, Windows SmartScreen, Linux) are on the [Desktop App](/docs/desktop) page.

## Headless (server, NAS, Raspberry Pi, or Docker)

Run it with no window and drive it from the command line — ideal for an always-on machine:

```bash
mg setup               # log in, name the device, pick the music folder, scan
Microgamma --headless  # start streaming, no window
```

Run it directly — see [Headless Mode](/docs/headless) — or in a container — see [Docker](/docs/docker).

## The two executables

- **`Microgamma`** — the app itself, with or without a window (`--headless`).
- **`mg`** — the CLI that configures it: `setup`, `login`, `logout`, `scan`, `config`.

Your configuration is stored in `~/.microgamma` (override with `$MG_BASE_PATH`) and reused on every run, so you set things up once.

### Running `mg` locally

`mg` is already on your `PATH` in the Docker image. In a local install it ships inside the app's resources folder:

- **Linux** — `<extracted-folder>/resources/mg`
- **macOS** — `Microgamma.app/Contents/Resources/mg`
- **Windows** — `<folder>\resources\mg.cmd`

Call it by full path (`./resources/mg setup`), or symlink it onto your `PATH` once (macOS/Linux):

```bash
sudo ln -s "/full/path/to/Microgamma/resources/mg" /usr/local/bin/mg
```

## Next steps

- [Desktop App](/docs/desktop) — install and run it as a normal app on macOS, Windows, or Linux.
- [Headless Mode](/docs/headless) — run without a GUI and keep your config across restarts.
- [Docker](/docs/docker) — run Microgamma in a container.
- [CLI Reference](/docs/cli-reference) — every `mg` command.
