import { useEffect, useState } from 'react'

const useWgrObserver = (predominantSection, scrollDirection, wgrRef) => {
  const [wgrLocation, setWgrLocation] = useState('mainInfo')

  useEffect(() => {
    if (!predominantSection || predominantSection === null) return

    const wgr = wgrRef.current

    // console.log("wgr ref:", wgr) // debugging
    // console.log("scrollDirection:", scrollDirection) // debugging
    if (!wgr) return

    const wgrObserver = new IntersectionObserver(entries => {
      const newLocation = predominantSection

      if (newLocation !== wgrLocation) {
        setWgrLocation(newLocation)
        // console.log("New wgr location:", newLocation); // debugging
      }
    }, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0]
    })

    if (wgr) {
      wgrObserver.observe(wgr)
    }

    return () => wgrObserver.disconnect()
  }, [predominantSection])

  return { wgrLocation, scrollDirection, predominantSection }
}

export default useWgrObserver
