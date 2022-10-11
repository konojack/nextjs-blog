import Link from 'next/link';

const links = [
  { href: '/', label: 'Articles', id: 1 },
  { href: '/projects', label: 'Projects', id: 3 }
];

function Layout({ children }) {
  return (
    <div className="p-10 font-mono max-w-7xl mx-auto">
      <nav className="bg-blue-600 p-5 flex justify-center">
        {links.map((link) => {
          return (
            <Link href={link.href} key={link.id}>
              <a className="shadow md:w-40 bg-blue-300 p-2 m-2 text-center hover:bg-blue-200 transition ease-in duration-300">
                {link.label}
              </a>
            </Link>
          );
        })}
      </nav>
      <main className="bg-gray-100 p-5 text-center">{children}</main>
      <footer className="bg-blue-400 p-5 text-gray-100 text-center">
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default Layout;
