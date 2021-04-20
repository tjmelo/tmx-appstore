import message from './messages.module.css';

export const Messages = ({children}) => {
    return(
        <article className={message.box}>
            {children}
        </article>
    )
}