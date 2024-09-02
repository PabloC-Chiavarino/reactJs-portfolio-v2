import { useState, useEffect } from 'react'

const useSectionObserver = (sectionsRef, initialLoad) => {

    const [predominantSection, setPredominantSection] = useState(null)

    useEffect(() => {

        const sections = sectionsRef.map(section => section.current)

        if (sections.some(section => !section)) return

        const sectionObserver = new IntersectionObserver(entries => {
            
            let newPredominantSection = predominantSection

            entries.forEach(entry => {
                //console.log("IntersectionObserver Entry:", entry) // debugging
                if (entry.isIntersecting) {
                    newPredominantSection = entry.target.id
                    console.log("Intersecting section:", entry.target.id);// debugging
                }
            })
                
            if (initialLoad.current) {
                
                initialLoad.current = false
            } else {
                setPredominantSection(newPredominantSection)
            }

        }, {
            root: null,
            rootMargin: "-15% 0px -15% 0px",
            threshold: [0.65]
        })

        sections.forEach(section => {
            sectionObserver.observe(section)
        })

        return () => sectionObserver.disconnect()

    }, [predominantSection])

    return predominantSection
}

export default useSectionObserver