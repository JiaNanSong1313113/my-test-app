// import Button from '@mui/material-next/Button'; 
import Styles from './header.module.scss';

type Props = {
  title: string
}

 const Header = ({ title }: Props)=>{
  return (
   <div className={Styles.header}>
    {title?title:"クリプタクトで計算を始めてみましょう"}
   </div>
  )
 }
 export default Header