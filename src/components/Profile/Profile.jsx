import cls from './Profile.module.css'
import mainUser from "./libs/mainUser";
import mainPic from "./libs/mainPic";
import Posts from '../Posts/Posts';

const Main = () => {
	return (
		<main className={cls.main}>
			{mainPic()}
			{mainUser()}
			<Posts/>
		</main>
	)
}

export default Main;
