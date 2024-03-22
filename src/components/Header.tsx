import { forwardRef, useRef } from 'react'
import { Home, GraduationCap, CodeXml, Phone, ArrowLeftIcon, MenuIcon } from 'lucide-react'
import { myProfile } from '../utils/index'

const Header = forwardRef<HTMLDivElement>((_, ref) => {
  const mobileNavRef = useRef<HTMLDivElement | null>(null)

  function inaMo(e: MouseEvent){
      if(!mobileNavRef.current?.contains(e.target as Node)){
        mobileNavRef.current?.classList.remove("slide")
        window.removeEventListener("click", inaMo)
      }
  }


  const handleControlNav = () => {
    if(mobileNavRef.current){
       if(mobileNavRef.current.classList.contains("slide")){
          mobileNavRef.current.classList.remove("slide")
          window.removeEventListener("click", inaMo)
       }else{
          mobileNavRef.current.classList.add("slide")
          setTimeout(() => {window.addEventListener('click', inaMo)}, 100)
       }
    }
  }

  return (
    <header ref={ref} className="z-[999] flex items-center justify-between md:py-3 py-3.5 md:px-14 px-4 bg-sky-900 text-white font-normal text-sm">
      <div>
        <div>
          <h1 className='md:text-xl text-base font-black md:leading-5 leading-4'>Mackiee&#128568;</h1>
          <a href='https://github.com/Mackiee21' target="_blank" className='text-zinc-200 md:text-sm text-xs'>@mackiee.github.com</a>
        </div>
      </div>

      <nav>
        <ul className="md:flex items-center hidden gap-5">
            <li>Home</li>
            <li>Education</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </nav>
      <button onClick={handleControlNav} className='md:hidden block'>
        <MenuIcon size={30}  />
      </button>

      {/**for mobile nav */}
      <nav ref={mobileNavRef} className='md:hidden mobile-nav overflow-y-auto fixed right-0 translate-x-full transition-all duration-200 bg-slate-50 top-0 bottom-0'>
        <div className='flex items-center border-b-[1.5px] pb-2'>
          <img className='w-9 aspect-square object-cover object-center rounded-full border-2 border-slate-400' src={myProfile} alt='picture' />
          <div className='flex-1 ms-2'>
            <h1 className='leading-5 text-base tracking-wide font-semibold text-sky-800'>Mackiee</h1>
            <a className='text-sm text-gray-600 pe-6'>@mackiee.github.com</a>
          </div>
        </div>
        <div onClick={handleControlNav} className='mt-4 py-2.5 px-5 cursor-pointer rounded-lg bg-sky-900 flex items-center'>
            <ArrowLeftIcon size={17} color={'rgb(255 255 255)'} />
            <p className='text-white flex-1 text-center'>Close</p>
        </div>
        <ul className='mt-3'>
            <li className='flex items-center gap-2.5'>
              <Home size={17} color={'rgb(249 115 22)'} />
              <a>Home</a>
            </li>
            <li className='flex items-center gap-2.5'>
              <GraduationCap size={17} color={'rgb(249 115 22)'} />
              <a>Education</a>
            </li>
            <li className='flex items-center gap-2.5'>
              <CodeXml size={17} color={'rgb(249 115 22)'} />
              <a>Projects</a>
            </li>
            <li className='flex items-center gap-2.5'>
              <Phone size={17} color={'rgb(249 115 22)'} />
              <a>Contact</a>
            </li>
        </ul>
      </nav>
    </header>
  )
})

export default Header
