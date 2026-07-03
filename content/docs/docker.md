# Docker

Microgamma ships as a Docker image, so you can run it headless in a container on any host. Inside the container, prefix any CLI command with `mg`; running with no command launches the app headless.

Keep your configuration in a named volume so it survives restarts, and mount your music library at `/music`.

## 1. Log in to the registry

The images are hosted on Amazon ECR:

```bash
aws ecr get-login-password --region eu-central-1 | \
  docker login --username AWS --password-stdin \
  588144900153.dkr.ecr.eu-central-1.amazonaws.com
```

## 2. First-run setup

Run the interactive wizard once — device name, music location, login, and scan. It needs an interactive terminal, so pass `-it`:

```bash
docker run -it --rm \
  -v mg-config:/home/node/.microgamma \
  -v /path/to/music:/music \
  588144900153.dkr.ecr.eu-central-1.amazonaws.com/microgamma-desktop:latest-x64 \
  mg setup
```

## 3. Run headless

Start the app in the background, reusing the `mg-config` volume from setup:

```bash
docker run -d \
  --name microgamma \
  -v mg-config:/home/node/.microgamma \
  -v /path/to/music:/music \
  588144900153.dkr.ecr.eu-central-1.amazonaws.com/microgamma-desktop:latest-x64
```

## Raspberry Pi / ARM

On ARM hardware, use the `latest-arm64` tag instead:

```
588144900153.dkr.ecr.eu-central-1.amazonaws.com/microgamma-desktop:latest-arm64
```

## Running other commands

You can run any `mg` command the same way. For example, to rebuild the library index:

```bash
docker run --rm \
  -v mg-config:/home/node/.microgamma \
  -v /path/to/music:/music \
  588144900153.dkr.ecr.eu-central-1.amazonaws.com/microgamma-desktop:latest-x64 \
  mg scan --reset
```
