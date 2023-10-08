import ThemeSwitcher from "./ThemeSwitcher";
import { SignOutButton } from "@clerk/nextjs";


const themes = [
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
  ];

export default function Navbar() {
  return (
<div className="navbar bg-neutral">
  <div className="flex-1">
    <a className="btn btn-neutral normal-case text-xl">Duoc Malla</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 bg-transparent">
      <ThemeSwitcher themes={themes} />
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul className="p-2 bg-base-100">
            <li><span>Link 1</span></li>
            <li><span>Link 2</span></li>
          </ul>
        </details>
      </li>
      <li>
        <SignOutButton>
          <span className="badge-primary">Cerrar sesion</span>
        </SignOutButton>
      </li>
    </ul>
  </div>
</div>
  );
}
