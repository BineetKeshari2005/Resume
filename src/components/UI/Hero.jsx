import React from 'react'
import heroImg from "../../assets/images/hero.png"
import CountUp from "react-countup"

const Hero = () => {
  return (
    <section className='pt-0' id = "about">
        <div className="container" pt-14>
            <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                {/* ======hero left content======= */}
                <div className="w-full md:basis-1/2 ">
                <h5 data-aos='fade-right' data-aos-duration ='1500' className='text-headingColor font-[600] text-[16px]'>Hello Welcome</h5>
                <h1 data-aos='fade-up' data-aos-duration ='1500'  className='text-headingColor font-[800] text-[1.8 rem] sm:text-[40px]
                leading-[35px] sm:leading-[46px] mt-5'>I'm Bineet Keshari <br/> Software Developer</h1>
              <div 
                data-aos='fade-up' 
                data-aos-duration ='1800' 
                data-aos-delay='200' 
                className="flex items-center gap-6 mt-7">
                  <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-dashed border-smallTextColor'>See Portfolio</a>
                </div>
                <p data-aos='fade-left' 
                  data-aos-duration ='1500'
                  className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'
                  >
                  <span><i class="ri-apps-2-line"></i></span>  
                  I'm a Frontend Developer and UI/UX Designer (with a little bit knowledge of Backend) with a passion for building visually appealing and easy-to-use websites. I work with tools like HTML, CSS, JavaScript, React, and Figma to make smooth and user-friendly web experiences.
                </p>
                <div className="flex items-center gap-9 mt-14 ">
                  <span className='text-smallTextColor text-[15px] font-[600] '>Follow me:</span>
                  <span><a href="https://github.com/BineetKeshari2005"
                   className='text-smallTextColor text-[18px] font-[600]'><i class="ri-github-fill"></i></a>
                  </span>
                  <span><a href="https://www.linkedin.com/in/bineet-keshari-799819323/"
                   className='text-smallTextColor text-[18px] font-[600]'><i class="ri-linkedin-fill"></i></a>
                  </span>
                  <span><a href="https://www.instagram.com/bineetkeshari/"
                   className='text-smallTextColor text-[18px] font-[600]'><i class="ri-instagram-line"></i></a>
                  </span>
                </div>
                </div>

                {/* ============hero left end ============== */}
                {/* --hro-img-- */}
                <div className="basis:1/3 mt-10 sm:mt-0">
                <figure className='flex items-center justify-center w-[300px] h-[550px] ml-8 ' >
                  <img src={heroImg} alt="" className='h-[450px] w-[440px] rounded-[20px]' />
                </figure>
                </div>
                {/* ==hero-img-end */}
                {/* ==hero-content-right---- */}
                <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                <div className="mb-10">
                  <h2 className='text-headingColor font-[700] text-[32px]'>
                    <CountUp start={0} end={1} duration={2} suffix='+'/>
                  </h2>
                  <h4  className='text-headingColor font-[500] text-[18pxpx]'>Years of Experience</h4>
                </div>
                <div className="mb-10">
                  <h2 className='text-headingColor font-[700] text-[32px]'>
                    <CountUp start={0} end={6} duration={2} suffix='+'/>
                  </h2>
                  <h4  className='text-headingColor font-[500] text-[18pxpx]'>Projects Completed</h4>
                </div>
                <div className="mb-10">
                  <h2 className='text-headingColor font-[700] text-[32px]'>
                    <CountUp start={0} end={70} duration={2} suffix='+'/>
                  </h2>
                  <h4  className='text-headingColor font-[500] text-[18pxpx]'>Leetcode Questions</h4>
                </div>
                <div className="mb-10">
                  <h2 className='text-headingColor font-[700] text-[32px]'>
                    <CountUp start={0} end={840} duration={2} suffix='+'/>
                  </h2>
                  <h4  className='text-headingColor font-[500] text-[18pxpx]'>Codeforces Rating</h4>
                </div>
                </div>
                {/* ==hero-content-right-end---- */}

            </div>
        </div>

    </section>
  )
}

export default Hero