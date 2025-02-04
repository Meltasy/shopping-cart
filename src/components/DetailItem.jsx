import { useEffect, useRef } from 'react'

const DetailItem = ({ showDetail, itemDetail, children }) => {
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
        <div key={itemDetail.id} className='itemDetail'>
          <h2>{itemDetail.title} €{itemDetail.price}</h2>
          <img src={itemDetail.image} alt=' ' />
          <p>{itemDetail.description}</p>
          {children}
        </div>
      </dialog>
    </>
  )
}

export default DetailItem
