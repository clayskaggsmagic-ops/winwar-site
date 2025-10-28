# Formspree Setup Instructions

The contact form on tenju.ai needs to be connected to Formspree to receive submissions.

## Quick Setup (5 minutes)

### 1. Create Formspree Account
1. Go to https://formspree.io
2. Click "Get Started" or "Sign Up"
3. Sign up with **clayskaggsmagic@gmail.com**
4. Verify your email address

### 2. Create a New Form
1. After logging in, click "+ New Form"
2. Give it a name: "Tenju Solutions Contact Form"
3. Formspree will generate a unique endpoint like:
   ```
   https://formspree.io/f/xzbqkjmd
   ```
4. Copy this URL

### 3. Update index.html
1. Open `index.html`
2. Find line 159:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
   ```
3. Replace `YOUR_FORM_ID` with your actual form ID
4. Example:
   ```html
   <form action="https://formspree.io/f/xzbqkjmd" method="POST" class="contact-form">
   ```

### 4. Push to GitHub
```bash
cd /Users/clayskaggs/Desktop/Website
git add index.html
git commit -m "Connect contact form to Formspree"
git push origin main
```

### 5. Test the Form
1. Wait 1-2 minutes for GitHub Pages to deploy
2. Visit https://tenju.ai
3. Scroll to Contact section
4. Fill out and submit the form
5. Check clayskaggsmagic@gmail.com for the test submission

## Form Settings (Optional)

In your Formspree dashboard, you can configure:

### Email Notifications
- **Send to**: clayskaggsmagic@gmail.com (default)
- **Reply-to**: Uses the email address from the form submission
- **Subject**: Customize the email subject line

### Redirect After Submit
- **Success URL**: Leave blank (shows default "Thanks!" message)
- Or set to: `https://tenju.ai/?submitted=true`

### Spam Protection
- **reCAPTCHA**: Enable if you start getting spam
- **Email verification**: Requires users to verify their email

### Auto-response
- Send automatic "Thanks for contacting us" emails to submitters
- Customize the message

## Free Tier Limits

Formspree free tier includes:
- **50 submissions/month**
- Basic spam filtering
- Email notifications
- Form endpoints

If you exceed 50 submissions/month, upgrade to paid plan or submissions will be held.

## Troubleshooting

### Form not working?
1. Check the form action URL is correct
2. Verify Formspree account is active
3. Check browser console for errors
4. Make sure you've pushed changes to GitHub

### Not receiving emails?
1. Check spam folder
2. Verify email in Formspree settings
3. Confirm form ID is correct
4. Test with a different email address

### Form shows error?
1. Make sure Formspree account is verified
2. Check that form endpoint exists
3. Verify no browser extensions blocking the form

## Current Form Fields

The contact form captures:
- **Name** (required)
- **Email** (required)
- **Message** (required)

All submissions will be sent to: **clayskaggsmagic@gmail.com**

## Next Steps

After setting up Formspree:
1. Test the form thoroughly
2. Consider adding auto-response
3. Monitor submissions in Formspree dashboard
4. Adjust spam settings if needed

---

**Note**: The fallback email link (hello@tenju.ai) will continue to work independently of Formspree.
