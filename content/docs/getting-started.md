# Getting Started

Microgamma runs anywhere — including machines with no screen. Run it on a home server, inside Docker, or on a Raspberry Pi, and stream your library to every device on your network. The desktop GUI is optional.

There are two executables:

- **`Microgamma`** — launches the app, with or without a window.
- **`mg`** — the command-line tool you use to configure it: `mg setup`, `mg login`, `mg scan`, and more.

Your configuration is stored locally in `~/.microgamma` and reused on every run, so you only set things up once.

## Install

Grab a build for your platform from the [Downloads](/downloads) page, or pull the Docker image — see [Docker](/docs/docker).

## Making `mg` available

In the **Docker image**, `mg` is already on your `PATH` — just run `mg <command>`.

In a **local install**, `mg` ships inside the app's resources folder:

- **Linux** — `<extracted-folder>/resources/mg`
- **macOS** — `Microgamma.app/Contents/Resources/mg`
- **Windows** — `<folder>\resources\mg.cmd`

You can call it by that full path, e.g. `./resources/mg setup`. For convenience,
add it to your `PATH` once by symlinking it into a directory that's already
there (macOS/Linux):

```bash
sudo ln -s "/full/path/to/Microgamma/resources/mg" /usr/local/bin/mg
```

After that, the bare `mg <command>` examples throughout these docs work from anywhere.

## Quick start

Run the interactive setup wizard once. It asks for a device name and your music library location, logs you in, and scans your library into the database:

```bash
mg setup
```

Then start streaming with no visible window:

```bash
Microgamma --headless
```

That's it — Microgamma is now serving your library to any device on your network.

## Next steps

- [Headless Mode](/docs/headless) — run without a GUI and keep your config across restarts.
- [Docker](/docs/docker) — run Microgamma in a container.
- [CLI Reference](/docs/cli-reference) — every `mg` command.
