# Run BashaMate in VS Code and Deploy It to GitHub Pages

This guide is written for the **BashaMate frontend project**. The application is a Vite + React static website. It does not require a database, API key, or backend server to run its frontend features. Browser-based registration, saved listings, and automatic chat replies use local browser storage.

## 1. Download the complete source code

Open the latest BashaMate project version in the project interface. In the **Code** area, choose **Download as ZIP**. Save the ZIP file to your laptop, for example in your Downloads folder. Extract the ZIP file, then move the extracted folder to a simple location such as `Documents/BashaMate`.

> Do not open the ZIP file directly in VS Code. Extract it first.

## 2. Install the required software

Install the current **Node.js LTS** version and **Visual Studio Code**. Then open a new terminal and verify that Node.js and pnpm are available.

| Check | Command | Expected result |
|---|---|---|
| Node.js | `node --version` | A version number beginning with `v22` or a newer LTS release |
| pnpm | `pnpm --version` | A version number is displayed |

If `pnpm` is not found, run this command once:

```bash
corepack enable
```

## 3. Open and run the project in VS Code

Open VS Code. Select **File → Open Folder**, then choose your extracted `BashaMate` folder. In VS Code, select **Terminal → New Terminal** and run the following commands in order.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

The terminal will display a local address, normally `http://localhost:3000/`. Hold **Ctrl** and click the address, or paste it into your browser. You should see the BashaMate home page.

| Everyday command | What it does |
|---|---|
| `pnpm dev` | Starts the local development server with live updates |
| `pnpm check` | Checks TypeScript for code errors |
| `pnpm build` | Creates the production-ready static website in `dist/public` |

To stop the local website, click the terminal and press **Ctrl + C**.

## 4. Create a GitHub repository and upload the code

Sign in to [GitHub](https://github.com/). Create a new repository named `bashamate` and choose **Public** if you want to use the free GitHub Pages option. Do **not** add a README, `.gitignore`, or license during repository creation because this project already has them.

Copy the repository URL from GitHub. It will look similar to `https://github.com/YOUR-USERNAME/bashamate.git`. Then return to the VS Code terminal and run the commands below. Replace `YOUR-USERNAME` with your GitHub username.

```bash
git init
git add .
git commit -m "Initial BashaMate frontend project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bashamate.git
git push -u origin main
```

If Git asks for your name and email before the commit, run the following once, using your own details.

```bash
git config --global user.name "Faisal Mahmud"
git config --global user.email "your-email@example.com"
```

When GitHub asks you to sign in, use the browser sign-in window or a GitHub personal access token. Never share your token with anyone.

## 5. Enable GitHub Pages deployment

The repository already includes `.github/workflows/deploy-pages.yml`. This file builds the Vite frontend automatically whenever you push changes to the `main` branch.

Open your GitHub repository and follow these steps.

1. Choose **Settings** in the repository menu.
2. In the left sidebar, choose **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Go to the **Actions** tab and open the workflow named **Deploy BashaMate to GitHub Pages**.
5. Wait until both the `build` and `deploy` jobs show a green check mark.
6. Open **Settings → Pages** again. GitHub will display your public URL, normally `https://YOUR-USERNAME.github.io/bashamate/`.

The first deployment can take a few minutes. After that, every push to `main` deploys the newest version automatically.

## 6. Update the project later

Whenever you make changes in VS Code, test them locally first.

```bash
pnpm check
pnpm build
```

If both commands finish successfully, upload the new version to GitHub.

```bash
git add .
git commit -m "Describe your change here"
git push
```

GitHub Actions will deploy the updated website automatically.

## 7. Important notes for your course submission

The project is designed to work locally without a backend. The account, saved-listing, and automatic-reply features are intentionally browser-based demonstrations. If your teacher asks, explain that a production version would replace browser storage with secure server-side authentication, database records, and real-time messaging.

The project uses hash-based navigation (`/#/explore`, `/#/messages`, and so on) so direct links work correctly on GitHub Pages, which does not provide the normal server-side routing fallback used by a full web server.

## Troubleshooting

| Problem | What to do |
|---|---|
| `pnpm` is not recognized | Run `corepack enable`, close the terminal, then open a new terminal. |
| `pnpm install` fails | Confirm that you are inside the BashaMate project folder and use a current Node.js LTS version. |
| GitHub Actions fails | Open the failed job in the **Actions** tab, copy the first red error line, and ask for help with that exact message. |
| Site opens but images are missing | Refresh once. The image component uses public fallback images when managed-preview images are unavailable. |
| A direct GitHub Pages link shows an old version | Wait two to five minutes, then hard-refresh the page with **Ctrl + Shift + R**. |

## Official references

GitHub explains [creating a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories), [GitHub Pages](https://docs.github.com/en/pages), and [deploying with GitHub Actions](https://docs.github.com/en/actions/deployment/deploying-to-your-cloud-provider/deploying-to-github-pages). Vite documents the related [static deployment configuration](https://vite.dev/guide/static-deploy.html).
