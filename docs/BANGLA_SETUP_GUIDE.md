# BashaMate: VS Code, GitHub ও GitHub Pages সেটআপ গাইড

এই গাইডটি একদম শুরু থেকে অনুসরণ করুন। কোনো ধাপে error এলে থামুন, error-এর screenshot নিন এবং আমাকে পাঠান। Error ঠিক না হওয়া পর্যন্ত পরের ধাপে যাবেন না।

## ধাপ ১: ZIP ফাইল Extract করুন

`BashaMate_Source_Code.zip` ফাইলটির উপর right-click করুন এবং **Extract All** অথবা **Extract Here** নির্বাচন করুন। Extract হওয়ার পরে একটি `BashaMate` বা অনুরূপ project folder পাবেন। এই folder-টিকে Documents ফোল্ডারে রাখলে খুঁজে পাওয়া সহজ হবে।

> ZIP ফাইলের ভিতর থেকে সরাসরি VS Code-এ কাজ করবেন না। আগে অবশ্যই extract করতে হবে।

## ধাপ ২: প্রয়োজনীয় সফটওয়্যার ইনস্টল করুন

আপনার কম্পিউটারে নিচের তিনটি জিনিস লাগবে।

| সফটওয়্যার | কেন লাগবে |
|---|---|
| [Visual Studio Code](https://code.visualstudio.com/) | কোড খোলা ও পরিবর্তনের জন্য |
| [Node.js LTS](https://nodejs.org/) | React/Vite project চালানোর জন্য |
| [Git](https://git-scm.com/downloads) | GitHub-এ কোড আপলোড করার জন্য |

Node.js install করার পরে VS Code খুলুন। তারপর উপরের menu থেকে **Terminal → New Terminal** নির্বাচন করুন এবং লিখুন:

```bash
node --version
```

একটি version number, যেমন `v22...`, দেখালে Node.js ঠিকভাবে install হয়েছে। এরপর লিখুন:

```bash
corepack enable
pnpm --version
```

এখানেও version number দেখালে সব ঠিক আছে।

## ধাপ ৩: VS Code-এ Project খুলুন

VS Code-এ **File → Open Folder** নির্বাচন করুন। তারপর আপনি যে BashaMate project folder extract করেছেন সেটি নির্বাচন করুন। Folder খুলে গেলে নিচের Terminal command-গুলো এক এক করে চালান:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

প্রথম command-এ প্রয়োজনীয় packages install হবে। দ্বিতীয় command চালালে নিচের মতো একটি link দেখাবে:

```text
http://localhost:3000/
```

Ctrl চেপে link-এ click করুন অথবা link-টি browser-এ paste করুন। BashaMate website দেখা গেলে local project সফলভাবে চলছে।

## ধাপ ৪: Project পরীক্ষা করুন

Website চালু থাকা অবস্থায় VS Code terminal-এ `Ctrl + C` চাপ দিয়ে local server বন্ধ করতে পারেন। তারপর এই দুটি command চালান:

```bash
pnpm check
pnpm build
```

দুটি command error ছাড়া শেষ হলে আপনার project GitHub-এ দেওয়ার জন্য প্রস্তুত।

## ধাপ ৫: GitHub-এ নতুন Repository তৈরি করুন

1. [github.com](https://github.com/) এ login করুন।
2. উপরে ডানদিকে **+** চিহ্নে click করে **New repository** নির্বাচন করুন।
3. Repository name দিন: `bashamate`।
4. **Public** নির্বাচন করুন।
5. README, `.gitignore`, অথবা license add করবেন না, কারণ project-এ এগুলো আগে থেকেই আছে।
6. **Create repository** এ click করুন।

Repository তৈরি হওয়ার পরে GitHub একটি URL দেখাবে। URL-টি এই ধরনের হবে:

```text
https://github.com/YOUR-USERNAME/bashamate.git
```

`YOUR-USERNAME` জায়গায় আপনার নিজের GitHub username থাকবে।

## ধাপ ৬: VS Code থেকে GitHub-এ Code Upload করুন

VS Code-এ BashaMate folder খোলা আছে কিনা নিশ্চিত করুন। Terminal-এ নিচের command-গুলো এক এক করে চালান। `YOUR-USERNAME`-এর জায়গায় আপনার GitHub username লিখবেন।

```bash
git init
git add .
git commit -m "Initial BashaMate frontend project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bashamate.git
git push -u origin main
```

প্রথমবার Git ব্যবহার করলে নাম ও email চাইতে পারে। নিচের command-এ নিজের email দিন:

```bash
git config --global user.name "Faisal Mahmud"
git config --global user.email "your-email@example.com"
```

তারপর আবার ধাপ ৬-এর command চালান। GitHub login চাইলে browser window-তে login complete করুন। Password বা token কাউকে পাঠাবেন না।

## ধাপ ৭: GitHub Pages Deploy চালু করুন

Project-এ GitHub Pages-এর workflow আগে থেকেই দেওয়া আছে। GitHub repository-তে যান এবং নিচের কাজগুলো করুন:

1. Repository-এর **Settings** tab-এ যান।
2. বাম পাশ থেকে **Pages** নির্বাচন করুন।
3. **Build and deployment** অংশে **Source** হিসেবে **GitHub Actions** নির্বাচন করুন।
4. এরপর repository-এর **Actions** tab-এ যান।
5. **Deploy BashaMate to GitHub Pages** workflow-টি খুলুন।
6. `build` এবং `deploy` job-এর পাশে সবুজ check mark আসা পর্যন্ত অপেক্ষা করুন।
7. আবার **Settings → Pages** এ যান। সেখানে আপনার live website link দেখা যাবে।

সাধারণত link এমন হবে:

```text
https://YOUR-USERNAME.github.io/bashamate/
```

প্রথমবার deploy হতে কয়েক মিনিট লাগতে পারে।

## ধাপ ৮: ভবিষ্যতে কোড পরিবর্তন করলে

কোড পরিবর্তনের পর আগে এই দুটি command চালান:

```bash
pnpm check
pnpm build
```

কোনো error না থাকলে GitHub-এ upload করুন:

```bash
git add .
git commit -m "Describe your change here"
git push
```

নতুন code GitHub-এ push হওয়ার পরে GitHub Actions আপনার website আবার deploy করে দেবে।

## জরুরি কথা

BashaMate একটি frontend-only course project। Register, login, saved listing এবং automatic chat reply browser-এ কাজ করে। একটি real production website-এর জন্য server-side authentication, database, secure user data, এবং real-time messaging যোগ করতে হবে।

## Error হলে কী পাঠাবেন

নিচের যেকোনো সমস্যা হলে screenshot পাঠান:

| সমস্যা | কী পাঠাবেন |
|---|---|
| `pnpm install` error | পুরো terminal screenshot |
| `pnpm dev` error | terminal-এর প্রথম লাল error line |
| `git push` error | পুরো Git error message |
| GitHub Actions fail | Actions page-এর failed job screenshot |
| Website live link-এ না চলা | Pages settings এবং live link-এর screenshot |
