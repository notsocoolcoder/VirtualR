import { features } from "../constants"

function FeatureSection() {
  return (
    <div className='relative min-h-[800px] mt-20 border-b border-neutral-800'>
        <div className='text-center'>
            <span className='bg-neutral-900 text-orange-500 rounded-full h-6
            text-sm font-medium py-1 px-2 uppercase'>feature</span>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20'>Easily Build 
            <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>{" "}Your Code</span></h2>
        </div>
        <div className='flex flex-wrap mt-10 lg:mt-20'>
             {features.map((feature,index)=>(
                  <div className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="flex">
                    <div className="flex justify-center mx-6 h-10 w-10 bg-neutral-900 text-orange-700 items-center rounded-lg">
                    {feature.icon}
                    </div>
                    <div>
                    <h5 className="mt-1 text-xl mb-5">{feature.text}</h5>
                    <p className="text-neutral-500 p-2 mb-20 text-md">{feature.description}</p>
                    </div>
                    </div>
                  </div>
             ))}
        </div>
    </div>
  )
}

export default FeatureSection