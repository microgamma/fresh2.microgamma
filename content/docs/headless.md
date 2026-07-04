# Headless Mode

Headless mode runs Microgamma without opening a window. It reads the configuration and library you created with `mg setup` and immediately starts streaming — ideal for servers, NAS boxes, and single-board computers.

## Running headless

```bash
Microgamma --headless
```

The app starts in the background and serves your library to any device on the same network. Stop it as you would any process (`Ctrl+C`, or your service manager).

## Where your config lives

All configuration and the scanned library index are stored in:

```
~/.microgamma
```

Because it lives on disk, your setup survives restarts — you never have to run `mg setup` again unless you want to change something.

You can move this location by setting the `MG_BASE_PATH` environment variable. This is especially useful in Docker, where you mount a volume there so the config persists across container runs — see [Docker](/docs/docker).

## Re-scanning your library

When you add or remove music, refresh the index:

```bash
mg scan
```

To rebuild the index from scratch:

```bash
mg scan --reset
```

See the [CLI Reference](/docs/cli-reference) for every command.
