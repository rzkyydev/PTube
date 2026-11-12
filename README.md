<p align="center">
  <img src="assets/icon.png" alt="PTube Logo" width="128">
</p>

<h1 align="center">PTube</h1>

<p align="center">
  Lightweight PNGTuber desktop app for Windows, macOS and Linux. Upload your avatar, speak into your microphone, and watch it come alive.
</p>

<p align="center">
  <a href="#what-is-ptube">What it does</a> • <a href="#features">Features</a> • <a href="#how-it-works">How it works</a> • <a href="#download">Download</a>
</p>

---

## What is PTube?

PTube is a simple desktop application that turns a static PNG image into a reactive avatar. You upload pictures for different expressions and moods — idle, speaking, blinking, mute — and PTube watches your microphone and switches between them in real time.

When you are silent, your avatar stays idle. When you speak, it switches to the speaking expression. Blink and mute states are available if you add images for them. It is that simple.

You do not need a webcam. You do not need OBS. You do not need any technical background. Just your image files and a microphone.

---

## Why PTube?

Most avatar tools try to do everything — face tracking, AI effects, complex workflows, cloud services. PTube does not.

PTube is intentionally focused on one thing: **making PNGTubing easy.**

- **Lightweight.** Built with Rust and Tauri, with memory presets and a Performance Mode, so it runs comfortably alongside games, streaming software, and other applications.
- **Simple.** Upload your images, pick a microphone, and you are ready. No configuration mazes.
- **Beginner-friendly.** Clear labels, plain-language explanations, and tooltips on technical settings. Error messages that tell you what to do next.
- **Fast.** Smooth animation with responsive transitions.
- **Focused.** Only the features you actually need for audio-driven PNGTubing.
- **Cross-platform.** Windows, macOS (Apple Silicon and Intel) and Linux.

PTube is not trying to do everything. It is trying to make PNGTubing easy.

---

## Features

### Reactive PNG Avatar

PTube responds to your voice in real time using four avatar states:

- **Idle** — shown when you are not speaking. The default resting state of your avatar.
- **Speaking** — shown when PTube detects your voice above the sensitivity threshold.
- **Blink** — optional. Shown if you upload a blink image. Adds natural blinking to your avatar.
- **Mute** — optional. Shown when you mute your microphone manually.

Idle and Speaking are required. Blink and Mute are optional — add them if you want, skip them if you do not need them.

Animated **APNG** and **GIF** avatars are supported and play their animation on the main stage.

### Microphone Detection

PTube listens to your microphone and adjusts your avatar based on your voice volume.

- Pick your microphone device from the list.
- See a live volume meter so you know what PTube is hearing.
- Adjust voice sensitivity to control how easily your avatar reacts.
- Optional advanced audio settings (noise suppression, noise gate, microphone boost, attack and release speed, speak hold time) are tucked behind an advanced section — beginners can leave them alone.

If your microphone is not detected, check that it is connected and that PTube has permission to access it.

### Animation

Give your avatar personality with built-in animation effects.

- **Idle Motion** — choose from Float/Breathe, Pulse, Sway, Gentle Bounce, Subtle Tilt, or Stationary.
- **Speaking Motion** — choose from Bounce, High Jump, Shake, Wobble, Pulse, Spin Jump, Side Hop, Glitch, or None.
- **Transitions** — Smooth Fade, Pop / Elastic, Slide Up, or Instant when the avatar changes state.
- **Controls** — adjust motion height, motion speed, and avatar scale with simple sliders.
- **Test Animation** — preview any animation without needing to speak into your microphone.
- **Visual options** — darken your avatar when idle or on mute, and toggle the mute icon overlay.

### Profiles

Save different avatar setups as profiles. For example:

- Normal
- Happy
- Gaming
- Chill

Create, rename, duplicate, and delete profiles. Export a profile as a `.ptube` file to share with friends, or import one they send you. Switch between your first nine profiles instantly with `Ctrl + Numpad 1–9`.

### Stream Mode

Enter Stream Mode to use PTube with OBS or other streaming software.

- The interface disappears and the background becomes transparent or green-screen.
- Choose from preset backgrounds: transparent, green, blue, magenta, light, or a custom color.
- Press **F11** to enter or exit Stream Mode. You are never trapped — press F11 again to leave, or use the exit button in the window.
- Optional **Auto Stream Mode when Unfocused** switches to Stream Mode when you click another window and back to the editor when you return. It is off by default.

### Customization

Everything is configurable from the main window:

- Language (31 supported — see Language Support)
- Auto-save
- Performance Mode
- Stage background color
- Grid background toggle
- Light or Dark theme

### Performance

PTube is designed to stay lightweight:

- Memory presets — **Low**, **Balanced** and **High** — adjust PTube's soft memory budgets and cache sizes.
- RAM shown in the footer so you can monitor performance.
- Clean RAM button available to free up memory if needed.
- Performance Mode can be enabled to further reduce resource usage.

---

## How It Works

1. **Choose your avatar images.** Upload images for Idle, Speaking, and optionally Blink and Mute. Drag and drop or use the file picker.
2. **Select your microphone.** Pick your device from the dropdown and speak into it to test.
3. **Adjust voice sensitivity.** Use the sensitivity slider so your avatar reacts when you want it to.
4. **Customize movement.** Pick animation presets and adjust speed, height, and scale.
5. **Start streaming.** Or just enjoy your animated avatar on your desktop.

---

## First Time Using PTube

When you open PTube for the first time, a short welcome guide and tour show you around. You will see the main stage — this is where your avatar appears. On the right side is the control panel with five tabs:

- **Avatar** — upload images and manage profiles
- **Animation** — choose motion effects and adjust settings
- **Audio** — configure your microphone and voice sensitivity
- **Hotkeys** — view and change keyboard shortcuts
- **Stream Mode** — pick your stream background

Your avatar starts in the Idle state. Upload an image for the Idle slot to get started. Then upload a Speaking image to see the difference.

Here is what the terms mean:

- **Idle** — the image shown when you are not speaking.
- **Speaking** — the image shown when PTube detects your voice.
- **Threshold** — the minimum volume needed to trigger the speaking state. Think of it as the "sensitivity dial."
- **Stream Mode** — a mode that hides the interface and shows only your avatar, for use with OBS and streaming software.

---

## Avatar States

| State | Required | What it does |
|---|---|---|
| Idle | Yes | Shown when you are silent. Your avatar's resting face. |
| Speaking | Yes | Shown when PTube detects your voice. |
| Blink | No | Adds blinking animation if an image is uploaded. |
| Mute | No | Shown when you manually mute your microphone. |

If optional states are not configured, PTube simply does not use them. The avatar stays on the current required state.

**Image tips**

- Supported formats: PNG (including APNG), GIF, WebP and SVG.
- Keep each image under **3 MB** (GIF under **15 MB**).
- Use at most **8192 px per side and 12 megapixels**. A transparent PNG can be small on disk but huge in pixels, and PTube will ask you to resize it. Around **2000×2000 px** is plenty — PNG, JPG and WebP avatars are shrunk to fit 500 px anyway to save memory.
- Use the same canvas size for all four states so the avatar does not jump when it changes state.

---

## Microphone

The microphone section is designed to be simple first, powerful when you need it.

**Basic setup:**

- Select your microphone device from the dropdown.
- Watch the volume meter while speaking to confirm PTube is hearing you.
- Adjust the **Voice Sensitivity** slider until your avatar reacts the way you want.

**If your microphone is not detected:**

- Check that your microphone is plugged in and turned on.
- Make sure another application is not exclusively using it.
- Try selecting a different device from the dropdown.
- On Windows, open **Settings → Privacy & security → Microphone** and allow desktop apps to use your microphone. PTube has an **Open Windows microphone settings** shortcut for this.

**If your avatar is not reacting:**

- Speak louder or lower the sensitivity threshold.
- Check that the microphone is not muted in PTube (use the MUTE MIC button).
- Ensure PTube has microphone permission on your system.

**If your avatar is too sensitive:**

- Raise the Voice Sensitivity threshold so quieter sounds are ignored.
- Use the **Noise Gate Filter** in Advanced Audio Settings to ignore background hums and noise.

Advanced settings like noise suppression, noise gate, microphone boost, attack/release speed and speak hold time are available under **Advanced Audio Settings**. You can leave these at their defaults unless you want to fine-tune things.

---

## Animations

PTube includes a variety of animation presets to bring your avatar to life.

**Idle animations** play when you are not speaking:

- Float / Breathe — gentle up-and-down motion
- Pulse — subtle zoom breathing effect
- Sway — slow side-to-side tilt
- Gentle Bounce — soft hopping motion
- Subtle Tilt — slow 3D rotation
- Stationary — no movement

**Speaking animations** play when PTube detects your voice:

- Bounce & Squish — bouncy squash and stretch
- High Jump — dramatic vertical leap
- Shake — quick side-to-side vibration
- Wobble — oscillation wobble
- Pulse Zoom — rapid scale pulsing
- Spin Jump — spinning vertical jump
- Side Hop — horizontal hopping
- Glitch — digital-style shift
- None — no animation

**Transitions** control how the avatar changes between states: Smooth Fade, Pop / Elastic, Slide Up, or Instant. Fades are switched off automatically in Performance Mode and when your system asks for reduced motion.

**Test Animation** lets you preview any animation instantly without speaking into your microphone. Just click the Test Animation button and see the effect.

Use the **Reset** button to restore all animation settings to their defaults.

---

## Profiles

Profiles let you save different avatar configurations. This is useful if you have multiple characters, outfits, or expression setups.

**What you can do with profiles:**

- **Create** — save your current avatar setup as a new profile.
- **Rename** — give it a clearer name.
- **Duplicate** — copy an existing profile to use as a starting point.
- **Delete** — remove a profile you no longer need.
- **Export** — save a profile as a `.ptube` file, including the images.
- **Import** — load a profile from a `.ptube` file someone sent you.

Example profile names: Normal, Happy, Gaming, Chill, or anything you like.

---

## Stream Mode

Stream Mode makes PTube work with OBS, VMix, or any streaming software that can capture a window.

**What it does:**

- Hides the PTube interface completely.
- Makes the background transparent or applies a green-screen, blue-screen, or magenta-screen color.
- You can also pick a custom background color.

**How to enter:** Press **F11** or click the Stream Mode button in the status bar.

**How to exit:** Press **F11** again. The exit button is also visible in the window while in Stream Mode. You can always press F11 to leave — you are never stuck.

**Using it with OBS:**

- *Transparent (recommended):* choose the transparent background, add a **Window Capture** source in OBS, select the PTube window, and enable **Allow Transparency** in the source properties.
- *Chroma key:* choose Green (or Blue / Magenta), add a **Window Capture** source, then add a **Chroma Key** filter with the same color.

Tip: turn on **Auto Stream Mode when Unfocused** so the editor hides itself as soon as you click back into your game.

---

## Performance

PTube is built to be fast and gentle on your hardware.

- Uses a small memory footprint, with presets (**Low**, **Balanced**, **High**) that set soft memory budgets of about 128, 192 and 384 MB in total, including the web view that draws the interface.
- Runs fine alongside games, streaming software, and other applications.
- The footer shows a live RAM reading if you want to check performance.
- **Clean RAM** button is available in the footer to free up memory.
- **Performance Mode** can be enabled in Settings to further reduce resource usage.

No specific benchmark numbers are claimed. Performance depends on your hardware, avatar image sizes, and animation settings. If your PC is older or you play heavy games, choose the **Low** preset.

---

## Accessibility & Beginner Friendliness

PTube is designed so anyone can use it, regardless of experience:

- Clear, plain-language labels and tooltips throughout.
- Keyboard navigation supported across all controls.
- Visible focus indicators on interactive elements.
- Readable typography and sufficient contrast in both light and dark themes.
- Onboarding **Welcome Guide** and interactive **Tour** to walk new users through the app.
- Friendly error messages instead of raw technical errors.
- Scalable UI that works at smaller resolutions.

---

## Language Support

PTube supports **31 languages**. The interface language can be changed instantly in Settings — no restart needed. By default PTube follows your system language.

Supported languages include:

English, Indonesian, Arabic, Czech, Danish, German, Greek, Spanish, Finnish, French, Hebrew, Hindi, Hungarian, Italian, Japanese, Korean, Malay, Dutch, Norwegian, Polish, Portuguese, Romanian, Russian, Swedish, Thai, Filipino, Turkish, Ukrainian, Vietnamese, Chinese (Simplified), Chinese (Traditional).

If a translation is not available for your language, PTube automatically falls back to English.

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| **F11** | Toggle Stream Mode |
| **Ctrl + M** | Toggle Mute Microphone |
| **Ctrl + Alt + H** | Hide or Show PTube window |
| **Ctrl + Numpad 1–9** | Switch between profiles |

The Stream Mode and Mute shortcuts can be customized in the Hotkeys tab of the control panel.

---

## Download

Download the latest release from **[GitHub Releases](https://github.com/RzkyyDev/PTube/releases/latest)**. Choose the file for your system:

| System | File | How to install |
|---|---|---|
| **Windows** 10 / 11 (64-bit) | `PTube-windows.exe` | Run the installer. |
| **macOS** — Apple Silicon (M1 and newer) | `PTube-macos-arm64.dmg` | Open the DMG and drag PTube to Applications. |
| **macOS** — Intel | `PTube-macos-x64.dmg` | Same as above. |
| **Linux** — portable | `PTube-linux.AppImage` | `chmod +x PTube-linux.AppImage`, then run it. |
| **Linux** — Debian / Ubuntu | `PTube-linux.deb` | `sudo apt install ./PTube-linux.deb` |

**macOS note:** PTube is not signed with an Apple Developer ID, so macOS may say the app is "damaged". Run this once in Terminal, or right-click the app and choose **Open**:

```bash
xattr -dr com.apple.quarantine /Applications/PTube.app
```

### System Requirements

| | Windows | macOS | Linux |
|---|---|---|---|
| **System** | Windows 10 or 11, 64-bit | macOS 10.15 Catalina or newer | 64-bit (x86_64), as recent as Ubuntu 22.04 |
| **Needs** | WebView2 Runtime (already included in Windows 10/11) | Nothing extra | WebKitGTK 4.1; AppIndicator for the tray icon |

Hardware needs are modest. As a rough guide (estimates, not benchmarks): a dual-core 64-bit CPU, **4 GB of RAM** (8 GB recommended if you game and stream on the same PC), no dedicated GPU required, and a screen of at least 960×600. Any microphone works.

### Updates

PTube checks GitHub Releases once at startup (you can turn this off in **Settings → System & Help**), or whenever you choose **Check for Updates** in the About page or the tray menu.

- **Windows:** the update downloads inside PTube with a progress bar and the installer starts for you.
- **macOS and Linux:** updates are manual. **Download from GitHub** opens the latest release page in your browser, where you download and install the new version yourself.

You can also pick **Later** or **Skip this version** in the update dialog.

---

## Troubleshooting

### My microphone is not detected

- Check that your microphone is plugged in and powered on.
- Make sure no other application is exclusively using the microphone.
- Try selecting a different device from the microphone dropdown.
- Check your system's microphone permissions for PTube. On Windows, use the **Open Windows microphone settings** shortcut.

### My microphone is detected but there is no voice activity

- Speak closer to the microphone.
- Lower the Voice Sensitivity threshold.
- Make sure the microphone is not muted (click the MUTE MIC button).
- Check the volume meter to confirm PTube is receiving audio.
- Ensure PTube has permission to access your microphone.

### My avatar is not moving

- Make sure you have uploaded images for at least Idle and Speaking states.
- Check that you are speaking above the sensitivity threshold.
- Try the Test Animation button to rule out a microphone issue.
- Verify that animation is enabled and not set to Stationary.

### My avatar is too sensitive or not sensitive enough

- Raise or lower the Voice Sensitivity slider.
- Use the Noise Gate Filter in Advanced Audio Settings to block background noise.
- Adjust the microphone boost if needed.

### My avatar will not upload ("Failed to save avatar image")

- Check the image size. PTube accepts files up to 3 MB (GIF up to 15 MB) and images up to 8192 px per side and 12 megapixels.
- A transparent PNG can be small on disk but very large in pixels. Resize it to around 2000×2000 px and try again.
- From version 4.5.2 the message tells you the reason. If it says PTube cannot write to its folder, check folder permissions, free disk space, and your antivirus (for example Windows Controlled Folder Access).

### The avatar looks stuck or frozen

- Try the Clean RAM button in the footer.
- Enable Performance Mode in Settings.
- Restart PTube if needed.

### Stream Mode confused me

- Press **F11** to exit Stream Mode.
- The exit button is always visible in the window while in Stream Mode.
- You can also use the tray icon: **Stream Mode / Editor Mode**.

### The window is off-screen or invisible

- Right-click the tray icon and choose **Reset Window Position and Size**.
- Press **Ctrl + Alt + H** to show PTube again.

### macOS says the app is damaged

- See the `xattr` command in the [Download](#download) section.

### Linux: no tray icon or hotkeys do not work

- Install AppIndicator support. On GNOME you need the *AppIndicator and KStatusNotifierItem Support* extension.
- Global hotkeys can be restricted on Wayland. They are most reliable on X11.

---

## FAQ

**Is PTube free?**

PTube is a proprietary application. See the License section below for details.

**What operating systems are supported?**

PTube runs on Windows 10 and 11 (64-bit), macOS 10.15 or newer (Apple Silicon and Intel), and 64-bit Linux (AppImage and .deb).

**Do I need a webcam?**

No. PTube uses only a microphone. No camera is required.

**Do I need a VTuber model?**

You need images for your avatar. PNG, APNG, GIF, WebP, and SVG formats are supported.

**Can I use my own PNG?**

Yes. Upload any PNG (or GIF, WebP, SVG) as your avatar images.

**Do I need OBS?**

No. PTube works on its own as a desktop avatar application. OBS is only needed if you want to stream your avatar to an audience.

**Is PTube suitable for low-end PCs?**

PTube is designed to use little RAM and CPU, and has a Low memory preset and a Performance Mode for modest hardware.

**Can I use multiple avatar profiles?**

Yes. Create profiles and switch between them instantly.

**Can I change expressions?**

Yes. Upload different images for Idle, Speaking, Blink, and Mute states to create expressive avatars.

**Does PTube work with a microphone?**

Yes. A microphone is required for the voice-reactive features. Any standard microphone works.

**Can I stream with it?**

Yes. Use Stream Mode with a window capture in OBS or other streaming software.

**Where are my files stored?**

In PTube's data folder: `%APPDATA%\com.rzkyydev.ptube` on Windows, `~/Library/Application Support/com.rzkyydev.ptube` on macOS, and `~/.local/share/com.rzkyydev.ptube` on Linux. It holds your settings, your avatar images and a log file (`ptube-app.log`) that is useful when reporting a bug. The **Open Avatar Folder** button in the app takes you to your images.

**Can I move my setup to another PC?**

Yes. Use **Settings → Data & Backup** to export everything into one `.ptube` file, then import it on the other PC.

---

## What PTube Does Not Do

PTube is intentionally focused on audio-driven PNGTubing. It does not:

- Support webcam or AI face tracking
- Render video avatars
- Support multiplayer or networked avatars
- Include complex OBS networking integrations
- Support VST audio plugins
- Use cloud services
- Run unnecessary background services
- Offer window opacity, always-on-top or click-through options (these were removed in 4.5.0)

These features are outside PTube's core purpose. PTube is not trying to do everything. It is trying to make PNGTubing easy.

---

## Privacy & Data

All your data stays on your computer:

- Settings are saved locally in your user data folder.
- Avatar images are stored as files in your user data directory.
- Your microphone audio is processed on your computer only. It is never recorded or uploaded.
- There is no telemetry or analytics. The only network request PTube makes is the optional update check to GitHub described above.
- Your profile exports are entirely local — `.ptube` files contain only your own data.

PTube accesses only your microphone. It does not access your camera, contacts, files, or any other system resources.

---

## Visuals

No screenshots are included yet. Launch PTube to see the interface — it is designed to be immediately understandable without any explanation.

---

## Roadmap

PTube v4.5 is the current version, built natively in Rust and now available on Windows, macOS and Linux.

- **Current** — v4.5: Reactive avatar, profiles, animations, Stream Mode, 31 languages, memory presets, and builds for Windows, macOS and Linux.
- **Planned** — further quality-of-life improvements based on user feedback, additional language support.
- **Future** — features that align with the lightweight, focused philosophy will be evaluated carefully.

No speculative features are promised. Every addition will be evaluated against the core principles of simplicity, stability, and performance.

---

## Contributing

PTube is a proprietary application. The source code is not publicly open for contributions at this time.

If you are interested in the project, follow the GitHub repository for updates and releases.

---

## License

PTube is licensed under a **Proprietary License**.

Copyright © 2025 RzkyyDev. All Rights Reserved.

You may not copy, modify, redistribute, or reverse engineer this software without explicit written permission from the copyright holder. See the `LICENSE` file in the repository for full details.

---

## Credits

**PTube** is made by **RzkyyDev**.

- GitHub: [RzkyyDev](https://github.com/rzkyydev)
- Project: [Repository](https://github.com/rzkyydev/PTube)
- Website: [Official Site](https://ptuber.web.id)
