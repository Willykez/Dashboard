import {
  FiHome, FiFolder, FiActivity, FiUser, FiMail,
  FiGithub, FiGlobe, FiTwitter, FiSun, FiMoon,
  FiArrowRight, FiX, FiExternalLink, FiCalendar, FiMapPin,
} from "react-icons/fi";

// Central icon registry so data files can reference icons by string name
// instead of importing React components directly.
export const ICONS = {
  home: FiHome,
  folder: FiFolder,
  activity: FiActivity,
  user: FiUser,
  mail: FiMail,
  github: FiGithub,
  globe: FiGlobe,
  twitter: FiTwitter,
  sun: FiSun,
  moon: FiMoon,
  arrowRight: FiArrowRight,
  close: FiX,
  external: FiExternalLink,
  calendar: FiCalendar,
  pin: FiMapPin,
};

export function Icon({ name, ...props }) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp {...props} />;
}
