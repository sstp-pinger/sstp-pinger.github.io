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
- **Professional view:** Connection → *Connect through* → **Custom node**
  (on a phone: Settings → Custom node). Type a server and tap
  **Save to My servers**, or **Paste link**.

## My servers

Saved servers are listed under **My servers**. Tap one to connect through it,
tap the QR icon to share it — another phone's camera opens the link — or delete
it. The shared link includes the server's password.

Switching *Connect through* back to **Server list** returns to our servers;
without a subscription that shows the first screen again.
