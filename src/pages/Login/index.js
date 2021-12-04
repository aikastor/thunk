import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction, loginAction } from "../../store/actions/auth";

const LoginPage = () => {
	const dispatch = useDispatch();
	const {login} = useSelector((state)=> state.auth);
	const [form, setForm] = useState({username: "", password: ""});

	useEffect(()=> {
		console.log("use effect");
		dispatch(getProfileAction())
	}, [dispatch])

	const handleChange =(e)=> {
		const {name, value} = e.target;
		setForm((prev)=> ({...prev, [name]: value}));
	}

	const handleSubmit =(e)=> {
		e.preventDefault();
		dispatch(loginAction(form))
	}

	return(
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
			<input
				type="text"
				name="username"
				value={form.username}
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				value={form.password}
				onChange={handleChange}
			/>
			{login.failed && <div>Error: {login.error}</div>}
			<button
				type="submit"
				disabled={login.loading}
			> 
				{login.loading ? "Loading.." : "Log in"}
			</button>
		</form>
	)
}

export default LoginPage;