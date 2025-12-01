# winwar.ai Deployment Instructions

All files have been prepared and committed locally. Follow these steps to deploy.

## Step 1: Create GitHub Repository

1. Go to: **https://github.com/new**
2. Fill in:
   - Repository name: `winwar-site`
   - Description: "Tenju Solutions website - winwar.ai domain"
   - Visibility: **Public** ✅ (required for free GitHub Pages)
   - ❌ **DO NOT** check any of these:
     - Add a README file
     - Add .gitignore
     - Choose a license
3. Click **"Create repository"**

## Step 2: Push Code to GitHub

Run these commands in your terminal:

```bash
cd /Users/clayskaggs/Desktop/winwar-site

# Add GitHub remote
git remote add origin https://github.com/clayskaggsmagic-ops/winwar-site.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to: **https://github.com/clayskaggsmagic-ops/winwar-site/settings/pages**
2. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: / (root)
3. Click **Save**
4. Wait 1-2 minutes for initial deployment

## Step 4: Add Custom Domain

1. Still on the Pages settings page
2. Under "Custom domain", enter: `winwar.ai`
3. Click **Save**
4. You'll see a warning "DNS check failed" - this is expected, we'll fix it next
5. Leave this page open

## Step 5: Configure DNS on Namecheap

### A. Log In
1. Go to: **https://namecheap.com**
2. Log in with your account
3. Click **Domain List** (left sidebar)
4. Find **winwar.ai** and click **Manage**

### B. Go to Advanced DNS
1. Click the **Advanced DNS** tab
2. You'll see your current DNS records

### C. Add A Records
Click **"Add New Record"** and add these **4 A Records**:

**Record 1:**
- Type: A Record
- Host: @
- Value: 185.199.108.153
- TTL: Automatic

**Record 2:**
- Type: A Record
- Host: @
- Value: 185.199.109.153
- TTL: Automatic

**Record 3:**
- Type: A Record
- Host: @
- Value: 185.199.110.153
- TTL: Automatic

**Record 4:**
- Type: A Record
- Host: @
- Value: 185.199.111.153
- TTL: Automatic

### D. Add CNAME Record
Click **"Add New Record"** again:

- Type: CNAME Record
- Host: www
- Value: clayskaggsmagic-ops.github.io
- TTL: Automatic

### E. Save Changes
1. Click **"Save All Changes"** (green button, usually at bottom)
2. Wait for confirmation message

## Step 6: Wait for DNS Propagation

**Time required: 5-30 minutes**

DNS changes need to propagate globally. During this time:
- winwar.ai may show "Not found" or "404" - this is normal
- GitHub Pages may show "DNS check failed" - this is normal

### Check DNS Status
You can check propagation with:
```bash
nslookup winwar.ai
```

Should eventually show the 4 GitHub Pages IP addresses.

### Or use online tools:
- https://www.whatsmydns.net/#A/winwar.ai
- https://dnschecker.org/#A/winwar.ai

## Step 7: Enable HTTPS (After DNS Propagates)

1. Return to: **https://github.com/clayskaggsmagic-ops/winwar-site/settings/pages**
2. Once DNS is working, you'll see:
   - ✅ "DNS check successful"
   - A checkbox for "Enforce HTTPS" will appear
3. Check **"Enforce HTTPS"**
4. Wait another 1-5 minutes for certificate provisioning

## Step 8: Verify Deployment

Once everything is set up, visit:

**https://winwar.ai**

You should see:
- ✅ Tenju Solutions website
- ✅ White/inverted Tenju logo with glow
- ✅ Navigation: Charter · Team · Contact
- ✅ Team section with Haroon and Clay
- ✅ Working contact form
- ✅ HTTPS green padlock

### Test Checklist:
- [ ] Logo displays correctly (white, animated)
- [ ] Navigation smooth scrolls
- [ ] Charter section shows full essay
- [ ] Team section shows both members
- [ ] Contact form submits successfully
- [ ] Form submissions arrive at clayskaggsmagic@gmail.com
- [ ] Mobile responsive design works
- [ ] HTTPS is enforced

## Troubleshooting

### "Repository not found" when pushing
- Make sure you created the GitHub repository first
- Verify the repository name is exactly `winwar-site`
- Check you're logged into GitHub

### "DNS check failed" in GitHub Pages
- Wait longer (DNS can take up to 30 minutes)
- Verify you added all 4 A records correctly
- Verify you added the CNAME record for www
- Double-check you clicked "Save All Changes" in Namecheap

### Site shows 404 or "Not found"
- Wait for DNS propagation (5-30 minutes)
- Clear your browser cache
- Try in incognito/private window
- Check GitHub Actions for deployment status

### Contact form not working
- Form uses the same Formspree endpoint as tenju.ai (mnnopnwy)
- Submissions go to clayskaggsmagic@gmail.com
- Should work identically to tenju.ai
- Check Formspree dashboard if issues persist

## Summary

**What you've deployed:**
- Exact clone of tenju.ai
- Same "Tenju Solutions" branding
- Same logo, content, styling
- Same contact form (shared Formspree)
- Different domain: winwar.ai

**Both sites are independent:**
- Separate GitHub repositories
- Separate GitHub Pages deployments
- Separate DNS configurations
- Updates to one don't affect the other

**Total deployment time:**
- Active work: ~12 minutes
- Waiting for DNS: 5-30 minutes
- **Total: ~15-40 minutes**

---

## Quick Command Summary

All commands in one block:

```bash
# Already done (files are ready):
cd /Users/clayskaggs/Desktop/winwar-site

# After creating GitHub repo, run:
git remote add origin https://github.com/clayskaggsmagic-ops/winwar-site.git
git branch -M main
git push -u origin main
```

Then complete GitHub Pages setup and DNS configuration via web interfaces.

---

**Questions?** Let me know if you run into any issues!
