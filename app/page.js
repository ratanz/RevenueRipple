import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold md:text-5xl flex gap-4 justify-center items-center text-3xl ">Buy Me a Chai
          <span><img className="invertImg" src="\tea.gif" width={52} alt="" /></span></div>
        <p className="text-center md:text-left">
          A crowdfunding platform for developers. Get funded by your fans and followers. Start now!
        </p>

        <p className="text-center md:text-left">
          Unleash the power of your fans and get your projects funded.
        </p>
        <div >
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start here</button>
          </Link>

          <Link href={"/about"}>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 px10">
        <h2 className="text-3xl font-bold text-center mb-14">
          Your fans can buy you a Chai
        </h2>
        <div className="flex gap-5 justify-around  ">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/man.gif" width={62} alt="" />
            <p className="font-bold text-center">Fund yourself</p>
            <p className="text-center">Your fans are available for you to help</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/coin.gif" width={62} alt="" />
            <p className="font-bold text-center">Fund yourself</p>
            <p className="text-center">Your fans are available for you to help</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/group.gif" width={62} alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are available for you to help</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">
          Learn more about us
        </h2>
        {/* Responsive youtube embed */}
        {/* Responsive youtube embed */}
        <div className="  w-[90%] h-[50vh] md:w-[50%] md:h-[50vh] lg:w-[50%] lg:h-[50vh] xl:w-[50%] xl:h-[50vh] ">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/zJec1826xiE?si=UwhdTtmQmDZhrT2Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>
    </>
  );
}
