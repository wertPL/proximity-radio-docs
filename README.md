# Proximity Radio Documentation

Public documentation for Proximity Radio Free and Pro.

## Local preview

```powershell
py -3 -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
```

Open `http://127.0.0.1:8000`.

## Deployment

Every push to `main` builds and publishes the documentation through GitHub Pages. In the GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

