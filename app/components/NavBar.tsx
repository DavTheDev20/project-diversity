import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <Link
        href="/"
        className="block text-center text-xl my-4 font-semibold text-secondary2"
      >
        Black & Techy
      </Link>
    </nav>
  );
}
