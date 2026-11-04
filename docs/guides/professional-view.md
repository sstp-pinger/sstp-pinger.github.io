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

<img class="screenshot" src="/screenshots/servers.png" alt="The server list with measured latency, bookmarks and recents tabs">

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

<img class="screenshot" src="/screenshots/settings.png" alt="Settings: how servers are found and measured">

## Auto-switch

Hold **Connect**. The app checks that pages load through the tunnel and moves
through the measured servers until one keeps working. **Next server** moves on
yourself.

## While connecting and connected

The **Connection** screen shows each step of the handshake as it happens,
with the time it took:

<img class="screenshot" src="/screenshots/connecting.png" alt="Connecting: the handshake steps with their timings">

Once connected it shows what is actually protected: the exit IP and country,
the tunnel address, whether DNS and IPv6 go through the tunnel, and the
address for proxy sharing.

<img class="screenshot" src="/screenshots/connected.png" alt="Connected: exit IP, country, tunnel IP, DNS and IPv6 status">

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

<img class="screenshot" src="/screenshots/sharing.png" alt="Sharing: the proxy address for other devices on the network">

## Looks

**Settings → Look** has several themes, grouped into editor favourites and
easy-on-the-eyes papers.
