import clsx from 'clsx';
import styles from './Button.module.css'
function ButtonBoostrap(props){
    return(
        <div>
            <button className = {clsx(styles.btn,{[styles.primary]:props.primary})}>Primary</button>
            <button className = {clsx(styles.btn,{[styles.secondary]:props.secondary})}>Secondary</button>
            <button className = {clsx(styles.btn,{[styles.success]:props.success})}>Success</button>
            <button className = {clsx(styles.btn,{[styles.danger]:props.danger})}>Danger</button>
            <button className = {clsx(styles.btn,{[styles.warning]:props.warning})}>Warning</button>
            <button className = {clsx(styles.btn,{[styles.info]:props.info})}>Info</button>
            <button className = {clsx(styles.btn,{[styles.dark]:props.dark})}>Dark</button>
        </div>

    )
}
export default ButtonBoostrap;