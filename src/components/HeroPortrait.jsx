import profilePortrait from '../assets/1757711835739.jpg'

function HeroPortrait() {
  return (
    <figure className="portrait-card">
      <div className="portrait-card__frame">
        <div className="portrait-card__image-shell">
          <img
            className="portrait-card__photo"
            src={profilePortrait}
            alt="Portrait of Muhammad Husnain Ashraf"
          />
        </div>
      </div>
    </figure>
  )
}

export default HeroPortrait
