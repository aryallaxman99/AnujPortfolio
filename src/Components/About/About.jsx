import Image from "next/image";
import coursera from "@/../public/coursera.png";

const About = () => {
  return (
    <div className="pt-14 pb-24 bg-black text-white">
      <div className="px-28">
        <div className="mb-3 ">
          <p className="text-5xl">About Me</p>
          <div className="w-full h-px my-6 bg-white border-0 " />
        </div>
        <div>
          <div>
            <div className="flex items-center">
              <h1 className="w-1/2 text-3xl text-left ">Who Am I</h1>
              <p className="w-1/2 text-xl">
                Hello! I’m Anuj Kaphle, a passionate UI/UX designer based in
                Kathmandu with over two years of experience in creating
                intuitive, user-centered designs. My journey in design began
                with a fascination for how visual aesthetics and functionality
                come together to shape user experiences. Over the years, I’ve
                honed my skills in crafting interfaces that are not only
                visually appealing but also highly functional and easy to use.
              </p>
            </div>
            <div className="w-full h-px my-6 bg-white border-0 " />
          </div>
          <div>
            <div className="flex items-center">
              <h1 className="w-1/2 text-3xl text-left ">What I do</h1>
              <div className="w-1/2 text-xl">
                <p>
                  I’m a designer specializing in UI/UX design and branding. My
                  work focuses on creating intuitive digital experiences and
                  strong brand identities that resonate with users and stand out
                  in the market. Whether it’s crafting user-friendly interfaces
                  or developing cohesive brand visuals, I’m passionate about
                  design that not only looks great but also delivers meaningful
                  impact.
                </p>
                <p className="mt-6">
                  Beyond design, I’m deeply interested in how technology can
                  improve lives, and I’m constantly exploring new ways to
                  enhance the user experience. When I’m not working, you can
                  find me exploring the vibrant culture of Kathmandu,
                  experimenting with photography, or brainstorming my next
                  creative project. I’m always excited to collaborate on
                  innovative projects and bring new ideas to life.
                </p>
              </div>
            </div>
            <div className="w-full h-px my-6 bg-white border-0 " />
          </div>
          <div>
            <div className="flex items-center">
              <h1 className="w-1/2 text-3xl text-left ">Working experience</h1>
              <div className="w-1/2 text-xl">
                <p>
                  My journey into the world of design began as a Graphics Intern
                  at Hammer Lab, where I quickly transitioned into the role of
                  Junior Graphic Designer. It was here that I honed my
                  foundational skills, learning the art of visual storytelling
                  and understanding the impact of design on user engagement. My
                  time at Hammer Lab was transformative, as it allowed me to
                  explore the nuances of design and solidify my passion for
                  creating visually compelling content.
                </p>
                <p className="mt-6">
                  With a growing interest in how design could influence user
                  behavior on a deeper level, I decided to pivot into UI/UX
                  design. I applied for a UI/UX Designer role, and for the next
                  two years, I immersed myself in crafting user-centric designs
                  that not only looked great but also provided seamless and
                  intuitive experiences. This experience was a significant leap
                  in my career, as I learned to balance aesthetics with
                  functionality, always keeping the user at the forefront of my
                  design process.
                </p>
                <p className="mt-6">
                  After one years of sharpening my UI/UX skills, I joined Arhant
                  Solution as a Junior UI/UX Designer. This role has allowed me
                  to further expand my expertise, working on diverse projects
                  that challenge me to innovate and push the boundaries of what
                  great design can achieve. Today, I continue to explore new
                  design methodologies, striving to create digital experiences
                  that are both beautiful and highly functional.
                </p>
              </div>
            </div>
            <div className="w-full h-px my-6 bg-white border-0 " />
          </div>
          <div>
            <div className="flex items-center">
              <h1 className="w-1/2 text-3xl text-left ">Design course</h1>
              <div className="w-1/2 text-xl">
                <Image src={coursera} className="pt-8 pb-14 pr-36" />
                <p>
                  I have completed the Google UX Design course, where I gained
                  in-depth knowledge and practical skills in user experience
                  design. The course covered essential topics like user
                  research, wireframing, prototyping, and usability testing. It
                  also provided hands-on experience with industry-standard tools
                  and methodologies, allowing me to further enhance my ability
                  to create user-centered designs that are both functional and
                  visually appealing.
                </p>
              </div>
            </div>
            <div className="w-full h-px my-6 bg-white border-0  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
