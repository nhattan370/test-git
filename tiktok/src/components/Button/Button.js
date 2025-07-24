import clsx from 'clsx'
import styles from './Button.module.css'
function Button(){
    return(
        <div>
            <button className={styles.btn}>Click me!</button>
            {/* `${styles.btn} ${styles.active}` */}
            <button className={clsx(styles.btn,{
                                    [styles.active]:true
                                })}>Click me!</button>
        </div>
    )
}
export default Button;