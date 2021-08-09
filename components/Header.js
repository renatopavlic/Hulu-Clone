import Image from "next/image";

const Header = () => {
  return (
    <header className="">
      <h1>This is a header</h1>
      {/* Next JS image component with lazy loading */}
      <Image src="https://links.papareact.com/ua6" width={200} height={100} />
    </header>
  );
};

export default Header;
