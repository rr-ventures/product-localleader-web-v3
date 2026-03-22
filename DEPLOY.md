# Deployment & Rollback Guide

## How It Works

Pushing to `main` automatically triggers a Railway deploy via GitHub Actions.
No local Railway CLI required — everything runs in CI.

```
Local changes → git push origin main → GitHub Actions → Railway Production
```

---

## Initial Setup (One-Time)

### 1. Create a Railway Project

1. Go to [railway.app](https://railway.app) and create a new project
2. Link it to the GitHub repo: `rr-ventures/product-localleader-web`
3. Railway → Project Settings → Tokens → Generate a token

### 2. Add the Token to GitHub

1. GitHub repo → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `RAILWAY_TOKEN`
4. Value: paste the token from Railway

### 3. Update the Site URL

Once Railway assigns a domain, update `site` in `astro.config.mjs`:

```js
site: "https://your-actual-domain.up.railway.app",
```

---

## Day-to-Day Workflow

### Deploy (automatic)

```bash
git add .
git commit -m "your change"
git push origin main
# GitHub Actions picks this up and deploys automatically
```

### Tag a Snapshot Before a Big Change

```bash
git tag v1.2-pre-new-feature
git push origin v1.2-pre-new-feature
```

Tag naming convention: `v{major}.{minor}-{description}`

Examples:
- `v1.0-stable` — initial good state
- `v1.1-pre-hero-redesign` — before changing the hero section
- `v2.0-pricing-overhaul` — after a major section rewrite

---

## Rolling Back

### Via GitHub Actions (recommended)

1. Go to GitHub → Actions → "Rollback to Tag" workflow
2. Click "Run workflow"
3. Enter the tag name (e.g. `v1.0-stable`)
4. Type `ROLLBACK` in the confirm field
5. Click "Run workflow"

Railway will be updated to that exact snapshot within ~2 minutes.

### Via Git (emergency local revert)

If you need to revert the branch itself (not just deploy):

```bash
# See all tags
git tag -l

# Check out a specific tag to inspect it
git checkout v1.0-stable

# Hard revert main to a tag (destructive — only if needed)
git checkout main
git reset --hard v1.0-stable
git push origin main --force
```

---

## Viewing Logs

Railway dashboard → your project → Deployments → click a deployment → Logs

---

## Useful Commands

```bash
# List all tags
git tag -l

# Delete a local tag
git tag -d v1.0-bad

# Delete a remote tag
git push origin --delete v1.0-bad

# See what changed between two tags
git diff v1.0-stable v1.1-pre-redesign --stat
```
