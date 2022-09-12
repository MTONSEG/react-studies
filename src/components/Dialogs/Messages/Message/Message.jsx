import cls from './Message.module.scss';

const Message = (props) => {
	return (
			<div className={cls.message}>
				{props.message}
			</div>
	);
}

export default Message;