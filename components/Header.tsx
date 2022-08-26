import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto space-x-8 lg:space-x-0">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://iconape.com/wp-content/files/yd/193080/svg/193080.svg"
            alt=""
          />
        </Link>
      {/* <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-blue-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>  */}
      </div>
      <div className="flex items-center space-x-5 text-cyan-600">
        <h1 className="text-2xl">Escuela de Música</h1>
        {/* <h3>Sign In</h3> */}
        {/*   <h3 className="border px-4 py-1 rounded-full border-blue-600">
          Get Started
        </h3> */}
      </div>
    </header>
  );
}

export default Header;
