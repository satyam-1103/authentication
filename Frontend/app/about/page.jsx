import Image from "next/image";

const About = () => {
  return (
    <div className="bg-#0F172A h-svh relative w-full pt-10 mt-10">
      <div className="flex text-white ">
        <div className="md:w-60 w-28  h-auto lg:w-auto items-center  -rotate-90 flex text-5xl md:text-6xl lg:text-7xl underline  lg:overscroll-hidden bg-grey-100">
          <p>ABOUT</p> <p className="text-orange-400 underline">US</p>
        </div>
        <div className="px-8 md:w-auto lg:w-auto bg-orange-50 overflow-scroll h-96 text-black py-11 pb-32 no-scrollbar">
          <p className="text-2xl font-bold">Who Are We?</p>
          <p>
            Welcome to our college student-led platform, your ultimate hub for
            promoting college events, hackathons, syllabus information, and
            fostering a sense of unity among students from different colleges.
            We are a passionate group of students committed to enhancing your
            college experience.
          </p>
          <p>
            Our mission is to provide a seamless resource where you can discover
            exciting upcoming events, participate in thrilling hackathons,
            access your syllabus effortlessly, and connect with a community that
            shares your academic journey. Additionally, we are dedicated to
            bridging the gap between institutions and creating a powerful union
            of young minds.
          </p>
          <p className="text-2xl font-bold"> What We Do?</p>
          <p>
            On our platform, you can engage with fellow students, share ideas,
            collaborate on projects, and collectively shape an inspiring
            community that transcends college boundaries. Join us in building a
            stronger, interconnected student community and navigate the exciting
            world of college life together!
          </p>
          <p>- Join Events </p>
          <p>- Get Resources</p>
          <p>- Apply for</p>
          <p>Opportunities</p>
        </div>
      </div>
      <div className=" absolute left-4  bottom-32 md:left-20  md:bottom-24 lg:bottom-20 lg:left-52 w-72 h-60  md:w-96 md:h-68  bg-slate-900 ">
        <Image
          src="/college.svg"
          layout="fill"
          objectFit="cover"
          alt="About Us Image"
          className="filter grayscale scale-90  "
        />
      </div>
    </div>
  );
};

export default About;
