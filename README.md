# CSVERSE Explorer v2

React Native / Expo mobile learning explorer for five Computer Science courses:
- Internet Programming
- Algorithms Design & Analysis
- Database Systems
- Network Design & Architecture
- Digital Logics

## Implemented
- Home dashboard with course cards and progress overview
- Course directory with searchable courses and topic tags
- Course detail pages with lessons and bookmark/completion controls
- Interactive concept lab with expandable 2D layers
- Three.js 3D chip assembly in Expo GL, rotate toggle and explode/collapse layers
- Bubble-sort comparison visualizer
- Logic gate playground with AND, OR, XOR and live output
- Course quizzes, feedback, and score saving
- Bookmarks, visited courses, completion tracking persisted on device using AsyncStorage
- Mobile navigation bar

## Requirements
Node.js LTS, npm, Android device/emulator, or Expo Go compatible with the SDK.

## Setup
```bash
npm install
npx expo install expo-gl expo-status-bar
npx expo start
```
Use Expo Go to scan the QR code or run `npx expo start --android`.

## 3D scene note
The Three.js scene uses an actual GL-rendered geometry assembly with separated layers, not a pre-rendered image. It currently represents a conceptual processor/chip assembly. Each course has a related concept pipeline in the 2D lab. The current 3D scene is a reusable generic assembly; course-specific meshes and richer drag controls are planned as a follow-on.

## Data persistence
Progress, bookmarks, quiz scores, and visited course IDs are stored locally on the device using AsyncStorage. This starter does not use a backend or sync progress between devices.

## Project structure
```
CSVERSE_ReactNative/
  App.js
  app.json
  package.json
  babel.config.js
  README.md
  src/
    components/
      ThreeDLab.js
      AlgorithmLab.js
      LogicLab.js
    data/
      courses.js
```


## GitHub Actions workflows

Two workflows are included:
- `.github/workflows/build.yml` runs on pushes to `main`, pull requests targeting `main`, and manual dispatch. It installs dependencies, checks JavaScript syntax, exports Expo web, and uploads the `csverse-web-dist` artifact.
- `.github/workflows/deploy-pages.yml` builds and deploys static web output to GitHub Pages on pushes to `main` or manual dispatch. It configures Expo's base URL as `/<repository-name>/` for project Pages.

### Enable Pages once
In the GitHub repository, open **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**, and save. Push to `main` or manually run **Deploy CSVERSE to GitHub Pages** from Actions.

Expo web export uses single-page output (no Expo Router static-rendering dependency) and is written to `dist/`. The build workflow artifact can be downloaded from the workflow run. The deploy workflow publishes it to Pages.
