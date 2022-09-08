import mainUser from "./libs/mainUser";
import mainPic from "./libs/mainPic";

const Main = () => {
	return (
		<main className='main'>
			{mainPic()}
			{mainUser()}
		</main>
	)
}

export default Main;
