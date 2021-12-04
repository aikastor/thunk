import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDataAction } from "../../store/actions/data";

const HomePage = () => {

	const dispatch = useDispatch();

	useEffect(()=> {
		dispatch(getDataAction())
	}, [dispatch]);

	return(
		<h1>Data</h1>
	)

}

export default HomePage;