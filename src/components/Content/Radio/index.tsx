import Styles from './radio.module.scss'
import East from '@mui/icons-material/East'
import Button from '@mui/material/Button'

type Props = {
  label: string
  info: string
  btnName: string
  tag: string
  selected: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onButtonClick: () => void
}

const Radio = ({
  label,
  info,
  btnName,
  tag,
  selected,
  onChange,
  onButtonClick,
}: Props) => {
  return (
    <div className={Styles.radioContainer}>
      <label className={Styles.radioInner}>
        <div className={Styles.radioArea}>
          <input type="radio" checked={selected} onChange={onChange} />
        </div>
        <div className={Styles.labelArea}>
          <p className={Styles.label}>{label}</p>
          <p className={Styles.tag}>{tag}</p>
          <p className={Styles.info}>{info}</p>
        </div>
      </label>
      <div>
        <Button
          className={Styles.btn}
          variant="contained"
          endIcon={<East />}
          onClick={onButtonClick}
        >
          {btnName}
        </Button>
      </div>
    </div>
  )
}
export default Radio
