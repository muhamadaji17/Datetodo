"use client";

import Layout from "@/components/dashboard/page";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DetailSlider = (props: any) => {
  const name = props.params.name;

  const sinopsis = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Repudiandae non recusandae quisquam possimus maiores odio ad
  harum id maxime mollitia praesentium, molestiae quis, eos nisi
  voluptas dolores, laudantium quo est minima ab. Quidem porro
  voluptas doloribus dolores unde odio similique doloremque,
  aliquid voluptates omnis asperiores cumque cupiditate! Eaque
  dolore temporibus officiis ullam, vero, pariatur culpa sit
  exercitationem omnis, corporis laborum aspernatur aut
  consectetur atque eius nostrum quia optio voluptate autem quas
  explicabo tempora. A fuga, illo aut aspernatur libero vel hic
  temporibus repellat, corporis aliquam debitis? Quaerat
  voluptates, quis qui aperiam maiores quas. Omnis voluptate quia
  maiores similique sint enim!`;

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const maxChars = 50;

  return (
    <>
      <Layout />
      <div className=" sm:mt-6 mt-2 p-4 flex flex-wrap">
        <div className="min-h-40 max-h-80 sm:mr-10 bg-red-200 mb-10">
          <img
            src="/outs.jpg"
            alt="logo"
            className="h-full w-full sm:w-72 rounded-md rounded-b-none"
          />
          <button className="bg-yellow-300 w-full rounded-md rounded-t-none h-9 text-lg font-mono hover:bg-yellow-400 font-bold hidden sm:block">
            Buy Tickets
          </button>
        </div>
        <div className=" w-full mb-2 sm:w-6/12 md:w-7/12 lg:w-8/12 text-justify">
          <h1 className="font-semibold text-3xl mt-10 capitalize sm:mt-0">
            {name}
          </h1>
          <div className="mt-2">
            <div className="flex">
              <label className="font-bold">Pengarang </label>
              <span className="" style={{ marginLeft: 10 }}>
                Shinobu Kaitani
              </span>
            </div>
            <div className="flex mt-1">
              <label className="font-bold">Genre</label>
              <span className="ml-12">
                Perjudian, Fiksi psikologis, Manga olahraga
              </span>
            </div>
            <div className="flex mt-1">
              <label className="font-bold">Manga</label>
              <span className="ml-10 lowercase">
                ONE OUTS 1, ONE OUTS 4, ONE OUTS 7, ONE OUTS 10, ONE OUTS 12,
                ONE OUTS 14, ONE OUTS 16, ONE OUTS 18, ONE OUTS 20
              </span>
            </div>
            <div className="flex mt-1">
              <label className="font-bold">Penerbit</label>
              <span className="ml-7">Shueisha</span>
            </div>
            <div className="lg:mt-4">
              <strong>Sinopsis</strong>
              <p>
                {showMore ? sinopsis : sinopsis.slice(0, maxChars)}
                {sinopsis.length > maxChars && (
                  <span>
                    <span
                      id="more"
                      style={{ display: showMore ? "inline" : "none" }}
                    >
                      {sinopsis.slice(maxChars)}
                    </span>
                    {showMore ? (
                      <button
                        onClick={toggleShowMore}
                        className="ml-1 text-blue-300 underline"
                      >
                        See Less
                      </button>
                    ) : (
                      <button
                        onClick={toggleShowMore}
                        className="ml-1 text-blue-300 underline"
                      >
                        See More
                      </button>
                    )}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
        <button className="bg-yellow-300 w-full rounded-md rounded-t-none h-9 text-lg font-mono hover:bg-yellow-400 font-bold block sm:hidden">
          Buy Tickets
        </button>
      </div>
      <div className="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae tenetur
        nesciunt iste accusantium nemo earum illum explicabo sed qui labore
        quidem ipsam, nobis nam tempora voluptas deleniti eos dolore officiis!
        Doloremque laborum animi ipsam vitae molestias sequi! Necessitatibus
        possimus, fuga natus placeat itaque officiis aspernatur! Rem dolore vel
        nobis omnis cum nemo magnam nesciunt aliquid impedit quas. Nesciunt
        ullam rem animi eligendi assumenda culpa, mollitia nihil voluptatibus
        nam at voluptatem sequi debitis, modi ad tenetur vero! Exercitationem
        eius blanditiis quos ab necessitatibus ratione harum, sequi fugiat
        dolores excepturi omnis dolorem accusamus impedit. Corporis libero
        excepturi quasi sit, natus accusamus consequuntur.
      </div>
    </>
  );
};

export default DetailSlider;
