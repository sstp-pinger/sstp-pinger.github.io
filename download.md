---
title: Download
---

# Download

[![Latest release](https://img.shields.io/github/v/release/sstp-pinger/sstp_shield_releases?label=latest&style=flat-square)](https://github.com/sstp-pinger/sstp_shield_releases/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/sstp-pinger/sstp_shield_releases/total?style=flat-square)](https://github.com/sstp-pinger/sstp_shield_releases/releases)

Every button downloads the newest version. Check the
[system requirements](/docs/requirements) first, then follow
[Getting started](/docs/guides/getting-started) for your platform.

<div class="downloads">
  <div class="card">
    <h3>🤖 Android</h3>
    <p>Android 7.0 or newer. The universal APK works on any phone.</p>
    <a class="btn" href="https://github.com/sstp-pinger/sstp_shield_releases/releases/latest/download/sstp-shield.apk">Universal APK</a>
    <a class="btn alt" href="https://github.com/sstp-pinger/sstp_shield_releases/releases/latest/download/sstp-shield-arm64-v8a.apk">arm64-v8a</a>
    <a class="btn alt" href="https://github.com/sstp-pinger/sstp_shield_releases/releases/latest/download/sstp-shield-armeabi-v7a.apk">armeabi-v7a</a>
    <a class="btn alt" href="https://github.com/sstp-pinger/sstp_shield_releases/releases/latest/download/sstp-shield-x86_64.apk">x86_64</a>
  </div>
  <div class="card">
    <h3>🪟 Windows</h3>
    <p>Windows 10 or 11, 64-bit. The installer updates itself.</p>
    <a class="btn" href="https://github.com/sstp-pinger/sstp_shield_releases/releases/latest/download/sstp-shield-setup-x64.exe">Installer</a>
    <a class="btn alt" href="https://github.com/sstp-pinger/sstp_shield_releases/releases/latest/download/sstp-shield-windows-x64.zip">Portable zip</a>
  </div>
  <div class="card">
    <h3>🐧 Linux</h3>
    <p>64-bit, glibc 2.39 or newer (Ubuntu 24.04+).</p>
    <a class="btn" href="https://github.com/sstp-pinger/sstp_shield_releases/releases/latest/download/sstp-shield-linux-x64.deb">.deb (Ubuntu, Debian)</a>
    <a class="btn" href="https://github.com/sstp-pinger/sstp_shield_releases/releases/latest/download/sstp-shield-linux-x64.pkg.tar.zst">Arch, Manjaro</a>
    <a class="btn alt" href="https://github.com/sstp-pinger/sstp_shield_releases/releases/latest/download/sstp-shield-linux-x64.tar.gz">Tarball</a>
  </div>
</div>

## Which Android APK?

The universal APK (about 50 MB) works everywhere. The smaller per-ABI files
(about 20 MB) each fit one kind of processor:

| File | For |
|------|-----|
| `arm64-v8a` | Most phones from the last several years |
| `armeabi-v7a` | Older 32-bit phones |
| `x86_64` | Emulators |

Not sure? Take the universal one. The in-app updater picks the right file for
your phone by itself.

## Checking the Windows installer

Each release has `sstp-shield-setup-x64.exe.sha256` next to the installer. In
PowerShell:

```powershell
Get-FileHash .\sstp-shield-setup-x64.exe -Algorithm SHA256
```

The hash must match the one in the `.sha256` file. The in-app updater does
this check for you.

## Older versions

Every version is on the
[releases page](https://github.com/sstp-pinger/sstp_shield_releases/releases).
See the [changelog](/changelogs) for what changed.

::: tip GitHub blocked where you are?
In-app updates fall back to a jsDelivr mirror by themselves (from 3.6.3). For
the first install, take the file from the mirror by hand: see
[Downloading from the mirror by hand](/docs/guides/updates#downloading-from-the-mirror-by-hand).
:::
