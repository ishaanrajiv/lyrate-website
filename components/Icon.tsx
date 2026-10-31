import { ICONS, type IconName } from "./icons";

/** An icon from the app's original set. It draws in the current text colour. */
export default function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  );
}
