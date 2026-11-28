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

A new install starts a free trial by itself. After it, you can stay on the
[free plan](/docs/guides/free-plan) — a smaller set of servers, for free, by
joining our Telegram channel or with a friend's invite code — or subscribe
with Telegram Stars or USDT for everything. You can also earn free days by
[inviting friends](/docs/guides/invite-friends).

### Does it log my traffic?

Our service doesn't. It only manages your access and the server list and is
never in the path of your VPN traffic, which goes straight to the VPN server
you connect to.

The **VPN Gate servers do keep logs**, by the project's own
[policy](https://www.vpngate.net/en/about_abuse.aspx): connection logs for at
least three months and packet headers for at least two weeks, which can be
handed to authorities under legal procedures. So nobody can honestly promise
"no logs" on those servers. See our
[Privacy Policy](https://sstp-shield-server.vercel.app/privacy).

### What does a subscription pay for?

VPN Gate's servers are run by volunteers of a non-profit academic project; a
subscription doesn't buy them. It pays for the app, for our measuring and
curating which servers work on your network, for instant auto-switch, and for
support.

### Is the source code available?

No. The [releases repository](https://github.com/sstp-pinger/sstp_shield_releases)
holds the downloads and documentation only.

## Access and payment

### How do I activate a code?

In the professional view, open the **Subscription** screen and paste the code, or
load the code file. In Simple mode, press **Get access** when the trial ends.
From the command line: `sstp-shield-cli account activate <code>`.

### How do I pay?

In our Telegram bot, [@sstp_shield_bot](https://t.me/sstp_shield_bot). In the
app, **Subscription → Subscribe with Stars or USDT** opens it. No card or bank
is needed.

**With Telegram Stars** — 150 Stars a month, renewed by Telegram every 30 days
until you cancel it (Telegram → Settings → My Stars). Your account is extended
right away; the bot also sends an activation code in case the app already says
your access ended.

**With USDT** (BEP20 or TRC20):

1. In the bot, choose your language and send your **username** (in the app:
   **Settings → Account → Username**, with a copy button).
2. Pick a plan and a network. **BEP20** has the lowest fee (about $0.10);
   TRC20 is offered from 6 months, because its fee (about $2) is most of a
   one-month price. The bot shows the **exact amount** to send, for
   example 3.0137 USDT, and the address. The amount is only for you: that is
   how the payment is matched to your account. Tap either one to copy it.
3. Send exactly that amount. If your exchange takes its fee out of what you
   send, add the fee so the exact amount arrives.
4. Send the bot the transaction hash. It verifies the transfer and replies
   with an **activation code**.
5. Paste the code in the app under **Subscription → Use an activation code**.

The amount stays reserved for 48 hours. Sent a different amount by mistake?
Write to [sstp.pinger@gmail.com](mailto:sstp.pinger@gmail.com) with the
transaction hash. `sstp-shield-cli account subscribe` shows these steps too.

### Can I get free days?

Yes — [invite a friend](/docs/guides/invite-friends). Your friend gets
**+7 days** at once; you get days once they really use the app, and again when
they first subscribe.

### Do you have promo codes?

Sometimes — in our [Telegram channel](https://t.me/sstp_shield) and
giveaways. Type one under **Subscription → Have a promo code?**. Each code
works once per account.

### Can I buy access for cash?

In some places trusted resellers sell activation codes for cash. A code's days
start when you first use it.

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
