import styles from "@/src/components/ui/button/Button.module.scss";

const Button: React.FC<{id?: string, value: string, classes?: string}> = props => {
    return (
        <button  
            onClick={props.onClick} 
            id={props.id}
            className={styles.button}
        >{props.value}</button>
    );
}

export default Button;