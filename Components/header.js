import Link from "next/link";

export default function header({}) {
  return (
    <nav className="flex flex-row bg-gray-200 items-center h-16 p-8">
      <Link class="nav-link" href={`/`}>
        PartOut
      </Link>
      <div className="p-4" />
      <Link class="nav-link" href={`/browse`}>
        Browse
      </Link>
      <div className="p-4" />

      <Link class="nav-link" href={`/about`}>
        About
      </Link>
      <div className="p-4" />
      <Link className="" href={`/`}>
        Login
      </Link>
    </nav>
  );
}
