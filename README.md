# Preston University Past Papers — Owner's Handbook

A **100% free-of-cost** past-papers website for Preston University students.
The PDFs live on **Google Drive** (free, 15 GB), the website is hosted on
**GitHub Pages** (free, lifetime), and being found on **Google is free** too.

**How it works:** the website shows 6 program tiles —
`BBA · BBA (IT) · BBA (E) · BBA (IT) Eve · BSCS · BSCS (E)` —
each one opens its Google Drive folder, where students browse every
subject and paper.

---

## What's in this folder (upload ALL of these files)

| File | What it does |
|---|---|
| `index.html` | The website itself |
| `style.css`  | The design |
| `app.js`     | Renders the 6 program folder tiles |
| `papers.js`  | **The 6 Drive folder links — the only file you edit (one time)** |
| `logo.svg`   | The "PU" favicon |
| `sitemap.xml` | Helps Google discover the site |
| `robots.txt`  | Tells search engines they may crawl |
| `README.md`  | This guide |

You can test it locally right now: just **double-click `index.html`** —
the 6 tiles show up immediately (marked "Link not added yet" until you
paste your Drive links). No server needed.

---

## STEP 1 — Organise & share the papers on Google Drive (free)

1. In your Drive, keep this structure (that's what you already have):

   ```
   Past Papers/
     ├─ BBA/
     ├─ BBA (IT)/
     ├─ BBA (E)/
     ├─ BBA (IT) Eve/
     ├─ BSCS/
     └─ BSCS (E)/
   ```
   Inside each program folder, keep **one sub-folder per subject**,
   e.g. `BSCS / Data Structures & Algorithms / 2025 Fall Final.pdf`.
   Clear subject names and clear file names (`2025 Fall Final.pdf`)
   are what students judge you on.

2. **Sharing — once, forever:** right-click ONLY the top folder
   `Past Papers` → **Share** → set **General access → "Anyone with
   the link" → Viewer**. Permission flows down to every sub-folder
   automatically. You never touch sharing again.

3. **Get the links:** right-click each program folder
   (BBA, BBA (IT), …) → **Share → Copy link**. A link looks like:

   ```
   https://drive.google.com/drive/folders/1AbCdEfGhIjKlMnOp
   ```

   Do this 6 times — one link per program folder.

---

## STEP 2 — Put the folder links into the website (2 minutes)

On [github.com](https://github.com) (after the repo exists — Step 3 below):

1. Open your repo → click **papers.js**
2. Click the pencil ✏ icon
3. Replace every `PASTE-DRIVE-FOLDER-LINK-HERE` with the real folder
   links, one per program.
   ⚠️ Trick: at first sight all six Drive folders give links like
   `folders/1AbCd…` — nothing tells you *which* one is BBA. Open each
   folder in a browser tab and read its name at the top, then paste the
   matching link on the right line.
4. Press the green **Commit changes** button.

That's it — the routine after this is: **new papers = just upload the
PDFs into the right Drive folder. The website updates itself (nothing to
edit, ever again).**

---

## STEP 3 — Put the website online (GitHub Pages, free forever)

1. Create a free account at [github.com](https://github.com).
   Think about the name: it becomes your web address, e.g.
   `https://YOUR-USERNAME.github.io/preston-past-papers/`
2. Click the **+** (top-right) → **New repository**.
   - Repository name: `preston-past-papers`
   - Visibility: **Public** (required for free Pages)
   - Click **Create repository**.
3. Fix the username placeholders first: open these 3 files in this folder
   (any text editor) and replace `YOUR-USERNAME` with your GitHub username:
   - `index.html` — 3 places
   - `sitemap.xml` — 1 place
   - `robots.txt` — 1 place
4. Click **"uploading an existing file"** → drag **all** the files from
   this folder → press **Commit changes**.
5. Go to **Settings → Pages** → under *Build and deployment* set
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/(root)** → **Save**
6. Wait 1–3 minutes, reload the page — a green box shows your live
   address, e.g. `https://YOUR-USERNAME.github.io/preston-past-papers/`
   That's your website: **free, HTTPS, permanent.**

> 💡 Order tip: if you already have your GitHub username, paste the 6
> Drive links into `papers.js` (Step 2) *before* uploading the files.

---

## STEP 4 — Get found on Google (free) 🔍

1. Open **[Google Search Console](https://search.google.com/search-console)**
   (free, just needs a Google account) → **Add property → URL prefix** →
   paste your site address.
2. Choose the **HTML tag** verification method → Google gives you a line
   like `<meta name="google-site-verification" content="XXXX" />`
   → On GitHub open `index.html` → pencil ✏ → find the comment that says
   *Google Search Console* and paste the line there → Commit →
   back in Google press **Verify**.
3. In the left menu → **Sitemaps** → type `sitemap.xml` → **Submit**.
4. Search box at the top → paste your homepage URL → **Request indexing**.
5. **Optional but smart:** [Bing Webmaster Tools](https://www.bing.com/webmasters)
   → *"Import from Google Search Console"* → covers Bing, Yahoo and DuckDuckGo.

Expected results: searches for the exact name **"preston university past
papers"** start working within days; broader searches take a few weeks.

**Fastest traffic boost (do this):** post the link in your university
WhatsApp / Facebook / Telegram student groups. Students search the exact
name you chose, so mentions + visits push it up the rankings.

---

## The honest truth about the "domain" 🌐

- Your address `YOUR-USERNAME.github.io/preston-past-papers` is **free
  forever** and **Google lists .github.io sites normally** — a subdomain
  is *not* a disadvantage. Students find you by searching, not by typing.
- Truly custom domains (`.com`, `.pk`…) cost money — there are no free
  ones any more (the old free service Freenom shut down).
- **But**: if you have a university student email, the
  [GitHub Student Developer Pack](https://education.github.com/pack) gives a
  free `.me` domain for 1 year (Namecheap) plus other perks. Optional, later.
- If you ever buy one, attaching it is 2 clicks: **Settings → Pages →
  Custom domain**. Not needed now.

---

## Costs — everything, forever

| Thing | Tool | Cost |
|---|---|---|
| File storage | Google Drive (15 GB) | Free |
| Website hosting | GitHub Pages | Free |
| SSL (https padlock) | GitHub | Free |
| Google listing | Search Console | Free |
| Bing/Yahoo/DuckDuckGo listing | Bing Webmaster | Free |
| SEO keyword work | Built-in titles/description/sitemap | Included |
| **Total** | | **$0** |

---

## FAQ

**A tile says "Link not added yet".** That program's `url` in `papers.js`
is still the placeholder — paste the real folder link and Commit.

**The folder won't open for students ("Access denied").** Sharing isn't
public. Right-click the top `Past Papers` folder → *Anyone with the
link → Viewer*.

**Adding new papers?** Drop the PDFs into the right subject folder on
Drive. Done — the website doesn't change (that's the beauty of this setup).

**University complaint?** The footer already labels the site an
*unofficial student archive, not affiliated with Preston University*.
If the university ever objects, remove the offending PDFs from your
Drive — the site only links to what Drive contains.

**How do I back everything up?** Your GitHub repo is the backup of the
site; the Drive folder is the backup of the papers. Done. 🎓
