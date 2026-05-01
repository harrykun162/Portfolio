# Data Analyst Portfolio

This repository contains a static multi-page portfolio designed for GitHub Pages. It is aimed at data analyst and data scientist roles, with sections for your value proposition, projects, resume summary, and contact details.

## Included pages

- `index.html`: homepage and featured work
- `projects.html`: portfolio case studies
- `resume.html`: resume summary and experience snapshot
- `contact.html`: recruiter-friendly contact page

## How to edit in Visual Studio Code

1. Open this folder in VS Code.
2. Update placeholder text such as `Your Name`, email address, LinkedIn URL, and GitHub URL.
3. Replace the sample project summaries with your real work.
4. If you have screenshots, add them under `assets/` and place them into the project sections.
5. If you want a downloadable resume, add your PDF to the repository and update the button on `resume.html`.

## Suggested customization order

1. Update your headline on `index.html`.
2. Replace all project cards in `projects.html` with your best 3-6 case studies.
3. Add your real contact details on `contact.html`.
4. Refine colors, spacing, and copy in `assets/css/style.css`.
5. Add screenshots or dashboard previews for stronger visual credibility.

## Preview locally in VS Code

The simplest option is the `Live Server` extension.

1. Install `Live Server` in VS Code.
2. Open `index.html`.
3. Choose `Open with Live Server`.

If you do not want an extension, you can also use the VS Code preview or any lightweight local server.

## Publish with GitHub Pages

### Option 1: personal site

Create a repository named `<your-github-username>.github.io` and place this project there.

Your live URL will be:

`https://<your-github-username>.github.io/`

### Option 2: project site

Keep this repository name as something like `portfolio`.

Your live URL will be:

`https://<your-github-username>.github.io/portfolio/`

### Deployment steps

1. Initialize git in this folder:

   ```powershell
   git init
   ```

2. Add files and commit:

   ```powershell
   git add .
   git commit -m "Initial portfolio site"
   ```

3. Create a GitHub repository and connect it:

   ```powershell
   git remote add origin https://github.com/<your-github-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

4. In GitHub, open `Settings > Pages`.
5. Under `Build and deployment`, choose `Deploy from a branch`.
6. Select the `main` branch and `/ (root)`.
7. Save and wait for the site to publish.

## What makes this portfolio stronger

- Focus each project on a business problem and a measurable outcome.
- Keep tool lists short and relevant.
- Use screenshots from real dashboards, notebooks, or reports.
- Prioritize clarity over buzzwords.
- Highlight SQL, Python, BI, experimentation, forecasting, or stakeholder communication where they are genuine strengths.

## Quick replacement checklist

- `Your Name`
- `your.email@example.com`
- `linkedin.com/in/your-profile`
- `github.com/your-username`
- sample projects and placeholder summaries

## File structure

```text
Portfolio/
|-- index.html
|-- projects.html
|-- resume.html
|-- contact.html
`-- assets/
    |-- css/
    |   `-- style.css
    `-- js/
        `-- script.js
```
