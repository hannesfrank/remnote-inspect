# RemNote-Schedule

Inspect the current Rem.

## Installation

Add this URL to your [RemNote plugins](https://www.remnote.io/plugins):

- **Plugin Name:** `inspect` (or anything you like)
- **Plugin Description:** `Inspect current Rem` (or anything you like)
- **Plugin URL:** `https://hannesfrank.github.io/remnote-inspect/index.html`
- **CSS Height:** `600px`
- **CSS Width:** `600px`
- **Permissions:** `Read`
- **Shortcut:** (anything you like)
- **Location:** `Popup`

## Usage

- Press the shortcut in any Rem.
- You can click on labels to fold them.
- Use `Esc` to exit.

The Objects are also printed to the `console`.

## Development

Add a plugin `inspect-dev` with the above settings.

```
http://localhost:1234/
```

Run the plugin locally:

```
yarn dev
```

### Deployment

```sh
git checkout gh-pages
rm -r docs
yarn build
git add docs
git commit -m "Release"
git push origin gh-pages
```

- [ ] Make github action
