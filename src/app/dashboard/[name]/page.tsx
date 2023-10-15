import Layout from "@/components/dashboard/page";
import { useRouter } from "next/navigation";

const DetailSlider = (props: any) => {
  const name = props.params.name;

  return (
    <>
      <Layout />
      <div className=" sm:mt-6 mt-2 p-4 flex flex-wrap">
        <div className="min-h-40 max-h-80 sm:mr-10 bg-red-200">
          <img
            src="/outs.jpg"
            alt="logo"
            className="h-full w-full sm:w-72 rounded-md rounded-b-none"
          />
          <button className="bg-yellow-300 w-full rounded-md rounded-t-none h-9 text-lg font-mono hover:bg-yellow-400 font-bold hidden sm:block">
            Buy Tickets
          </button>
        </div>
        <div className=" w-full mb-2 sm:w-6/12 md:w-7/12">
          <h1 className="font-semibold text-3xl mt-10 capitalize sm:mt-0">
            {name}
          </h1>
          <div className="mt-2">
            <div className="flex">
              <label className="font-bold">Pengarang </label>
              <span className="ml-2">Shinobu Kaitani</span>
            </div>
            <div className="flex mt-1">
              <label className="font-bold">Genre</label>
              <span className="ml-11">
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
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae non recusandae quisquam possimus maiores odio ad harum
              id maxime mollitia praesentium, molestiae quis, eos nisi voluptas
              dolores, laudantium quo est minima ab. Quidem porro voluptas
              doloribus dolores unde odio similique doloremque, aliquid
              voluptates omnis asperiores cumque cupiditate! Eaque dolore
              temporibus officiis ullam, vero, pariatur culpa sit exercitationem
              omnis, corporis laborum aspernatur aut consectetur atque eius
              nostrum quia optio voluptate autem quas explicabo tempora. A fuga,
              illo aut aspernatur libero vel hic temporibus repellat, corporis
              aliquam debitis? Quaerat voluptates, quis qui aperiam maiores
              quas. Omnis voluptate quia maiores similique sint enim!
            </div>
          </div>
        </div>
        <button className="bg-yellow-300 w-full rounded-md rounded-t-none h-9 text-lg font-mono hover:bg-yellow-400 font-bold block sm:hidden">
          Buy Tickets
        </button>
      </div>
    </>
  );
};

export default DetailSlider;
