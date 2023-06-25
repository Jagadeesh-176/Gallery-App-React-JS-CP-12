// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {listDetails, updateActiveImgId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = listDetails

  const onUpdate = () => {
    updateActiveImgId(id)
  }

  const activeImgClassName = isActive ? 'active-class' : ''

  return (
    <li>
      <button
        type="button"
        onClick={onUpdate}
        className={`button ${activeImgClassName}`}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-img"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
