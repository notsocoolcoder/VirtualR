import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
const HeroSection = ()=>{
return (
    <div className="flex flex-col mt-6 items-center lg:mt-20">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">
        VirtuaLR build tools 
        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-900 ">{" "}for builders</span>
    </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est quia molestiae repellendus, consectetur ad impedit iusto possimus itaque veritatis in ab perferendis eos, ipsum nobis debitis atque voluptatibus assumenda.

        </p>

    <div className="flex justify-center my-10">
    <a href= "#" className="bg-gradient-to-r from-orange-500 to-orange-800 border rounded-md py-3 px-4 mx-3">
        Start for Free
    </a>
    <a href= "#" className="rounded-md border py-3 px-4">
       Documentation
    </a>

    </div>
    <div className="flex justify mt-10">
    <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
    </div>
   
)
}

export default HeroSection