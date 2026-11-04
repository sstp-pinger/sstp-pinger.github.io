# Professional view

The professional view shows the server list and every setting. Switch to it
from [Simple mode](./simple-mode#switching-view).

## Activating

On the **Unlock** screen you can:

- start the free trial,
- paste an activation code, or load the code file,
- subscribe with USDT (BEP20 or TRC20).

## Picking a server

Browse the **Servers**, **Bookmarks** and **Recents** tabs. The header shows
how many servers are available and how many are reachable right now. The
view-mode toggle switches between a grouped list and a flat, sorted one.

### Refreshing the list

The download-style button next to **Ping** fetches a fresh server list. Your
saved servers stay on screen and usable while it loads, with a thin bar above
the list. **Stop fetching** cancels a slow fetch. If the fetch fails, the
saved list stays and a note says so.

### Ping

**Ping** measures latency so you can pick a fast server. The split button also
offers **Ping N live**, which measures again only the servers that answered
last time. A running ping can be stopped.

In Settings, **ping mode** chooses between *accurate* (a full TLS handshake)
and *fast* (a TCP connect only).

## Auto-switch

Hold **Connect**. The app checks that pages load through the tunnel and moves
through the measured servers until one keeps working. **Next server** moves on
yourself.

## Reconnection

Set a retry count and interval in Settings to recover dropped tunnels by
themselves. A count of 0 turns reconnecting off.

## Protocol <Badge type="info" text="desktop" />

Choose **SSTP** or **SoftEther** in a profile's settings. Android is SSTP-only,
so the option is hidden there. SoftEther on Windows needs the official
[SoftEther VPN Client](https://www.softether-download.com/).

## Proxy sharing

While connected, other devices on the same local network can use your tunnel.
The app opens one port that speaks both HTTP and SOCKS5 and shows the address
to enter on the other device. Turn it off in Settings.

## Looks

**Settings → Look** has several themes, grouped into editor favourites and
easy-on-the-eyes papers.
