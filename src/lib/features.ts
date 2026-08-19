import { site } from "./site";

/**
 * All copy below is derived from the shipping app, not aspiration:
 * ../HomeRun/config/default_config.toml is the canonical keybinding source.
 */

export type Shortcut = {
  keys: string[];
  label: string;
};

export type Feature = {
  /** Matches a key in `assets.features`. */
  id: string;
  number: string;
  title: string;
  subtitle: string;
  body: string;
  shortcuts: Shortcut[];
};

export const features: Feature[] = [
  {
    id: "navigation",
    number: "01",
    title: "Home-row navigation",
    subtitle: "Your hands never move",
    body: "Move through directories with the same four keys you already use in Vim. Left goes up a level, right goes in, up and down walk the list. Open anything in its default app without reaching for the trackpad.",
    shortcuts: [
      { keys: ["h"], label: "Parent directory" },
      { keys: ["j"], label: "Next item" },
      { keys: ["k"], label: "Previous item" },
      { keys: ["l"], label: "Enter directory" },
      { keys: ["Enter"], label: "Open in default app" },
      { keys: ["/"], label: "Focus search" },
    ],
  },
  {
    id: "jump",
    number: "02",
    title: "Jump anywhere",
    subtitle: "Two keystrokes to any corner of your disk",
    body: "Press g followed by a single key to land in a directory you configured. Everywhere else, frecency sorting quietly pushes the folders you actually use to the top — the same frequency-plus-recency ranking your shell autojump uses, kept in a local JSON file.",
    shortcuts: [
      { keys: ["g", "h"], label: "Home" },
      { keys: ["g", "w"], label: "Downloads" },
      { keys: ["g", "d"], label: "Documents" },
      { keys: ["g", "c"], label: "~/.config" },
    ],
  },
  {
    id: "find",
    number: "03",
    title: "Find, don't browse",
    subtitle: "Fuzzy matching over your whole home directory",
    body: "Filter the current directory as you type, or open a global fuzzy finder powered by the same matching engine that drives modern Rust pickers. History and favorites are a keystroke away, and cloud drives appear in favorites only while they are actually mounted.",
    shortcuts: [
      { keys: ["⌘", "F"], label: "Filter this directory" },
      { keys: ["⌘", "⇧", "F"], label: "Global fuzzy finder" },
      { keys: ["⌘", "Y"], label: "History" },
      { keys: ["⌘", "G"], label: "Favorites" },
    ],
  },
  {
    id: "preview",
    number: "04",
    title: "See without leaving",
    subtitle: "Preview, columns, thumbnails",
    body: "Quick Look any file with the space bar, exactly as you would in Finder. Flip to a thumbnail grid for photos, or use the Miller column view to hold three levels of hierarchy in view at once. Lists are virtualized, so a directory with fifty thousand files scrolls like an empty one.",
    shortcuts: [
      { keys: ["Space"], label: "Quick Look" },
      { keys: ["Tab"], label: "Toggle grid view" },
      { keys: ["⌘", "P"], label: "Copy path" },
    ],
  },
  {
    id: "fileops",
    number: "05",
    title: "Do the work in place",
    subtitle: "Copy, move, rename, create, drag out",
    body: "Every file operation is a shortcut. Copies run in the background with progress and conflict resolution. New files and folders are created inline, in the list, with the name field already focused. And you can still drag a selection straight out into any other app when that is genuinely faster.",
    shortcuts: [
      { keys: ["⌘", "C"], label: "Copy" },
      { keys: ["⌘", "X"], label: "Cut" },
      { keys: ["⌘", "V"], label: "Paste" },
      { keys: ["⌘", "R"], label: "Rename" },
      { keys: ["⌘", "⌫"], label: "Move to Trash" },
      { keys: ["⌘", "N"], label: "New file" },
      { keys: ["⌘", "⇧", "N"], label: "New folder" },
    ],
  },
];

export type Action = {
  name: string;
  description: string;
};

/** The scripts bundled in ../HomeRun/actions/. */
export const bundledActions: Action[] = [
  { name: "compress_to_zip.sh", description: "Zip the selection" },
  { name: "open_with_vscode.sh", description: "Open in VS Code" },
  { name: "convert_heic_to_png.sh", description: "Convert HEIC to PNG" },
  { name: "make_executable.sh", description: "chmod +x" },
  { name: "copy_path_to_clipboard.sh", description: "Copy absolute path" },
  { name: "reveal_in_finder.sh", description: "Reveal in Finder" },
];

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "Does HomeRun replace Finder?",
    a: "It replaces the part of Finder you spend the most time in: moving around and acting on files. Finder stays on your Mac and keeps doing what it is good at — the desktop, disk mounting, sharing sheets. HomeRun is the window you open when you know where you are going and want to get there without touching the mouse.",
  },
  {
    q: "Do I need to know Vim?",
    a: "No. If you do, the muscle memory carries over on day one. If you do not, the four navigation keys are the only thing you have to learn, and every other shortcut mirrors the macOS convention you already use — ⌘C, ⌘V, ⌘R, space for Quick Look.",
  },
  {
    q: "Can I change the keybindings?",
    a: "All of them. Keybindings, jump targets, favorites, per-directory sort order, folder colors, and which terminal ⌘T opens all live in a single readable TOML file at ~/.config/HomeRun/config.toml.",
  },
  {
    q: "Why isn't it on the Mac App Store?",
    a: "Selling directly means no 30% cut and no sandbox restrictions on a tool whose entire job is reaching across your file system. The app is signed with an Apple Developer ID and notarized by Apple, so it opens without warnings, and updates are delivered in-app.",
  },
  {
    q: "How does the license work?",
    a: `One payment, ${site.price.display}, no subscription. Your license key activates up to ${site.activationLimit} Macs, and you can deactivate a machine yourself from the customer portal when you replace it. Updates are included.`,
  },
  {
    q: "Does it work offline?",
    a: "Yes. The license is checked periodically when you happen to be online, and keeps working for 30 days without any connection at all. A flight, a train, or a week off the grid will not lock you out of your own file browser.",
  },
  {
    q: "Which Macs are supported?",
    a: "macOS 12 Monterey and later, on both Apple Silicon and Intel. The download is a universal binary.",
  },
  {
    q: "Can I try it first?",
    a: `Yes — ${site.trialDays} days, no credit card, no account. Download the DMG and start using it.`,
  },
  {
    q: "Is this about baseball?",
    a: "No. The name is about the home row — the keys your fingers rest on. HomeRun is a file browser for macOS. No bats involved.",
  },
];
