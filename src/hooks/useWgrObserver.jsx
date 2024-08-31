import { useEffect, useState } from 'react';

const useWgrObserver = (predominantSection, wgrRef) => {

    const [wgrLocation, setWgrLocation] = useState('initial')

    useEffect(() => {

        const wgr = wgrRef.current

        //console.log("wgr ref:", wgr) // debugging

        if (!wgr) return;

        const wgrObserver = new IntersectionObserver(entries => {
                        
            const newLocation = predominantSection

                if (newLocation !== wgrLocation) {
                setWgrLocation(newLocation);
                console.log("New wgr location:", newLocation); // debugging
            }
        }, {
            root: null,
            rootMargin: "0px 0px 0px 0px",
            threshold: [0]
        })

        if (wgr) {
            wgrObserver.observe(wgr)
        }

        return () => wgrObserver.disconnect()

    }, [predominantSection])

    return wgrLocation
}

export default useWgrObserver
