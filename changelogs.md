---
title: Changelog
outline: [2, 2]
---

# Changelog

What changed in each version. Downloads for every version are on the
[releases page](https://github.com/sstp-pinger/sstp_shield_releases/releases).

## 3.7.0 <Badge type="tip" text="latest" />

<small>November 5, 2026</small>

- **New:** USDT payments use an exact amount that is only yours, for example
  3.0137 USDT. It is how the payment is matched to your account, so nobody
  else can claim it. Older versions must update to pay.
- **Fixed:** BEP20 payments could not be verified.
- **Fixed:** on Windows computers with more than one network adapter, SSTP
  could drop every connection about 10 seconds after connecting.

## 3.6.6

<small>November 4, 2026</small>

- **New:** an Arch Linux package (`sstp-shield-linux-x64.pkg.tar.zst`),
  installed with `pacman -U`. It sets up the VPN permissions and DNS rule on
  every install and update, like the `.deb`.

## 3.6.5

<small>November 4, 2026</small>

- The first Arch package build. Its install check was too strict and failed,
  so this release has no Arch package. Use 3.6.6.

## 3.6.4

<small>November 4, 2026</small>

- **New:** a `.deb` package for Ubuntu, Debian and their derivatives. It adds a
  menu entry and the `sstp-shield` and `sstp-shield-cli` commands, and does the
  one-time permission setup by itself.

## 3.6.3

<small>November 4, 2026</small>

- **New:** where GitHub is blocked, in-app updates (Windows and Android) come
  through a jsDelivr mirror. Each file is checked against its SHA-256 before
  installing.
- Update downloads give up on a dead connection after 15 seconds instead of
  waiting.

## 3.6.2

<small>November 4, 2026</small>

- **Cancel** now works between connection attempts too.

## 3.6.1

<small>November 4, 2026</small>

- **Fixed:** auto-switch could stop for good after a server hung while setting
  DNS. The stuck connection left its adapter and routes behind, so every next
  server failed. A stuck connection is now always cleaned up, and DNS steps
  have time limits.

## 3.6.0

<small>November 2, 2026</small>

- Saved servers stay on screen and usable while a new list loads.
  **Stop fetching** cancels a slow fetch.
- Linux: DNS goes through the VPN in full-tunnel mode (through
  systemd-resolved), and comes back on disconnect.

## 3.5.1

<small>October 27, 2026</small>

- Accurate ping runs all its measurements through one relay process.

## 3.5.0

<small>October 24, 2026</small>

- **New: Simple mode.** One Connect button, the free trial starts by itself,
  and the server list refreshes every 12 hours. New installs open in it.
- The button and status dot show how far the connection has got.
- Auto-switch no longer stalls on one server; the log keeps a whole day.

## 3.4.0

<small>October 23, 2026</small>

- **New:** `sstp-shield-cli`, a command-line tool for Windows and Linux.
- System requirements documented for each platform.

## 3.3.0

<small>October 20, 2026</small>

- **New:** a Windows installer, and in-app updates on Windows.
- **Next server** skips to the next server during auto-switch.
- New default settings.

## 3.2.2

<small>October 17, 2026</small>

- **Fixed:** a crash when switching servers, and switching failing on the
  first attempt.
- Accurate ping on Android uses the tunnel's own TLS stack.
- **Ping all** and **Ping N live** are one split button, and a running ping
  can be stopped.
- Better contrast, type sizes and press states.

## 3.2.1

<small>October 12, 2026</small>

- Seven new looks.
- Proxy sharing: HTTP and SOCKS5 on one port, with instructions.
- The failure screen offers a way out, auto-switch first.

## 3.2.0

<small>October 12, 2026</small>

- **New: auto-switch.** Hold Connect to stay on a working server.
- **New: Ping N live**, measuring again only the servers that answered.
- A rebuilt interface around what the tunnel is actually doing.
- The app recovers from states it used to get stuck in.
