// Nama file asset di https://github.com/rzkyydev/PTube/releases (rilis terbaru: V4.5.2).
// PTube-Setup.exe SENGAJA tidak ada di sini: itu file untuk updater di dalam aplikasi (pengguna 4.5.0),
// bukan installer untuk pengunjung situs. Installer Windows untuk pengguna baru: PTube-windows.exe.
export const RELEASES_URL = "https://github.com/rzkyydev/PTube/releases";

export const ITCH_URL = "https://rzkyydev.itch.io/ptube";

export const FILES = {
  windows: "PTube-windows.exe",
  macArm: "PTube-macos-arm64.dmg",
  macIntel: "PTube-macos-x64.dmg",
  linuxAppImage: "PTube-linux.AppImage",
  linuxDeb: "PTube-linux.deb",
  preset: "preset-setting.ptube",
} as const;

export const downloadUrl = (file: string) => `${RELEASES_URL}/latest/download/${file}`;

export const COMMANDS = {
  macQuarantine: "xattr -dr com.apple.quarantine /Applications/PTube.app",
  linuxAppImage: `chmod +x ${FILES.linuxAppImage}`,
  linuxDeb: `sudo apt install ./${FILES.linuxDeb}`,
} as const;
