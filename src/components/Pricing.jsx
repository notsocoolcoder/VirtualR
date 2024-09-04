import { pricingOptions } from "../constants"
import { CheckCircle2 } from "lucide-react"
const Pricing = () => {
  return (
    <div className='mt-20'>
    <h2 className='text-center tracking-wide text-3xl sm:text-5xl lg:text-6xl '>Pricing</h2>
    <div className='flex flex-wrap'>
 {pricingOptions.map((option,index)=>(
         <div className="w-full sm:w-1/2 lg:w-1/3 p-2"key={index}>
         <div className="p-10 border rounded-xl border-neutral-900">
            <p className="text-4xl">{option.title}
            {option.title==="Pro"&&
             <span className="text-xl mb-4 ml-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800">Most Popular</span>
            

            }
            </p>
            <p className="mb-8">
              <span className="text-5xl mt-6 mr-2">{option.price}</span>
              <span className="text-neutral-300 tracking-tight">/Month</span>
            </p>
            <ul >
              {option.features.map((feature,index)=>(
               <li className="flex items-center mt-8" key={index}>
                <CheckCircle2></CheckCircle2>
                <span className="ml-2">{feature}</span>
               </li>
              ))}
            </ul>
            <a href="#" className="inline-flex border justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border-orange-900 rounded-lg transition duration-200">Subscribe</a>
         </div>


         </div>
 ))}
    </div>
    </div>
  )
}

export default Pricing