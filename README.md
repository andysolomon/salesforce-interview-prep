# Salesforce Interview Prep — Study Library

Static HTML transcriptions of Salesforce Training & Certification Preparation slide decks, organized by module → topic, each with a sidebar TOC, live filter, and quick-reference cheatsheet.

## Modules

- **Testing, Debugging, and Deployment** — 4 topics
  - Apex testing, mocks & stubs (87 slides)
  - LWC / Aura / Visualforce + JavaScript (67 slides)
  - Apex root-cause analysis (98 slides)
  - Source-driven deployment (85 slides)
- **Advanced Developer Fundamentals** — 3 topics
  - Localization & multi-currency (31 slides)
  - Custom metadata & custom settings (55 slides)
  - Sharing objects & Apex managed sharing (34 slides)

## Structure

```
study/
├── index.html                          ← root: module list
├── <module-slug>/
│   ├── index.html                      ← module: topic list
│   └── topics/
│       └── <topic-slug>/
│           ├── index.html              ← topic content
│           └── slides.pdf              ← original deck
```

Each topic page is self-contained (single HTML file, inline CSS + JS, no build step). The original captured PDF is linked from the top of the page.
