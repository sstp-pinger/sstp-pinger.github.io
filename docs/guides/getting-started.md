# Getting started

Install SSTP Shield, press **Connect**, and you are protected. A new install
starts a free trial by itself; nothing to sign up for.

## Android

1. [Download](/download) an APK. Take the universal one if unsure.
2. Open it. Android asks to allow installing from this source — allow it.
3. Launch **SSTP Shield**. It opens in [Simple mode](./simple-mode) with the
   free trial already started.
4. Press **Connect**. On the first connect Android asks to add a VPN
   configuration — accept it.

::: info
On Android 13 and newer, allow notifications so the app can show the
connection status. Android runs one VPN app at a time, so connecting stops any
other VPN.
:::

## Windows

1. [Download](/download) and run `sstp-shield-setup-x64.exe`. It is not
   code-signed yet, so if SmartScreen warns, choose
   **More info → Run anyway**.
2. Pick an install folder and whether to add a desktop shortcut, then finish.
3. Launch **SSTP Shield**. It asks for Administrator rights at every launch;
   it needs them to create the virtual network adapter.
4. Press **Connect**.

Your settings and account are kept across updates, and also when you
uninstall.

### Portable zip

Prefer no installer? Unzip `sstp-shield-windows-x64.zip`, then
**right-click `sstp_shield.exe` → Run as administrator**. The portable copy
cannot update itself; download each new version by hand.

::: tip SoftEther protocol
The default **SSTP** protocol needs nothing extra. For **SoftEther**, install
the official [SoftEther VPN Client](https://www.softether-download.com/)
first: it provides a signed network-adapter driver that only its own installer
can install. SSTP Shield finds it and drives it by itself.
:::

## Linux

### Ubuntu, Debian and derivatives

```bash
sudo apt install ./sstp-shield-linux-x64.deb
```

Start **SSTP Shield** from the applications menu, or run `sstp-shield`. The
package sets up everything the VPN needs, again on every update, and installs
to `/opt/sstp-shield`. To update, install the new `.deb` the same way.
`sudo apt remove sstp-shield` removes it.

### Arch Linux and derivatives

```bash
sudo pacman -U https://github.com/sstp-pinger/sstp_shield_releases/releases/latest/download/sstp-shield-linux-x64.pkg.tar.zst
```

It works like the `.deb`: a menu entry, the `sstp-shield` command, and the
setup done on every update. For DNS through the VPN, install `polkit` and run
`systemd-resolved`:

```bash
sudo pacman -S --needed polkit
sudo systemctl enable --now systemd-resolved
```

The package is not in a repository, so `pacman -Syu` does not update it: run
the same `pacman -U` for each new version. `sudo pacman -R sstp-shield`
removes it.

### Other distributions (tarball)

The SSTP protocol creates a TUN device, which needs the `CAP_NET_ADMIN`
capability. Do **not** run the app with `sudo`; grant the capability once:

```bash
tar xzf sstp-shield-linux-x64.tar.gz
cd sstp-shield-linux-x64

# One-time: grant the capability and allow DNS changes
# (needs gcc, libcap, patchelf; asks for your password once).
./tool/setup_privilege.sh ./sstp_shield

# Launch through the generated wrapper.
./sstp-vpn
```

Run `setup_privilege.sh` again after replacing the binary: an update clears
the capability.

### DNS through the VPN

In full-tunnel mode the app points `systemd-resolved` at 1.1.1.1 and 8.8.8.8
through the tunnel, so name lookups don't leak to your local network, and puts
your DNS back on disconnect. The `.deb`, the Arch package and the setup script
all install a polkit rule so this works without a password prompt for
whoever is logged in at the computer. From 3.7.2 the `.deb` and the Arch
package also allow admin users (the `sudo` or `wheel` group), so it works
when you connect over SSH too.

::: warning Updating the tarball from 3.5 or older?
Run `setup_privilege.sh` once more to get the DNS rule. Until then the app
connects but warns that DNS is not going through the VPN.
:::

::: tip SoftEther protocol on Linux
No setup needed — the SoftEther client is bundled. Choosing SoftEther raises a
small helper through `pkexec`, so a password prompt appears on connect (needs
`polkit`).
:::

## Next steps

- [Simple mode](./simple-mode) — the one-button view new installs open in.
- [Professional view](./professional-view) — the server list and every setting.
- [Command-line tool](./cli) — the same without the window.
