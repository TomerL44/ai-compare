# 🚀 Git Workflow & Deployment Procedure

This document outlines the strict flow to be followed by the AI coding assistant (**Antigravity**) for all features, fixes, or updates implemented in the **AI Compare** codebase.

---

## 📌 Strict Rule for Committing & Pushing

### **Rule:** "Always ask for explicit approval before pushing to GitHub."

### **The Step-by-Step Procedure:**
1. **Develop and Local-Test:** Implement the feature or fix and verify that type-checks and production builds (`npm run build`) compile with **zero errors**.
2. **Show the Changes:** Present the summary of modified files and specific diff/version highlights to the user.
3. **Wait for Approval:** Present a clear prompt asking the user for permission to stage, commit, and push.
4. **Push:** Only after the user responds with explicit approval (e.g., *"Proceed"*, *"Yes"*, *"Approve"*), stage the changes, commit them with a descriptive message, and execute `git push origin main` to deploy live.

---

## 🛠️ Deployment Pipeline Reference
- **GitHub Repository:** `TomerL44/ai-compare`
- **Branch:** `main`
- **Live Deployment Platform:** **Vercel** (automatically triggers a build and deploys live on every push to `main`).
