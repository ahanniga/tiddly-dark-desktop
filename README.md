# Tiddly-dark-desktop
An Electron wrapper around [tiddly-dark](https://github.com/ahanniga/tiddly-dark)

![Screenshot](https://github.com/ahanniga/tiddly-dark-desktop/blob/main/resources/tiddly-dark-desktop-sshot.png?raw=true)

## What it Provides

Tiddly-dark-desktop is an all-in-one application that runs [Tiddlywiki Server Edition](https://tiddlywiki.com/#Installing%20TiddlyWiki%20on%20Node.js) with some pre-installed plugins focussed on programmers notes.
Binaries available for Windows, Mac and Linux.

## Installation

1. Download a binary suitable for your OS from the [releases](https://github.com/ahanniga/tiddly-dark-desktop/releases/) page.
2. Unzip the file into a directory
3. Run the executable
4. On first run the default Tiddlers are copied to the user home directory under `~/.tiddly-dark`

## Upgrading from versions 0.0.1 and 0.0.2

From version `0.0.3` additional plugins no longer in the `tiddlers` directory. A good strategy would be to:

- Rename your `~/.tiddly-dark` directory to `~/tiddly-dark.backup`
- Open the application to recreate `~/.tiddly-dark` 
- Copy your content tiddlers from `~/tiddly-dark.backup/tiddlers` into `~/.tiddly-dark/tiddlers`. Tiddlers with paths containing `$__../plugin/..` need not be copied in
- Copy files from `~/tiddly-dark.backup/files` into `~/.tiddly-dark/files`

## Why the Server Edition?

While the traditional single-file version of Tiddlywiki is self-contained and does not require a server component, there are also benefits running under Node:

- The server edition is well suited to large wikis or those needing to scale to [many] thousands of notes and images
- Images are served similar a browser, rather than held perminantly in memory
- Notes (tiddlers) are stored as separate files
- Scope to read/create/delete tiddlers from other sources using REST

## Can I Host the Wiki Elsewhere?

Yes, copy the `~/.tiddly-dark` directory to your server. Assuming tiddlywiki is installed you can launch it with `tiddlywiki ~/.tiddly-dark --listen <other-options>` as normal.

## Can I Still Open It in a Browser
Yes, while the desktop app is running the wiki can still be accessed from http://localhost:23981 and tiddlers will sync between the two. 
