import './styles.css'

const BackgroundOverlay = ({ overlay, handleChatShow }) => {
  if (overlay) {
    document.body.style.overflow = 'hidden'
  }

  return (
    <div
      className={`backgroundOverlay__container ${overlay ? 'fadeIn' : 'fadeOut'}`}
      onClick={handleChatShow}
      onAnimationEnd={(e) => {
        if (!overlay) {
          e.target.classList.add('hidden')
          document.body.style.overflow = 'hidden auto'
        }
      }}
    />
  )
}

export default BackgroundOverlay
