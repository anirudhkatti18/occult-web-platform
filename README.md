# Occult | Engineered Growth Platform

> Visibility without infrastructure is a liability. This repository contains the source code for the Occult digital headquarters—a high-performance, serverless web architecture designed for global scalability.

Live Site: [occult.marketing](https://occult.marketing)

## 🏗 Architecture & Tech Stack

This platform eschews standard agency CMS fluff in favor of a rigorous, systems-level engineering approach:

* **Engine:** [Next.js](https://nextjs.org/) (React Framework)
* **Language:** TypeScript (`.tsx`) for strict type-safety and error prevention.
* **UI/UX Generation:** Google Stitch integrated via Model Context Protocol (MCP) for rapid, AI-assisted design implementation directly into the IDE.
* **Deployment:** GitHub Pages (Continuous Integration/Continuous Deployment pipeline).
* **Routing:** Fully static export (`output: 'export'`) for zero-latency, global CDN delivery.
* **Lead Pipeline:** [Web3Forms](https://web3forms.com/) integrated for serverless, spam-filtered email routing directly to the agency inbox.
* **Telemetry:** Google Analytics 4 (GA4) hardwired for real-time, event-based tracking.

## ⚙️ Standard Operating Procedure (Deployment)

This infrastructure is completely decoupled from manual FTP or cPanel management. The `main` branch is the absolute source of truth. 

To deploy updates to the live site, execute the following standard Git workflow:

1. **Test Locally:** Ensure all UI and routing works on `localhost:3000`.
2. **Stage & Commit:**
   ```bash
   git add .
   git commit -m "Brief description of the update"