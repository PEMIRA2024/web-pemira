import React from "react";
import Link from "next/link";
import { body } from "@fonts";

const Portofolio = ({ linkPorto }: { linkPorto: string }) => {
  return (
    <Link href={linkPorto} className="w-full">
      <div className="box-border items-center justify-center rounded-2xl border-2 border-black bg-brown-5">
        <div
          className={`${body.className} flex justify-center text-3xl text-brown-1`}
        >
          Portofolio
        </div>
      </div>
    </Link>
  );
};

export default Portofolio;