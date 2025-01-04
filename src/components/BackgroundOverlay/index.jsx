import './styles.css'

const BackgroundOverlay = ({overlay}) => {

  if (overlay) {
    document.body.style.overflow = "hidden";
  }  
  
  return (
        <div className={`backgroundOverlay__container ${overlay ? "fadeIn" : "fadeOut"}`}
          onAnimationEnd={(e) => {
            if (!overlay) {
              e.target.classList.add('hidden');
              document.body.style.overflow = "auto";
            }
          }}
        />
    )
}

export default BackgroundOverlay