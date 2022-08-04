import Image from "next/image";

const Header = () => {
  return (
    <header>
      <h1 className="text-3xl">This is the Header</h1>
      <Image className=" object-contain" src="https://links.papareact.com/ua6" width={200} height={100} alt="hulu_image" />
    </header>
  );
};

export default Header;
