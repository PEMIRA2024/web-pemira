import { type HTMLAttributes } from "react";
import Card from "./cardSelect";
import { cn } from "~/lib/utils";
import { useSearchParams } from "next/navigation";
import { names } from "~/data/k3m";
import CardInfo from "./cardInfo";
import Link from 'next/link';

const FirstPage = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const searchParams = useSearchParams();
  const mwa_wm = searchParams.get("mwa_wm");
  return (
    <div className={cn("flex w-[calc(100vw-6rem)] gap-8", className)}>
      <div className="relative flex w-[35%] flex-col items-center justify-evenly rounded-lg border-[4px] border-black px-8 py-4">
        <img
          src="/texture/frame_copy.png"
          alt="bintang"
          width={100}
          height={75}
          className="absolute top-0 z-[1] h-full w-full"
        />
        <img
          src="/texture/frame_kertas.png"
          alt="bintang"
          width={100}
          height={75}
          className="absolute top-0 z-0 h-full w-full"
        />

        <h1 className="z-[1] text-3xl text-red-4 text-shadow-blurMd shadow-black/20">k3m</h1>
        {names.map((name, index) => (
          <CardInfo
            name={name}
            visi="Visi"
            jurusan="Jurusan"
            angkatan="Angkatan"
            photoSrc="/logo.png"
            moto="Tagline / motto"
            key={index}
          />
        ))}
      </div>
      <div className="relative flex flex-1 flex-col items-center gap-6 rounded-lg border-[4px] border-blue-5 bg-brown-1 px-10 py-6">
        <Link href={`?${new URLSearchParams([["mwa_wm", mwa_wm ?? ""]])}`}
          className={cn(
            "absolute left-6 top-6 rounded-full border-[2px] border-navy bg-red-3 px-4 text-brown-2 transition-colors hover:drop-shadow-xl",
          )}
        >
          RESET
        </Link>
        <h1 className="text-3xl text-blue-5 ">urutkan pilihan anda</h1>
        <div className="grid w-full flex-1 grid-cols-3 grid-rows-[1] gap-8">
          {names.map((name, index) => (
            <Card
              nama={name}
              nomor={(index + 1).toString().padStart(2, "0")}
              foto="/logo.png"
              variant="blue"
              key={index}
              isK3M
            />
          ))}
        </div>
        <Card
          isKotakKosong
          variant="blue"
          className="h-[16vh]"
          nomor="04"
          isK3M
        />
      </div>
    </div>
  );
};

export default FirstPage;