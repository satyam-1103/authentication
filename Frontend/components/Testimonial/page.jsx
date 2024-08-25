import Image from "next/image";
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";
import { IoMdQuote } from "react-icons/io";


const Testimonial = () => {

  return (
    <div className="flex text-white flex-col items-center gap-6 font-medium text-sm ">
      {/* Section 1  */}
     <div className="flex flex-col items-center justify-around mt-5 p-4 gap-4 md:flex-row">
        
        <h1 className=" w-full md:w-1/2 bg-gradient-to-r from-[#e1eec3] to-[#f05053] bg-clip-text text-transparent text-2xl font-extrabold  md:text-4xl lg:text-5xl mt-2 ">Empowering Students with Knowledge and Opportunities</h1>
         
        <Image 
        src="/main.gif" 
        alt=" GIF" 
        width={150}
        height={100}
        style={{ objectFit: 'cover' }} />
         
         
      

      <div className="flex flex-col w-full md:w-1/3  font-medium items-start">

        <p className="mb-3 text-left p-2 text-lg text-[#b1b3c3]">Our platform has provided me with
           the essential notes and internship opportunities
           that truly empowered my academic journey and career path.</p>
           <Link href={"/testimonial"} className="p-2">
        <button className="w-[200px] h-[50px] flex text-[18px] items-center gap-1 bg-[#322169e0] text-[#e5d9d9d1]  rounded p-2">JOIN COMMUNITY <FaArrowRight/></button>
           </Link>
      </div>


     </div>
     {/* Section 2 */}
      <div className="grid grid-cols-1  md:grid-cols-[2fr_1fr_2fr] p-5 mb-3">
      <div className="grid  grid-cols-2  ">

      <div className="relative h-auto">
    <Image
        src="/testimonial-t3.jpg" 
        alt="Image"
        fill
        style={{ objectFit: 'fill' }}   
    />
</div>


        <div className="grid grid-rows-2  "> 

          <div className=" flex-col bg-[#322169e0] text-[#e5d9d9d1] p-2">
          <p className="p-1">I don’t know how I managed before discovering this site.
            The notes are clear and concise, and the internships
             helped me apply what I learned in a real-world setting.</p>
             <span className="font-extrabold text-xs text-[#7f6a65]"> ~ Mayank Sharma</span>
            </div> 

        <div className="relative h-auto">
        <Image
        src="/testimonial-t1.jpg" 
        alt="Image"
       fill
        style={{ objectFit: 'fill' }}   
       
        />
        </div>
         


           

        </div>
      </div>
     


      {/* text */}
      <div className="flex justify-between flex-col p-4 bg-[#5d2406b8] text-[#cfaf9d]  ">
        <IoMdQuote size={"34px"} className="flex-row-reverse"/>
        <p className="text-lg md:text-xl   ">Thanks to this platform, I not only aced my exams but also landed an internship that 
          aligned perfectly with my career goals. I couldn’t be happier with my experience.</p>
          <span className="font-extrabold text-xs text-[#7f6a65]"> ~ Ayushi Rawat </span>
      </div>

      <div className="grid grid-cols-1 ">

        <div className=" grid  gap-4 grid-cols-2 bg-[#06534fe0] text-[#a18787d1] ">
          <div className="relative h-auto">
        <Image
        src="/testimonial-t2.jpg" 
        alt="Image"
        fill
        style={{ objectFit: 'fill' }}    
         />
          </div>
          <div className="flex-col flex  gap-1 p-4 leading-normal">
          <p className="p-1">The resources here are of exceptional quality,
             and the support I received during my internship search was outstanding.
            </p>
            <span className="font-extrabold text-xs text-[#7f6a65]"> ~ Naveen Mann </span>
          </div>
        </div>

        <div className=" grid gap-4 grid-cols-2 bg-[#322169e0] text-[#e5d9d9d1]  ">
          <div className="relative h-auto" >
        <Image
        src="/profile.jpg" 
        alt="Image"
        fill
        style={{ objectFit: 'fill' }}   
        
        />
          </div>
        <div className="flex-col flex gap-1 p-4 leading-normal">
          <p className="p-1">I recommend this platform to every student who wants to excel. 
            The quality of notes and the internship opportunities are second to none.</p>
            <span className="font-extrabold text-xs text-[#7f6a65]"> ~Tushar Sharma </span>
        </div>
        </div>
      </div>
     </div> 
   


    </div>
  )
}

export default Testimonial
