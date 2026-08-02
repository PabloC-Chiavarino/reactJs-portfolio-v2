import { useState, useEffect } from 'react'

const useSectionObserver = (sectionsRefs) => {
  const [predominantSection, setPredominantSection] = useState(null)

  useEffect(() => {
    const sections = sectionsRefs.map(section => section.current)

    if (sections.some(section => !section)) return

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setPredominantSection(entry.target.id)
        }
      })
    }, {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: [0]
    })

    sections.forEach(section => {
      sectionObserver.observe(section)
    })

    return () => sectionObserver.disconnect()
  }, [])

  return predominantSection
}

export default useSectionObserver
