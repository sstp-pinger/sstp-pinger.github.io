---
title: Changelog
outline: [2, 2]
---

# Changelog

What changed in each version. Downloads for every version are on the
[releases page](https://github.com/sstp-pinger/sstp_shield_releases/releases).

## 3.10.0 <Badge type="tip" text="latest" />

<small>November 28, 2026</small>

- **New:** **[your own servers](/docs/guides/own-servers), free forever** —
  no account or subscription. Tap an `sstp://` link, or a shared
  `sstp-pinger.github.io/add#…` link, and the app asks **Add this server?**
  It never connects by itself.
- **New:** **My servers.** Saved servers with their ping, a QR code to share
  each one, delete with **Undo**, and **Paste link**. On a computer they sit
  on the right of the Connection screen; on a phone under **Servers → Mine**.
- **New:** **auto-switch on your own servers.** With two or more saved, the
  app moves to the next fastest one when yours stops working.
- **New:** **Use your own server** on the first screen, so you can connect
  without starting a trial.
- **Changed:** *Connect through* is now at the top of the Connection screen.
  In **Custom node** mode the server card is replaced by the server's fields,
  with **Save changes** when you edit a saved one.
- **Fixed:** an "update available" notification for the version you already
  have.
- **Fixed:** the server tabs no longer overflow on narrow phones.

## 3.9.0

<small>November 25, 2026</small>

- **New:** a **[free plan](/docs/guides/free-plan)** after the trial. Join our
  Telegram channel (or use a friend's invite code) and keep your own set of
  10 servers a day, for free. If Telegram only opens through a VPN, the app
  can connect you for 10 minutes once a day so you can join.
- **New:** pay with **Telegram Stars** — 150 Stars a month, renewed by
  Telegram until you cancel. USDT works as before; BEP20 has the lowest fee.
- **New:** **invite codes.** A friend can type your code in the app — no
  Telegram needed — and gets **+7 days** and the free plan. You get days once
  they use the app, and again when they first subscribe. See
  [Invite friends](/docs/guides/invite-friends).
- **New:** **promo codes** under **Subscription → Have a promo code?**.
- **New:** **Russian.** The whole app is now in English and Russian; it
  follows your device language, or pick one in **Settings → Appearance**.
- **New (desktop):** connect to **your own server** straight from the
  Connection screen.
- **Changed:** **Unlock** is now **Subscription**, and proxy sharing is
  called **Proxy** everywhere.
- **Changed:** the diagnostic log opens at the newest lines and updates live.

## 3.8.1

<small>November 21, 2026</small>

- **New:** **invite a friend.** Share your link from **Unlock → Invite a
  friend**. When your friend joins our Telegram channel and gives the bot
  their username, you get **+7 days** and their free trial gets **+3 days**.
  See [Invite friends](/docs/guides/invite-friends).
- **New:** a **Connect button on every server** in the list. One press selects
  the server and connects; the server you are connected to is highlighted.
- **New:** **Settings is redesigned** — one page of sections (Account,
  Connection, Servers, Troubleshoot, Appearance, About) instead of tabs, with
  short hints and the full explanation one tap away. On a wide window it uses
  two columns. Advanced timing and Theme open as their own pages.
- **New:** **notifications** — a reminder before your access runs out, an
  alert when an update is available, and messages from us.
- **Changed:** paying with USDT now happens in our **Telegram bot**. **Unlock →
  Subscribe with USDT** opens it; the bot hands back an activation code to
  paste in the app. Older versions can still pay in-app until they update.
- **Changed:** the **Username** is under **Settings → Account**, with a copy
  button.
- **Changed:** the server tabs turn into icons when the window is narrow,
  every page uses the same margin, and the Administrator notice on the
  Connection screen is gone (Windows still asks when it needs to).
- **Fixed (Linux):** the *Building the network adapter* and *Pointing your
  traffic through* steps now fill in on the connection progress bar.
- **Fixed (Android):** 3.8.0 had no Android build; 3.8.1 has all platforms.

## 3.8.0

<small>November 21, 2026</small>

Windows and Linux only — the Android build failed. Use 3.8.1, which has
everything above for every platform.

## 3.7.3

<small>November 20, 2026</small>

- **New:** a **custom DNS server** in Settings. Leave it empty to use the VPN
  server's own DNS.
- **New:** **Support & contact** in Settings, with links to the Telegram
  channel, the operator and email.
- **Changed:** pings always make the same TLS handshake the tunnel will, so a
  server that answers will really connect. The fast TCP-only mode is gone.

## 3.7.2

<small>November 6, 2026</small>

- **New (CLI):** while connected, press **r** to download a fresh server list
  through the tunnel, and **u** to download a newer version.
- **Fixed (Linux):** connected over SSH, DNS stayed with your local network,
  so blocked sites still did not resolve. Admin users (`sudo` or `wheel`)
  may now point DNS at the tunnel from SSH too.

## 3.7.1

<small>November 6, 2026</small>

- **Fixed (Linux):** connecting over SSH froze the SSH session once the
  tunnel came up. Replies to SSH and to proxy-sharing clients now leave
  through your normal network.
- **Fixed (Linux):** after a connection was killed, every later connect to
  the same server failed ("File exists").
- **Fixed (Linux):** DNS did not go through the VPN on Ubuntu 24.04.

## 3.7.0

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
