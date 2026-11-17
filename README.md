# halvi — Personal Health Dashboard

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/halvi-health-dashboard/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive standalone frontend reconstruction of the uploaded 5.5-second screen recording (720 × 1280, 30 fps).

## Run locally
- Extract the ZIP.
- Open `index.html` in Chrome, Safari or Firefox.
- No build step, package install, API key or backend is required.

Optional local server:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Screens identified in the video
- Brand: **halvi**. Greeting: **Good morning, Noor**.
- Top navigation: Today, Vitals, Records, Visits, Schedule, Medicines, Care team.
- Today: Health score (85/100), resting heart rate, sleep, activity, weekly wellness chart, next visits and today’s doses.
- Vitals: metric list and detailed chart with average, lowest, highest and days-in-range.
- Schedule: weekly calendar, upcoming visits, workouts, checks and reminders.
- Medicines: dose list, on-time adherence (91%), overdue/later states and two-week adherence grid.
- Records: health document list and local upload interaction.
- Visits: appointment list and request form.
- Care team: provider cards and invitation/message dialogs.

## Interactive demo features
- Switch between navigation sections and wellness metrics.
- Toggle weekly chart period; log a reading.
- Switch vital metrics and see updated values.
- Add schedule items, medicines, health records and visit requests.
- Mark medicine doses as taken.
- Invite or message a care-team member.
- Responsive layout for desktop and mobile.

## Code visible in the recording
The lower code panel is titled `src/ui/charts.tsx` and displays a 16-line `Dial` component. The visible code has been transcribed as closely as possible into `src/ui/charts.tsx`. It includes:
- `Dial({ value, max = 100, size = 230, ticks = 56 })`
- Radius calculations `R`, `r1`, `r0`
- 300-degree sweep from `-240` degrees
- Radial tick coordinate generation with `Array.from`
- `useLayoutEffect`, clamped target calculation and `Math.round`
- GSAP tween duration `1.6` and easing `power3.out`
- `schedule(paint)` update callback

The video does not show the imports or definitions for `useLayoutEffect`, `els`, `st`, or `schedule`, nor the remainder of the original component. Therefore the excerpt is preserved separately as visible source, while the runnable UI implements the health-score ring and vital charts in plain HTML/CSS/JavaScript.

## Data and limitations
The visible UI contains sample health values and names. All data and actions in this project are demo-only. This is not a medical record system and does not connect to wearables, clinicians, pharmacies, health providers or a backend. Uploaded records are represented in the UI only; no remote upload occurs. Do not use the sample metrics for medical decisions.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
