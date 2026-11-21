# FAQ

## General

### What is SSTP Shield?

A VPN client for **SSTP** and **SoftEther** servers, including the free public
[VPN Gate](https://www.vpngate.net/) servers. It runs on Android, Windows and
Linux. On desktop it has its own SSTP implementation; the SoftEther protocol
drives the official SoftEther client.

### Do I need an account?

No. There is no email and no password. A random username and device ID are
all that identify your access.

### Is it free?

A new install starts a free trial by itself. After that, access is by
activation code or a USDT subscription. You can also earn free days by
[inviting friends](/docs/guides/invite-friends).

### Does it log my traffic?

No. The SSTP Shield service only manages your access and the server list. It
is never in the path of your VPN traffic, which goes straight to the VPN
server you connect to. See the
[Privacy Policy](https://sstp-shield-server.vercel.app/privacy).

### Is the source code available?

No. The [releases repository](https://github.com/sstp-pinger/sstp_shield_releases)
holds the downloads and documentation only.

## Access and payment

### How do I activate a code?

In the professional view, open the **Unlock** screen and paste the code, or
load the code file. In Simple mode, press **Get access** when the trial ends.
From the command line: `sstp-shield-cli account activate <code>`.

### How do I pay?

Subscribe with USDT on BEP20 or TRC20 in our Telegram bot,
[@sstp_shield_bot](https://t.me/sstp_shield_bot). In the app, **Unlock →
Subscribe with USDT** opens it. No card or bank is needed.

1. In the bot, choose your language and send your **username** (in the app:
   **Settings → Account → Username**, with a copy button).
2. Pick a plan and a network. The bot shows the **exact amount** to send, for
   example 3.0137 USDT, and the address. The amount is only for you: that is
   how the payment is matched to your account. Tap either one to copy it.
3. Send exactly that amount. If your exchange takes its fee out of what you
   send, add the fee so the exact amount arrives.
4. Send the bot the transaction hash. It verifies the transfer and replies
   with an **activation code**.
5. Paste the code in the app under **Unlock → Use an activation code**.

The amount stays reserved for 48 hours. Sent a different amount by mistake?
Write to [sstp.pinger@gmail.com](mailto:sstp.pinger@gmail.com) with the
transaction hash. `sstp-shield-cli account subscribe` shows these steps too.

### Can I get free days?

Yes — [invite a friend](/docs/guides/invite-friends). When they join our
Telegram channel and give the bot their username, you get **+7 days** and their
free trial gets **+3 days**.

### Can I use my access on another device?

`sstp-shield-cli account link` gives an activation code that unlocks another
device on your account, and `account sessions` lists the devices signed in. The app and the CLI on the same
computer share one account, so you never activate twice.

## Connecting

### Which protocol should I use?

**SSTP**, the default. It runs over HTTPS on port 443, which most networks
allow, and needs nothing else installed. Use **SoftEther** for SoftEther
servers that don't offer SSTP. It is desktop-only.

### Why does a server stop working?

Free servers are run by volunteers and come and go. Simple mode and
auto-switch move to another server by themselves; you can also press
**Try another server**.

### Can other devices use my connection?

Yes, with [proxy sharing](/docs/guides/professional-view#proxy-sharing):
devices on the same local network can use the tunnel through one HTTP and
SOCKS5 port.

### Can I run another VPN at the same time?

Not on Android: it allows one VPN app at a time. On desktop, running two VPNs
that both route all traffic usually breaks both.

## Platforms

### Is there an iOS or macOS version?

Not yet.

### Does it run on Windows on ARM or ARM Linux?

No. The Windows network-adapter driver is x64 only, and Linux is built for x64
only.

### Why does the Windows app ask for Administrator rights?

Creating the virtual network adapter and changing routes both require them.

### Why not run the Linux app with `sudo`?

It would run a whole graphical app as root. Instead the packages give it the
one capability it needs, `CAP_NET_ADMIN`. See
[Getting started](/docs/guides/getting-started#linux).
