import React from 'react'

import Arrow from '../../../assets/images/drop-down-arrow.svg'
import styles from './DropdownArrow.module.scss'

interface DropdownArrowProps {
  clicked: () => void
}

const DropdownArrow: React.FC<DropdownArrowProps> = (props) => {
  return <Arrow className={styles.Arrow} onClick={props.clicked}/>
}

export default DropdownArrow
