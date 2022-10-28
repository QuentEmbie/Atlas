import Link from "next/link";
import { FC } from "react";

const Page: FC = () => {
  return (
    <div className="h-screen bg-green-500 py-3 px-3 grid place-items-center">
      <div>
        <p className="text-white text-xl"> Rules of the game </p>
        <p className="text-white">
          Some photos will appear and you&apos;ll have to find out who it is
        </p>
      </div>
      <Link href="game/1">
        <button className="text-xl text-white">Enter the game</button>
      </Link>
    </div>
  );
};

export default Page;
