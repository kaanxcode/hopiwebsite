import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Logo.png";
import slider from "../../public/slider.png";
import bubleicon from "../../public/bubleicon.png";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col  text-white">
      <div className="width-100 container mx-auto flex gap-10 bg-white py-4 text-black/50">
        <h1 className="rounded bg-blue-400 p-4 text-2xl text-white">Hopi</h1>
        <Image src={logo} alt="" />
        <nav>
          <ul className="flex space-x-4 text-2xl">
            <li>Ürünler</li>
            <li>Wehopi</li>
            <li>Kampanyalar</li>
            <li>Markalar</li>
            <li>Hopi</li>
            <li>Blog</li>
          </ul>
        </nav>
        <div>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            placeholder="Sana Nasıl Yardımcı Olabilirim?"
            className="rounded-md border border-gray-300 p-2"
          />
        </div>
        <div className="ml-auto flex flex-col items-end justify-center rounded-full bg-fuchsia-600  ">
          <p className="text-2xl text-white">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full bg-white/10 px-4 py-2 font-semibold no-underline transition hover:bg-white/20"
          >
            {session ? "Çıkış Yap" : "Giriş Yap Yada Kayıt Ol"}
          </Link>
        </div>
      </div>
      <div>
        <Image src={slider} alt="" className="w-full" />
      </div>
      <div className="flex justify-center gap-2 bg-white text-black ">
        <ul>
          <li className="ml-10">
            <Image src={bubleicon} alt="" />{" "}
          </li>
          <li className="text-xl">Hopi Dünyası</li>
          <li className="w-1/5 text-center">
            Yüzlerce markada kampayalara ek tekliflerle yüzlerce dükkanda anında
            alışveriş yapma ve hop diye ödeme imkanı sundma
          </li>
          <li>
            <button className="rounded-full bg-gray-600 p-2 text-white">
              Daha Fazla Gör
            </button>
          </li>
        </ul>
        <ul>
          <li className="ml-10">
            <Image src={bubleicon} alt="" />{" "}
          </li>
          <li className="text-xl">Hopi Dünyası</li>
          <li className="w-1/5 text-center">
            Yüzlerce markada kampayalara ek tekliflerle yüzlerce dükkanda anında
            alışveriş yapma ve hop diye ödeme imkanı sundma
          </li>
          <li>
            <button className="rounded-full bg-gray-600 p-2 text-white">
              Daha Fazla Gör
            </button>
          </li>
        </ul>
        <ul>
          <li className="ml-10">
            <Image src={bubleicon} alt="" />{" "}
          </li>
          <li className="text-xl">Hopi Dünyası</li>
          <li className="w-1/5 text-center">
            Yüzlerce markada kampayalara ek tekliflerle yüzlerce dükkanda anında
            alışveriş yapma ve hop diye ödeme imkanı sundma
          </li>
          <li>
            <button className="rounded-full bg-gray-600 p-2 text-white">
              Daha Fazla Gör
            </button>
          </li>
        </ul>
        <ul>
          <li className="ml-10">
            <Image src={bubleicon} alt="" />{" "}
          </li>
          <li className="text-xl">Hopi Dünyası</li>
          <li className="w-1/5 text-center">
            Yüzlerce markada kampayalara ek tekliflerle yüzlerce dükkanda anında
            alışveriş yapma ve hop diye ödeme imkanı sundma
          </li>
          <li>
            <button className="rounded-full bg-gray-600 p-2 text-white">
              Daha Fazla Gör
            </button>
          </li>
        </ul>
      </div>
    </main>
  );
}
