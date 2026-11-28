---
title: Your own servers
description: Connect SSTP Shield to your own SSTP or SoftEther server, free forever and without an account. Open sstp:// links, save servers and share them as a link or QR code.
---

# Your own servers

SSTP Shield connects to any SSTP server, not just the ones in our list. Using
your own server is **free forever** and needs no account or subscription: the
app talks to that server directly, and our backend never sees it.

## Open a server link

A server can be shared as a link:

```
sstp://user:password@host:port#Name
```

Tap one and SSTP Shield opens and asks **Add this server?** — it shows the
name, address and user, and connects only if you choose **Add and connect**.
Only add servers you trust: whoever runs a server can see traffic that isn't
encrypted.

Every part except the host is optional:

| Link | Means |
|---|---|
| `sstp://1.2.3.4` | Port 443, user and password `vpn` (as on VPN Gate) |
| `sstp://vpn.example.com:8443` | Another port |
| `sstp://alice@host` | User `alice`, password `vpn` |
| `sstp://alice:s3cret@host:443#Tokyo` | Everything, named "Tokyo" |
| `sstp://host?proto=softether` | Connect with SoftEther (Windows and Linux) |

Special characters in a user or password are percent-encoded (`@` is `%40`),
and an IPv6 address goes in brackets: `sstp://[2001:db8::1]:443`.

Telegram and most chats don't make `sstp://` clickable, so the app shares the
web form instead — `https://sstp-pinger.github.io/add#sstp://…`. It opens a
page with an **Open in SSTP Shield** button. Everything after `#` stays in
your browser and never reaches our website.

## Without a link

- **New install or no subscription:** on the first screen, open
  **Use your own server**, type the host (and port, user, password if they
  aren't the defaults) or tap **Paste link**, then **Save and connect**.
- **Professional view:** on the Connection screen, switch *Connect through*
  to **Custom node** (on a phone it sits above the Connect button). The
  server card is replaced by the server's fields: type one and tap
  **Save to My servers**. Change a saved one and **Save changes** appears —
  nothing is changed until you press it.

## My servers

On a computer, your saved servers sit on the right of the Connection screen;
on a phone, under **Servers → Mine**. Each row shows how fast the server
answered (**Ping** measures them all again). Tap a server to connect through
it — the fields fill in and *Connect through* switches to it. The QR icon
shares it (another phone's camera opens the link; the link includes the
password), the bin deletes it, and **Undo** brings it back.

**Auto-switch works on your own servers too.** With two or more saved, hold
Connect or tap **Auto-switch**: SSTP Shield starts on the one you picked and,
if it stops working, moves on to your other servers, fastest first, skipping
any that didn't answer the last ping.

Switching *Connect through* back to **Server list** returns to our servers;
without a subscription that shows the first screen again.
