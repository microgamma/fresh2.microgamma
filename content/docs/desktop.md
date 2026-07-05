# Desktop App

Microgamma is a regular desktop application — download it, open it, and point it at your music. No terminal required: you set everything up in the app's window. Builds are published per platform on the [Downloads](/downloads) page as a zip.

## macOS

1. Download the macOS build (`Microgamma-darwin-arm64-*.zip`) from [Downloads](/downloads).
2. Double-click the zip to unpack `Microgamma.app`, then drag it into your **Applications** folder.
3. Open it. The build is signed and notarized, so it launches normally.

## Windows

1. Download the Windows build (`Microgamma-win32-x64-*.zip`) from [Downloads](/downloads).
2. Right-click the zip → **Extract All**.
3. Run **`Microgamma.exe`**. The build is unsigned, so SmartScreen may warn you — click **More info → Run anyway**.

## Linux

1. Download the Linux build for your architecture (`Microgamma-linux-x64-*.zip`, or `-arm64` for a Raspberry Pi / ARM machine) from [Downloads](/downloads).
2. Extract it and launch:

   ```bash
   unzip Microgamma-linux-*.zip
   cd Microgamma-linux-*/
   ./Microgamma
   ```

   If the app fails to start with a sandbox error, run it with `./Microgamma --no-sandbox`.

## First run

On first launch Microgamma opens a window and walks you through setup: give the device a name and choose your music folder. It scans your library, and then you're ready — open Microgamma on any device on your network and start streaming.

Want to run it without a window instead (a home server, NAS, or Raspberry Pi)? See [Headless Mode](/docs/headless) and the [`mg` CLI](/docs/cli-reference).
