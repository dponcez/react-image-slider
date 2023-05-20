import React, {useState, useEffect, useRef, useCallback} from 'react'
import { ChevronLeftButton } from '../ChevronLeftButton/ChevronLeftButton'
import { ChevronRightButton } from '../ChevronRightButton/ChevronRightButton'
import "../../styles/ImageSlider.scss";

const ImageSlider = ({slides}) => {
  const timerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const length = slides.length;
  const {url, title, userName, userLink, hostName, hostLink} = slides[currentIndex]
  
  const handleNextButton = useCallback(() => {
    const newCurrentIndex = currentIndex;
    const lastSlide = (newCurrentIndex === length - 1) ? 
      0 : 
      newCurrentIndex + 1;
    setCurrentIndex(lastSlide)
  }, [currentIndex, slides])

  const handlePreviousButton = () => {
    const newCurrentIndex = currentIndex;
    const firstSlide = (newCurrentIndex === 0) ? 
      length - 1 : 
      currentIndex - 1;
    setCurrentIndex(firstSlide)
  }
  
  const handleDotClick = (slideIndex) => setCurrentIndex(slideIndex)

  useEffect(() => {
    if(timerRef.current) clearTimeout(timerRef.current)
    
    try {
      if(!loading) setLoading(true);
      timerRef.current = setTimeout(() => {
        handleNextButton()
      }, 2000)
      
    }catch(error){
      if(error) setError(error)
      console.log(error.message);
    }

    return () => {
      if(!Array.isArray(slides) || length <= 0) return null;
      clearTimeout(timerRef.current)
    }
  }, [handleNextButton])

  // if(!loading) return 'Loading...'
  if(error) return 'Something went wrong!'

  return (
    <>
      <div className="slider--container">
        <div className="button--container">
          <ChevronLeftButton onClick={handlePreviousButton}/>
        </div>
        <div className="items">
          <figure>
            {!loading && <p className='loading'>loading...</p>}
            <div className='image--container'>
              <img
                className="image"
                src={url}
                alt={title}
              />
            </div>
            <figcaption className="description--container">
              <p className="status description--name" data-title="status">
                {title}
              </p>
              <p className="status description" data-info="anchor">
                Photo by{" "}
                <a href={userLink}>
                  {userName}
                </a>{" "}
                on{" "}
                <a href={hostLink}>
                  {hostName}
                </a>
              </p>
            </figcaption>
          </figure>
          <div className="dots--container">
            {slides.map((slide, index) => (
              <div className="dots--slider" key={index}>
                <span className="dots" onClick={() => handleDotClick(index)}>
                  .
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="button--container">
          <ChevronRightButton onClick={handleNextButton}/>
        </div>
      </div>
    </>
  );
}

export { ImageSlider }