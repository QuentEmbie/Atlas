import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const Page: FC = () => {
  const router = useRouter();
  const query = router.query as { step: string };
  const step = parseInt(query.step);
  return (
    <div className="h-screen bg-green-500 py-3 px-3 grid place-items-center">
      <div>
        <p className="text-white text-xl"> {`Photo ${step}`} </p>
      </div>
      <Link href={`/game/${step + 1}`}>
        <button className="text-xl text-white">Next photo</button>
      </Link>
    </div>
  );
};

export default Page;
