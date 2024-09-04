import { testimonials } from "../constants"
import user1 from '../assets/profile-pictures/user1.jpg'
import user2 from '../assets/profile-pictures/user2.jpg'
import user3 from '../assets/profile-pictures/user3.jpg'
import user4 from '../assets/profile-pictures/user4.jpg'
import user5 from '../assets/profile-pictures/user5.jpg'
import user6 from '../assets/profile-pictures/user6.jpg'

const Testimonials = () => {
  return (
    <div className="mt-20">
        <h1 className="tracking-wide text-center text-3xl sm:text-5xl lg:6xl">What People Are Saying</h1>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial,index)=>(
                <div className="px-4 py-2 text-neutral-300 w-full  lg:w-1/3 sm:w-1/2">
                   
                    <div className="bg-neutral rounded-md p-6 text-md border  border-neutral-900 font-thin">
                        <p>{testimonial.text}</p>
                        <div className="flex mt-8 items-start">
                            <img
                                className="w-12 h-12 rounded-full border norder-neutral-300" src ={testimonial.image}>
                            </img>
                            <div className="ml-3">
                            <h2>{testimonial.user}</h2>
                            <span className="text-sm font-normal italic">{testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials