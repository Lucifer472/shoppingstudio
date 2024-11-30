"use client";
import { useEffect, useState } from "react";
import { getBlogsForClient } from "@/action/get-blogs";

import textSlice from "@/lib/text-util";

import Image from "next/image";
import Link from "next/link";

export const MiddleArticleBlogs = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getBlogsForClient().then((res) => {
      setData(res);
    });
  }, []);

  if (!data) return;

  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-xl font-medium pb-4 w-full border-b-2">
        Featured Blogs
      </span>
      <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-y-1 gap-x-1 w-full">
        {data.map((d: any) => (
          <Link
            key={d.id}
            href={"/" + d.url}
            className="flex flex-col items-center justify-center gap-y-1 p-1 border border-gray-200 rounded-md shadow-sm w-fit max-w-[45%] xss:max-w-[181px] h-[230px]"
          >
            <figure
              style={{ margin: "0" }}
              className="relative aspect-square w-full max-w-[158px]"
            >
              <Image src={d.img} alt="" style={{ objectFit: "cover" }} fill />
            </figure>
            <h2
              style={{
                fontSize: "16px",
                textAlign: "center",
                lineHeight: "24px",
              }}
            >
              {textSlice(d.title, 25)}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
