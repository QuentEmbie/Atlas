import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className=" bg-red-500 h-screen grid place-items-center">
      <Link href="/game">
        <button className="text-xl text-white">Enter the game</button>
      </Link>
    </div>
  );
};

export default Home;
