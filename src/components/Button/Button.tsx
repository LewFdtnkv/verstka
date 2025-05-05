import { ButtonProps } from '../../types'
import '../../styles.scss'
import './Button.scss'
import { type } from '../../types'

export default function Button({children, onClick, variant}: ButtonProps) {
    function handleClick(e: React.MouseEvent<HTMLDivElement>){
       if(onClick) onClick(e)
    }
  return (
    <div className={`${variant}__info_button`} onClick={handleClick}>{children}{variant!==type.Secondary && <img src="./public/span.qodef-m-arrow.svg" alt="" className={`${variant}__info_button-circle`}/>}</div>
  )
}
