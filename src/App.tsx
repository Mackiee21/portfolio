import Header from "./components/Header";
import Landing from "./components/Landing";
import { useEffect, useRef, useState } from 'react'


function App() {

  const headerRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  const [heroHeight, setHeroHeight] = useState<number>(0)

  useEffect(() => {
    if(headerRef.current && mainRef.current){
      mainRef.current.style.height = `calc(100dvh - ${headerRef.current.clientHeight}px)`
      setHeroHeight(mainRef.current.clientHeight)
    }
  }, [])

  return(
    <div className="h-dvh">
      <Header ref={headerRef} />
      <main ref={mainRef}  className="overflow-y-auto">
        <Landing height={heroHeight} />
      </main>
      
    </div>
  );
}

export default App
