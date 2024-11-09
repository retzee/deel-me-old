import styles from "@/src/components/ui/input/Input.module.scss";

const Input: React.FC<{id?: string, type: string, value?: string, label?: string, classes?: string}> = props => {
    return (
        <div>
            <label htmlFor={props.id} className={styles.label}>
                {props.label}
            </label>
            <input 
                id={props.id} 
                type={props.type} 
                value={props.value}
                onChange={props.onChange}
                className={styles.input_text_field}
            />
        </div>
    );
}

export default Input;