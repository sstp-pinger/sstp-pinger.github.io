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

`sstp-shield-cli version --check` says whether a newer version is out. The CLI
ships with the app, so updating the app updates the CLI too.

## Where GitHub is blocked

From 3.6.3, if the update cannot be downloaded from GitHub, the app (Windows
and Android) gets the same file through the [jsDelivr](https://www.jsdelivr.com/)
mirror ([sstp_shield_mirror](https://github.com/sstp-pinger/sstp_shield_mirror)).
It checks the file against its SHA-256 before installing, so a mirrored file
is exactly the released one.
