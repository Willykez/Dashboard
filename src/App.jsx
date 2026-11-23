import { useHashRoute } from "./hooks/useHashRoute.js";
import { useTheme } from "./hooks/useTheme.js";
import { Sidebar } from "./components/Sidebar.jsx";
import { BottomNav } from "./components/BottomNav.jsx";
import { TopBar } from "./components/TopBar.jsx";
import { PageTransition } from "./components/PageTransition.jsx";
import { Dashboard } from "./screens/Dashboard.jsx";
import { Projects } from "./screens/Projects.jsx";
import { Activity } from "./screens/Activity.jsx";
import { About } from "./screens/About.jsx";
import { Contact } from "./screens/Contact.jsx";

const SCREENS = {
  dashboard: Dashboard,
  projects: Projects,
  activity: Activity,
  about: About,
  contact: Contact,
};

export default function App() {
  const [route, navigate] = useHashRoute();
  const [theme, toggleTheme] = useTheme();

  const Screen = SCREENS[route] || Dashboard;

  return (
    <div className="app-shell">
      <div className="bg-glow" aria-hidden="true" />

      <Sidebar route={route} onNavigate={navigate} theme={theme} onToggleTheme={toggleTheme} />
      <TopBar theme={theme} onToggleTheme={toggleTheme} />

      <main className="app-main">
        <PageTransition routeKey={route}>
          <Screen onNavigate={navigate} />
        </PageTransition>
      </main>

      <BottomNav route={route} onNavigate={navigate} />
    </div>
  );
}
