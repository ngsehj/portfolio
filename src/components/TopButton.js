import { useState, useEffect } from "react";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    console.log('window.scrollY')

    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    
    window.addEventListener("scroll", handleShowButton)
    return () => {
      window.removeEventListener("scroll", handleShowButton)
    }
  }, [])

  return showButton && (
    <div className="scroll__container" style={{height: "1000px"}}>
      <button id="top" onClick={scrollToTop} type="button"> Top</button>
    </div>
  )
}

export default TopButton;