<p align="center">
  <img src="assets/icon.png" alt="PTube Logo" width="128">
</p>

<h1 align="center">PTube</h1>

<p align="center">
  Lightweight PNGTuber desktop app for Windows. Upload your avatar, speak into your microphone, and watch it come alive.
</p>

<p align="center">
  <a href="#what-is-ptube">What it does</a> • <a href="#features">Features</a> • <a href="#how-it-works">How it works</a> • <a href="#download">Download</a>
</p>

---

## What is PTube?

PTube is a simple desktop application that turns a static PNG image into a reactive avatar. You upload pictures for different expressions and moods — idle, speaking, blinking, mute — and PTube watches your microphone and switches between them in real time.

When you are silent, your avatar stays idle. When you speak, it switches to the speaking expression. Blink and mute states are available if you add images for them. It is that simple.

You do not need a webcam. You do not need OBS. You do not need any technical background. Just your PNG files and a microphone.

---

## Why PTube?

Most avatar tools try to do everything — face tracking, AI effects, complex workflows, cloud services. PTube does not.

PTube is intentionally focused on one thing: **making PNGTubing easy.**

- **Lightweight.** Built to stay under 100 MB of RAM. Runs comfortably on low-end hardware and alongside games, streaming software, and other applications.
- **Simple.** Upload your PNGs, pick a microphone, and you are ready. No configuration mazes.
- **Beginner-friendly.** Clear labels, plain-language explanations, and tooltips on technical settings. No raw error messages.
- **Fast.** Smooth 60 FPS animation with responsive transitions.
- **Focused.** Only the features you actually need for audio-driven PNGTubing.

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

### Microphone Detection

PTube listens to your microphone and adjusts your avatar based on your voice volume.

- Pick your microphone device from the list.
- See a live volume meter so you know what PTube is hearing.
- Adjust voice sensitivity to control how easily your avatar reacts.
- Optional advanced audio settings (noise suppression, noise gate, microphone boost, attack and release speed) are tucked behind an advanced section — beginners can leave them alone.

If your microphone is not detected, check that it is connected and that PTube has permission to access it.

### Animation

Give your avatar personality with built-in animation effects.

- **Idle Motion** — choose from Float/Breathe, Pulse, Sway, Gentle Bounce, Subtle Tilt, or Stationary.
- **Speaking Motion** — choose from Bounce, High Jump, Shake, Wobble, Pulse, Spin Jump, Side Hop, Glitch, or None.
- **Controls** — adjust motion height, motion speed, and avatar scale with simple sliders.
- **Test Animation** — preview any animation without needing to speak into your microphone.
- **Visual options** — darken your avatar when idle or on mute, and toggle the mute icon overlay.

### Profiles

Save different avatar setups as profiles. For example:

- Normal
- Happy
- Gaming
- Chill

Create, rename, duplicate, and delete profiles without limits. Export a profile as a `.ptube` file to share with friends, or import one they send you.

### Stream Mode

Enter Stream Mode to use PTube with OBS or other streaming software.

- The interface disappears and the background becomes transparent or green-screen.
- Choose from preset backgrounds: transparent, green, blue, magenta, light, or a custom color.
- Click-Through mode lets mouse clicks pass through the window so you can interact with your game or stream software while streaming.
- Press **F11** to enter or exit Stream Mode. You are never trapped — press F11 again to leave, or use the exit button in the window.

### Customization

Everything is configurable from the main window:

- Language (31 supported — see Language Support)
- Window opacity
- Always on top
- Auto-save
- Performance Mode
- Stage background color
- Grid background toggle
- Light or Dark theme

### Performance

PTube is designed to stay lightweight:

- Low RAM usage — well under 100 MB during normal use.
- Smooth 60 FPS animation.
- RAM and FPS displayed in the footer so you can monitor performance.
- Clean RAM button available to free up memory if needed.
- Performance Mode can be enabled to further reduce resource usage.

---

## How It Works

1. **Choose your PNG avatar.** Upload images for Idle, Speaking, and optionally Blink and Mute. Drag and drop or use the file picker.
2. **Select your microphone.** Pick your device from the dropdown and speak into it to test.
3. **Adjust voice sensitivity.** Use the sensitivity slider so your avatar reacts when you want it to.
4. **Customize movement.** Pick animation presets and adjust speed, height, and scale.
5. **Start streaming.** Or just enjoy your animated avatar on your desktop.

---

## First Time Using PTube

When you open PTube for the first time, you will see the main stage — this is where your avatar appears. On the right side is the control panel with five tabs:

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
- **Stream Mode** — a full-screen transparent mode for use with OBS and streaming software.

---

## Avatar States

| State | Required | What it does |
|---|---|---|
| Idle | Yes | Shown when you are silent. Your avatar's resting face. |
| Speaking | Yes | Shown when PTube detects your voice. |
| Blink | No | Adds blinking animation if an image is uploaded. |
| Mute | No | Shown when you manually mute your microphone. |

If optional states are not configured, PTube simply does not use them. The avatar stays on the current required state.

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

**If your avatar is not reacting:**

- Speak louder or lower the sensitivity threshold.
- Check that the microphone is not muted in PTube (use the MUTE MIC button).
- Ensure PTube has microphone permission on your system.

**If your avatar is too sensitive:**

- Raise the Voice Sensitivity threshold so quieter sounds are ignored.
- Use the Silence Filter (Noise Gate) in Advanced Audio Settings to ignore background hums and noise.

Advanced settings like noise suppression, microphone boost, and attack/release speed are available under **Advanced Audio Settings**. You can leave these at their defaults unless you want to fine-tune things.

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

Stream Mode makes PTube work with OBS, VMix, or any streaming software that can capture a window or use a transparent overlay.

**What it does:**

- Hides the PTube interface completely.
- Makes the background transparent (checkerboard pattern) or applies a green-screen, blue-screen, or magenta-screen color.
- You can also pick a custom background color.

**How to enter:** Press **F11** or click the Stream Mode button in the status bar.

**How to exit:** Press **F11** again. The exit button is also visible in the top-right corner of the window while in Stream Mode. You can always press F11 to leave — you are never stuck.

**Click-Through (Pass Mouse):** While in Stream Mode, you can enable Click-Through so that mouse clicks pass right through the PTube window. Press **F10** to toggle it on or off. If you ever get stuck, just press F10 again.

---

## Performance

PTube is built to be fast and gentle on your hardware.

- Uses very little RAM — typically well under 100 MB.
- Animations run at a smooth 60 FPS.
- Runs fine alongside games, streaming software, and other applications.
- The footer shows live RAM and FPS readings if you want to check performance.
- **Clean RAM** button is available in the footer to free up memory.
- **Performance Mode** can be enabled in Settings to further reduce resource usage.

No specific benchmark numbers are claimed. Performance depends on your hardware, avatar image sizes, and animation settings.

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

PTube supports **31 languages**. The interface language can be changed instantly in Settings — no restart needed.

Supported languages include:

English, Indonesian, Arabic, Czech, Danish, German, Greek, Spanish, Finnish, French, Hebrew, Hindi, Hungarian, Italian, Japanese, Korean, Malay, Dutch, Norwegian, Polish, Portuguese, Romanian, Russian, Swedish, Thai, Filipino, Turkish, Ukrainian, Vietnamese, Chinese (Simplified), Chinese (Traditional).

If a translation is not available for your language, PTube automatically falls back to English.

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| **F11** | Toggle Stream Mode |
| **F10** | Toggle Click-Through / Pass Mouse |
| **Ctrl + M** | Toggle Mute Microphone |
| **Ctrl + Alt + H** | Hide or Show PTube window |
| **Ctrl + Numpad 1–9** | Switch between profiles |

These shortcuts can be customized in the Hotkeys tab of the control panel.

---

## Troubleshooting

### My microphone is not detected

- Check that your microphone is plugged in and powered on.
- Make sure no other application is exclusively using the microphone.
- Try selecting a different device from the microphone dropdown.
- Check your system's microphone permissions for PTube.

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
- Use the Silence Filter (Noise Gate) in Advanced Audio Settings to block background noise.
- Adjust the microphone boost if needed.

### The avatar looks stuck or frozen

- Try the Clean RAM button in the footer.
- Enable Performance Mode in Settings.
- Restart PTube if needed.

### Stream Mode confused me

- Press **F11** to exit Stream Mode.
- Press **F10** if Click-Through is blocking your mouse.
- The exit button is always visible in the window while in Stream Mode.

---

## FAQ

**Is PTube free?**

PTube is a proprietary application. See the License section below for details.

**What operating systems are supported?**

PTube runs on Windows 10 and Windows 11 (64-bit).

**Do I need a webcam?**

No. PTube uses only a microphone. No camera is required.

**Do I need a VTuber model?**

You need PNG images for your avatar. PNG, GIF, WebP, and SVG formats are supported.

**Can I use my own PNG?**

Yes. Upload any PNG (or GIF/SVG where supported) as your avatar images.

**Do I need OBS?**

No. PTube works on its own as a desktop avatar application. OBS is only needed if you want to stream your avatar to an audience.

**Is PTube suitable for low-end PCs?**

Yes. PTube is designed to use minimal RAM and CPU. It runs comfortably on low-end hardware.

**Can I use multiple avatar profiles?**

Yes. Create as many profiles as you like and switch between them instantly.

**Can I change expressions?**

Yes. Upload different images for Idle, Speaking, Blink, and Mute states to create expressive avatars.

**Does PTube work with a microphone?**

Yes. A microphone is required for the voice-reactive features. Any standard microphone works.

**Can I stream with it?**

Yes. Use Stream Mode and Click-Through to integrate PTube with OBS or other streaming software.

---

## What PTube Does Not Do

PTube is intentionally focused on audio-driven PNGTubing. It does not:

- Support webcam or AI face tracking
- Render video avatars
- Process GIF files
- Support multiplayer or networked avatars
- Include complex OBS networking integrations
- Support VST audio plugins
- Use cloud services
- Run unnecessary background services

These features are outside PTube's core purpose. PTube is not trying to do everything. It is trying to make PNGTubing easy.

---

## Privacy & Data

All your data stays on your computer:

- Settings are saved locally in your user data folder.
- Avatar images are stored as files in your user data directory.
- No data is sent online. There is no telemetry or analytics.
- Your profile exports are entirely local — `.ptube` files contain only your own data.

PTube accesses only your microphone. It does not access your camera, contacts, files, or any other system resources.

---

## Download

Download the latest Windows release from **[GitHub Releases](https://github.com/RzkyyDev/PTube/releases)**.

Choose either the installer or the portable version. No installation commands are needed — just download, run, and start using PTube.

---

## Visuals

No screenshots are included yet. Launch PTube to see the interface — it is designed to be immediately understandable without any explanation.

---

## Roadmap

PTube v4.0 is the current major version, focused on polish, stability, and simplicity.

- **Current** — v4.0: Reactive avatar, profiles, animations, Stream Mode, 31 languages, lightweight performance.
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

- GitHub: [https://github.com/RzkyyDev](https://github.com/RzkyyDev)
- Project: [https://github.com/RzkyyDev/PTube](https://github.com/RzkyyDev/PTube)
