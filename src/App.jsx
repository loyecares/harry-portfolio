
import { motion, AnimatePresence } from "framer-motion"
import harry from './assets/harri-1.png'
import './App.css'

function App() {

  const container = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
       
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    whileInView: { opacity: 1 }
  }

  return (
    <>
    

      <div className='page-wrap' style={{overflow:"hidden"}}>
        <motion.section  className='bg-green w-full h-screen px-20 pt-8 relative'
       
        >
          <div  className='nav flex justify-between items-start'>
            <div className='logo'>
              <motion.h1 className='text-5xl font-bold text-white'
              initial={{ y: "-30vh"}} 
              animate={{
                y: 0}}
              transition={{duration: 0.5, type:"tween", stiffness: 120, delay:0.1}}
              >
                Harri<span className='text-orange'>.</span></motion.h1>
            </div>
            <div className='flex flex-col gap-2'>
              <motion.a href='https://www.linkedin.com/in/harrisonobiefule/' target='_blank'
              initial={{ y: "-30vh"}} 
              animate={{
                y: 0}}
                
              transition={{duration: 0.1, type:"spring", stiffness: 100, delay:5}}
              ><motion.img whileHover={{scale:1.2, originX:0,}}  src='src/assets/linkedin.svg' alt='linkedin'/></motion.a>
              <motion.a href='https://instagram.com/harri_obi' target='_blank'
              initial={{ y: "-30vh"}} 
              animate={{
                y: 1.4}}
              transition={{duration: 0.1, type:"spring", stiffness: 115, delay:4.7}}><motion.img whileHover={{scale:1.2, originX:0,}} src=',/src/assets/instagram-icon.svg' alt='instagram'/></motion.a>
              <motion.a href='obiefuleharrison@gmail.com' target='_blank'
              initial={{ y: "-30vh"}} 
              animate={{
                y: 0}}
              transition={{duration: 0.1, type:"spring", stiffness: 110, delay:4.3}}><motion.img whileHover={{scale:1.2, originX:0,}}  src='./src/assets/mail-icon.svg' alt='email'/></motion.a>
              <motion.a href='https://twitter.com/Harri_obi' target='_blank'
              initial={{ y: "-30vh"}} 
              animate={{
                y: 0}}
              transition={{duration: 0.1, type:"spring", stiffness: 120, delay:3.9}}><motion.img whileHover={{scale:1.2, originX:0,}}  src='src/assets/x.svg' alt='x'/></motion.a>

            </div>
          </div>
          {/* <img src='src\assets\designer.png' alt='designer' className='absolute top-[30%] left-[118px]'/> */}
          <p className='font-bold text-[200px] text-[#112422]'>Marketing Expert</p>
          <div className='absolute bottom-32 w-[33.9rem]'>
                <motion.h2 className='font-poppins text-white font-bold text-8xl'
                initial={{ opacity: 0 }} 
                animate={{
                  opacity: 1}}
                transition={{duration: 1.5, delay: 0.9}}
                  >
                  Hey There, I'm Harri
                </motion.h2>
                <motion.p className='text-2xl text-white bg-orange rounded-[50px] px-5 py-3 font-poppins inline-block mt-2'
                initial={{ opacity: 0, }} 
                animate={{
                  opacity: 1, }}
                transition={{duration: 1.5, delay: 1.9}}>Marketing Expert</motion.p>

            </div>
             <div className=' absolute bottom-0 left-[33%]'>
              
              <img src={harry} alt='man' style={{width:"60%"}}/>

            </div> 
            <div className='absolute bottom-32 right-24 w-[25.5rem]'>
                <motion.div>
                  
                  <motion.img src='./src/assets/star-bg.png' alt='star' className='relative right-[50px] top-[50px]' animate={{
                      scale: [0, 1, 2, 1, 1],
                      rotate: [0, 0, 270, 270, 0],  
                  }}
                  transition={{ repeat: Infinity, duration: 2, delay: 6}}></motion.img>   
                </motion.div>
                <motion.p className='text-base text-white font-poppins' initial={{ opacity: 0}} 
                animate={{
                  opacity: 1}}
                transition={{duration: 1.5, delay: 2.9}}>
                I am a passionate marketing communications strategist with core skills in Growth, Media, Public Relations, Marketing, and Community Building. I have nine years of collective experience building companies in multiple markets across Africa.
                </motion.p>
              </div>


        </motion.section>

        <section className='bg-white w-full h-screen px-20 pt-8 relative'>
          {/* <img src='src\assets\designer.png' alt='designer' className='absolute top-[30%] left-[118px]'/> */}
          <div  className=' flex justify-between items-center py-[10rem] gap-[12rem]'>
            <motion.div  initial={{ opacity: 0 , x: "-35%"}}
  whileInView={{ opacity: 1, x: 0 }} transition={{delay:0.5, duration:0.5, repeatType:"reverse"}} className=''>
              <h2 className='text-5xl font-bold text-lightBlack font-poppins'>Harrison <span className='text-green' style={{color:"#ac0727"}}>*</span>  Obiefule</h2>
              <h2 className='text-8xl font-bold text-lightBlack w-[511px] font-poppins mt-7'> Marketing, and Community Building.</h2>
            </motion.div>
            <motion.div  initial={{ opacity: 0, x: "35%" }}
  whileInView={{ opacity: 1, x:0 }} transition={{delay:1, duration:0.5, repeatType:"reverse"}}>
              <p className='text-3xl font-poppins lowercase font-semibold '>Passionate marketing communications strategist with core skills in Growth, Media, Public Relations, Marketing, and Community Building. I have nine years of collective experience building companies in multiple markets across Africa.
</p>
              <p className='font-poppins text-fadedBlack mt-10'>
              I have overseen continent-wide growth, marketing, and communications for companies like FTX Africa (the second-largest cryptocurrency exchange by trading volume at the time), Bitget Africa (a top-five cryptocurrency exchange by trading volume at the time), and Cassava Network, a Web3 growth platform which raised $9M.
              </p>
              <br></br>
            
              <p className='font-poppins text-fadedBlack mt-5'>
              Presently, I co-lead the Nigerian chapter of SuperteamDAO, a global community of developers, creatives and operators working on exciting projects in the Solana blockchain in over 10 countries.<br></br>
              In my free time, I consult on marketing and growth strategies for local and international Web3 companies and projects.
              </p>

              <div className='flex justify-center items-center mt-[8rem] gap-20' >
                <h3 className='font-poppins text-center'>
                  <span className='text-5xl font-bold'>9+</span><br></br>
                  <span className='font-medium mt-5 inline-block'>Years of experience</span>
                </h3>
                <h3 className='font-poppins text-center'>
                  <span className='text-5xl font-bold'>10+</span><br></br>
                  <span className='font-medium mt-5 inline-block'>Organisation</span>
                </h3>
                <h3 className='font-poppins text-center'>
                  <span className='text-5xl font-bold'>30+</span><br></br>
                  <span className='font-medium mt-5 inline-block'>Happy Clients</span>
                </h3>
              </div>
              

            </motion.div>
          </div>

        </section>

        <section className='bg-green w-full h-screen px-20 pt-32 relative'>
            <div className=''>
              <h2 className='text-5xl font-bold text-white font-poppins'>Experience</h2>
              <img src='src/assets/star-bg.png' alt='star' className='relative right-[-240px] top-[-60px]' />
            </div>
         
            <motion.div className='flex justify-between items-center mt-[5rem] '  >
                    <motion.div className='w-[40%]' >
                        <div className='flex justify-between items-center'>
                          <div>
                            <h3 className='text-white text-3xl font-medium'><span className='text-orange text-5xl'>*</span> Superteam Nigeria</h3>
                            <p className='text-fadedWhite pl-8'>Co Lead</p>
                          </div>
                          <div>
                            <p className='text-lightWhite'>June 2023 - Present</p>

                          </div>
                        </div>
                        <p className='text-lightWhite pl-8 mt-5'>I drive Marketing and community-building at Superteam Nigeria. I hold one-on-one sessions and office hours with Developers, providing non-technical guidance on building on the Solana stack, pitching, go-to-market, content, social media strategies for projects, preparing devs for hackathons, building the community across various community management channels like Discord, Twitter, Whatsapp, and the planning of all our IRL events.</p>
                    </motion.div>

                    <motion.div className='w-[40%]' >
                        <div className='flex justify-between items-center'>
                          <div>
                            <h3 className='text-white text-3xl font-medium'><span className='text-orange text-5xl'>*</span> Cassava Network</h3>
                            <p className='text-fadedWhite pl-8'>Head of Marketing </p>
                          </div>
                          <div>
                            <p className='text-lightWhite'>Feb 2023 - Jul 2023</p>

                          </div>
                        </div>
                        <p className='text-lightWhite pl-8 mt-5'> I helped grow and manage the product to 250k registered users, over 200k wallets connected, over 180k avatars created, over 400 tasks created by over 150+ approved communities, and around 20k DAUs and 100k MAUs.</p>
                    </motion.div>


                  
              </motion.div>

              <div className='flex justify-between items-center mt-[5rem] '>
                  <div className='w-[40%]'>
                        <div className='flex justify-between items-center'>
                          <div>
                            <h3 className='text-white text-3xl font-medium'><span className='text-orange text-5xl'>*</span> Zabira Technologies Ltd</h3>
                            <p className='text-fadedWhite pl-8'>Head of Marketing & Communications</p>
                          </div>
                          <div>
                            <p className='text-lightWhite'>Jan 2024 - Present</p>

                          </div>
                        </div>
                        <p className='text-lightWhite pl-8 mt-5'>I lead and direct the marketing department, including digital marketing, advertising, communications, and creative teams. I develop marketing plans, allocate resources, and set short-term and long-term goals. I analyse consumer behaviour, identify market opportunities, and design branding strategies. I also coordinate sales and marketing efforts and participate in company planning with the management and other Team Leads.</p>
                    </div>


                    <div className='w-[40%]'>
                        <div className='flex justify-between items-center'>
                          <div>
                            <h3 className='text-white text-3xl font-medium'><span className='text-orange text-5xl'>*</span> FTX</h3>
                            <p className='text-fadedWhite pl-8'>PR & Marketing Manager - SSA </p>
                          </div>
                          <div>
                            <p className='text-lightWhite'>Jul 2021 - Oct 2022 </p>

                          </div>
                        </div>
                        <p className='text-lightWhite pl-8 mt-5'>In under a year of active marketing and communications operations, FTX became one of the continent's most recognisable and reputable digital asset exchanges, constantly ranking top 2 in the share of voice and media among global competitors in our most active markets. MAUs and monthly trading volumes also saw remarkable growth.</p>
                    </div>

              </div>
              

         

        </section>

        <section className='bg-white w-full h-[100vh] px-20 pt-32 relative'>
            <div className=''>
              <h2 className='text-5xl font-bold text-black font-poppins'>Shoot me a mail</h2>
              <img src='/src/ssets/star-bg.png' alt='star' className='relative right-[-440px] top-[-60px]' />
            </div>

        <div className="w-[50%] mx-auto">
           <form className="bg-green shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4 flex flex-wrap">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="firstName" type="text" placeholder="First Name" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="lastName" type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" rows="5" placeholder="Your message"></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-orange hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Submit
              </button>
            </div>
          </form>
        </div>

        </section>

        <section className='w-[100%] bg-green h-14 pt-[15px]'>
             
              <p className='text-white text-center'> copyright 2024</p>
        </section>
      </div>
 

    </>
  )
}

export default App
