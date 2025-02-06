import { useEffect, useRef } from 'react'

const DetailItem = ({ showDetail, itemId, title, price, imageUrl, description, children }) => {
  const ref = useRef()

  useEffect(() => {
    if (!showDetail) { return }
    const dialog = ref.current
    dialog.showModal()
    return () => {
      dialog.close()
    }
  }, [showDetail])

  return (
    <>
      <dialog ref={ref}>
        <div key={itemId} className='itemDetail'>
          <h2>{title} €{price}</h2>
          <img src={imageUrl} alt=' ' />
          <p>{description}</p>
          {children}
        </div>
      </dialog>
    </>
  )
}

export default DetailItem
