import './styles.css'

const BackgroundOverlay = ({overlay}) => {

  if (overlay) {
    document.body.style.overflow = "hidden";
  }  
  
  return (
        <div className={`backgroundOverlay__container ${overlay ? "fadeIn" : "fadeOut"}`}
          style={{ display: overlay ? "flex" : null }}
          onAnimationEnd={(e) => {
            if (!overlay) {
             e.target.style.display = "none";
             document.body.style.overflow = "auto";
            }
          }}
        />
    )
}

export default BackgroundOverlay