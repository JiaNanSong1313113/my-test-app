import Styles from './card.module.scss'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ProgressBar from '@/components/Content/ProgressBar'

type Props = {
  title: string
  icon: string
  info: string
  progressing: number
}

const Card = ({
  title,
  icon,
  info,
  progressing,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <div className={Styles.card}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={Styles.accordionSummary}
        >
          <Typography>
            <div className={Styles.header}>
              <div className={Styles.titleArea}>
                <image className={Styles.image} href={icon} />
                <span>{title}</span>
              </div>
              <div className={Styles.infoArea}>{info}</div>
            </div>
          </Typography>
          <div className={Styles.progressStep}>
            <ProgressBar completed={progressing}></ProgressBar>
          </div>
        </AccordionSummary>
        <AccordionDetails className={Styles.cardDetail}>
          <Typography>
            <div>{children}</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
export default Card
