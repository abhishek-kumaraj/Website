import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Tag from "../../Tag";
import Divider from "../../Divider";

const Card = ({ className, data }: { className?: string; data: any }) => {
  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };
  const currentPath = router?.pathname; // to get current route
  return (
    <div
      data-aos="fade-up"
      className={`h-fit relative sm:h-[85vh] ${className} flex flex-wrap msm:flex-nowrap gap-3 sm:block md:w-[30%] lg:w-[31%] xl:w-[32%]`}
    >
      <Image
        onClick={() => handleNavigate(`${currentPath}/${data?.id}`)}
        src={data.img}
        alt="card"
        className="w-full relative msm:w-[45%] sm:w-full sm:h-[10rem] lg:h-[12rem] xl:h-[15rem] xxl:h-[20rem]"
      />
      <div
        onClick={() => handleNavigate(`${currentPath}/${data?.id}`)}
        className="w-full msm:w-[75%] sm:w-full"
      >
        <span className=" text-main-light_white block sm:hidden  font-miligramMedium text-[0.8rem]">
          {data?.date}
        </span>
        <Divider className="hidden sm:block mt-6" />
        <h1 className="text-white font-miligrambold text-[1rem] sm:text-[1.3rem] leading-none cursor-pointer">
          {data?.title}
        </h1>
        <div className="flex flex-wrap items-center justify-start gap-1 sm:gap-3 my-2 sm:my-5">
          {data?.chips.map((item, i) => (
            <Tag key={i} text={item} />
          ))}
        </div>
        <div className="hidden sm:block">
          <p className="text-main-light_white sm:text-[1rem] font-miligramText400 text-justify">
            {data?.mainPara}...
            <button
              onClick={() => handleNavigate(`${currentPath}/${data?.id}`)}
              className="border-b-2 border-transparent hover:border-main-lightTeal text-main-lightTeal cursor-pointer text-[1rem] leading-none font-miligramTextBook hover:font-miligramTextMedium"
            >
              Read More
            </button>
          </p>
        </div>
      </div>
      <div className="fixed w-full bottom-0 flex mt-14 justify-between items-center">
        <span className=" text-white block  font-miligramMedium">
          {data?.date}
        </span>
        <div className="overflow-hidden border-[1px] border-main-teal rounded-full mr-3 w-12 h-12 p-2">
          <Image src={data.profile} alt="profile" className="h-full w-full" />
        </div>
      </div>
      <div className="h-10 mt-10 pt-10"> f</div>
    </div>
  );
};

export default Card;
