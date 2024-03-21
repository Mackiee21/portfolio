import { landingVideo, skills } from '../utils/index'
import { useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Landing = ({ height }: {height: number}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const tl = gsap.timeline({})
    const typingTl = gsap.timeline({})
    typingTl.pause()
    tl.pause()

  useGSAP(() => {
    const interval = setInterval(() => {
      if(videoRef.current){
        if(videoRef.current.playsInline){
          typingTl.play()
        }
        if(videoRef.current.currentTime + .5 >= videoRef.current.duration){
          videoRef.current.pause()
          tl.play()
          clearInterval(interval)
        }
      }
    }, 1000)
    typingTl.from('.typing', {
      opacity: 0,
      stagger: 0.4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })
    tl.to('.typing', {
      display: "none",
    })
    tl.to('.go-missing', {
      display: "none"
    })
    tl.to(".heading", {
      opacity: 1,
      y: 0,
      delay: .2,
      duration: .3
    })
    tl.from('.dot', {
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true

    })
    tl.to('.heading', {
      y: 0,
      opacity: 0,
      delay: .7,
    })
    tl.to('.skills', {
      display: 'block'
    })
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section style={{maxHeight: `${height}px`}} className="hero h-dvh">
      <h3 className="z-[9] text-sm font-medium heading absolute opacity-0 -translate-y-1 left-1/2 -translate-x-1/2 bg-orange-100 py-2.5 px-8 rounded-sm" >Updating content{"...".split("").map(d => {
            return <span className='dot opacity-100'>{d}</span>
          })}</h3>  
          <div className='h-full grid md:grid-cols-2 grid-cols-1'>
           <section id="left-landing" className='flex flex-col items-center justify-center'>
              {/* <div className='w-[30%] rounded-full'>
                <img className='w-full rounded-full border-2 border-slate-300 object-cover object-center' src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/427766089_2502459919923974_6068503201814358464_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zmrMgH_x63wAX_dFqp3&_nc_ht=scontent.fceb2-1.fna&oh=00_AfA2FLIczfYeDdUfMi_oVRQw3sm_kC3bO-n5EZKrIc7Log&oe=6600529C" alt="profile picture" />
              </div> */}
              <div className='w-[70%] mt-3 text-sm'>
                <h2 className='text-lg font-black uppercase tracking-wide'>Hi! I'm Mark</h2>
                <h1 className='text-3xl font-black mb-1 text-orange-500'>I am a Software Developer</h1>
                <p className='font-medium'>I'm passoniate in both web and mobile development</p>
                <div className='mt-1 flex gap-1 text-sm text-gray-500 font-medium'>
                <p className='go-missing'>&#128512;</p>{`Mark is typing...`.split(" ").map(w => <p className='typing' key={w}>{w}</p>)}
                </div>
                <div className='skills hidden mt-2'>
                    <div className='md:w-[40%] w-1/2 grid grid-cols-4 gap-1.5'>
                      {skills.map(skill => {
                        return <div key={skill.name} className="text-xs font-medium cursor-pointer ">
                          <div className='rounded-full p-2.5 bg-main border border-main hover:bg-gradient-to-tr from-orange-500 to-main transition-all duration-200'>
                            <img src={skill.icon} className="object-cover object-center aspect-square" />
                          </div>
                          {/* <h1 className='mt-1 bg-green-100 text-center'>{skill.name}</h1> */}
                        </div>
                      })}
                    </div>
                </div>
              </div>
        
           </section>
            <section className="right-hero flex items-center justify-center relative overflow-hidden">
                <video ref={videoRef} autoPlay muted playsInline={true} key={landingVideo} className="rounded-full w-[90%] p-2">
                    <source src={landingVideo} type="video/mp4" />
                </video>
            </section>
          </div>
        
    </section>
  )
}

export default Landing
