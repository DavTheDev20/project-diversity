import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="bg-primary2 py-6 flex justify-center ">
        <ul className="flex space-x-64 list-none text-secondary2">
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <a href="">Board</a>
          </li>
          <li>
            <a href="">Opportunties</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
      <div className="bg-secondary1 py-20"></div>
      <div className="bg-primary2 py-6">
        <h2 className="text-center text-lg text-secondary1">
          Tell us about your journey in tech, sign up today!
        </h2>
      </div>
      <div className="">
        <h2 className="text-lg text-center my-4 text-secondary1">
          Recent Posts
        </h2>
      </div>
    </main>
  );
}
