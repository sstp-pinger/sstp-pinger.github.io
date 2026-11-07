# Troubleshooting

## Connecting

| Symptom | Fix |
|---------|-----|
| A server hangs or won't connect | Free servers come and go. Ping first to find a live one, or hold **Connect** for [auto-switch](/docs/guides/professional-view#auto-switch). |
| Connected, but a site will not load | Press **Try another server** (Simple mode) or **Next server**. |
| Windows: connects, but "connection refused" fetching servers | Launch the app **as Administrator**. |
| Windows: SoftEther fails to connect | Install the official [SoftEther VPN Client](https://www.softether-download.com/), then try again. |

## Starting the app

| Symptom | Fix |
|---------|-----|
| Windows: the app does not start | Install the latest [Visual C++ Redistributable (x64)](https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist). |
| Windows: SmartScreen blocks the installer | The installer is not code-signed yet. Choose **More info → Run anyway**. |
| Linux: the app does not start (GLIBC error) | Your distribution is too old; see the [requirements](/docs/requirements#linux). |
| `sstp-shield-cli`: "already running" | Close the SSTP Shield app, or the other `sstp-shield-cli`, first. |

## Linux permissions and DNS

| Symptom | Fix |
|---------|-----|
| "needs CAP_NET_ADMIN" | `.deb` or Arch package: reinstall it. Tarball: run `./tool/setup_privilege.sh ./sstp_shield` (no `sudo`), then launch `./sstp-vpn`. |
| "DNS is NOT going through the VPN" | `.deb`: install `systemd-resolved` and `polkitd`. Arch: install `polkit` and enable `systemd-resolved`. Tarball: run `./tool/setup_privilege.sh ./sstp_shield` again to install the DNS rule (needs the same two). |
| Linux over SSH: connected, but blocked sites resolve to `127.0.0.1` | DNS is still your network's. Update to 3.7.2 or newer: its `.deb` and Arch package let admin users (`sudo` or `wheel` group) set the tunnel's DNS from SSH. Check with `resolvectl status sstp0`: it should list 1.1.1.1 and 8.8.8.8. |
| Linux over SSH: the session freezes while connecting | Update to 3.7.1 or newer, which keeps replies to SSH outside the tunnel. |
| Linux: every connect fails with "File exists" | A route left by a connection that was killed. 3.7.1 and newer take it over; on older versions run `sudo ip route del <server address>/32`. |
| WSL: DNS warning about `10.255.255.254` | WSL writes its own resolver. Set `generateResolvConf=false` in `/etc/wsl.conf` and link `/etc/resolv.conf` to systemd-resolved's stub. |

## Sending a log

If none of this helps, send the log with your message to
[sstp.pinger@gmail.com](mailto:sstp.pinger@gmail.com).

The app keeps the last day in `sstp-shield.log` (older lines in
`sstp-shield.previous.log`):

- **Windows:** `%LOCALAPPDATA%\SSTPShield\`
- **Linux:** `~/.local/share/sstp-shield/`

`sstp-shield-cli logs --app --path` prints the exact path.
