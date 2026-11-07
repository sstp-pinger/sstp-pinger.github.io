# Updates

## Android

When a new version is out, the app offers it. It downloads the APK that fits
your phone and opens Android's installer. Allow **Install unknown apps** for
SSTP Shield the first time.

## Windows

The installed app offers new versions too. It downloads the installer, checks
its SHA-256 checksum, installs it and restarts. Your settings and account are
kept.

The portable zip cannot update itself: it opens the download page instead.

## Linux

| Installed from | To update |
|---|---|
| `.deb` | `sudo apt install ./sstp-shield-linux-x64.deb` with the new file |
| Arch package | the same `sudo pacman -U …` command as for installing |
| Tarball | extract the new version, then run `./tool/setup_privilege.sh ./sstp_shield` again |

## Command-line tool

`sstp-shield-cli version --check` says whether a newer version is out. While
connected, press **u** (from 3.7.2) to download it through the tunnel:

- **Windows:** it installs when you disconnect.
- **Linux, `.deb` or Arch package:** it is saved to your home folder, and
  the CLI prints the one `sudo apt install …` or `sudo pacman -U …` command
  that installs it.

The CLI ships with the app, so updating the app updates the CLI too.

## Where GitHub is blocked

From 3.6.3, if the update cannot be downloaded from GitHub, the app (Windows
and Android) gets the same file through the [jsDelivr](https://www.jsdelivr.com/)
mirror ([sstp_shield_mirror](https://github.com/sstp-pinger/sstp_shield_mirror)),
and from 3.7.2 so does the CLI's **u** on Linux. A mirrored file is checked
against its SHA-256, so it is exactly the released one.

### Downloading from the mirror by hand

For a first install, or a copy that cannot update itself, take the file from
the mirror yourself. jsDelivr serves files of up to 20 MB, so each file is in
parts: join them, then check the result. For the `.deb` of 3.7.2:

```bash
B=https://cdn.jsdelivr.net/gh/sstp-pinger/sstp_shield_mirror@mirror-3.7.2-sstp-shield-linux-x64.deb
wget "$B/sstp-shield-linux-x64.deb.parts" "$B/sstp-shield-linux-x64.deb.sha256"
for p in $(cut -d' ' -f1 sstp-shield-linux-x64.deb.parts); do wget -q "$B/$p"; done
cat $(cut -d' ' -f1 sstp-shield-linux-x64.deb.parts) > sstp-shield-linux-x64.deb
sha256sum -c sstp-shield-linux-x64.deb.sha256
```

The last line must print `OK`. For another version or file, change the
version and the file name in `B` and in the commands: the mirror has the
Windows installer, the APKs, and from 3.7.2 the `.deb` and the Arch package
(`sstp-shield-linux-x64.pkg.tar.zst`), for the three newest versions.
