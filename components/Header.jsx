import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItems from "./HeaderItems";

const Header = () => {
  return (
    <header className=" flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className=" flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItems title="HOME" Icon={BadgeCheckIcon} />
        <HeaderItems title="HOME" Icon={CollectionIcon} />
        <HeaderItems title="HOME" Icon={SearchIcon} />
        <HeaderItems title="HOME" Icon={UserIcon} />
      </div>
      <Image
        className=" object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="hulu_image"
      />
    </header>
  );
};

export default Header;
