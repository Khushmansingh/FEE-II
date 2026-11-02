import { useState } from 'react'
import './login.css'

const key = 'forumUsers'

function Login({ onSwitch }) {
	const [form, setForm] = useState({ email: '', password: '' })
	const [message, setMessage] = useState('')

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	function handleSubmit(event) {
		event.preventDefault()
		const savedUsers = JSON.parse(localStorage.getItem(key) || '[]')
		const user = savedUsers.find(
			(savedUser) => savedUser.email === form.email && savedUser.password === form.password,
		)

		setMessage(user ? `Welcome, ${user.name}!` : 'Invalid email or password.')
	}

	return (
		<main className="login-page">
			<h1>Forum Login</h1>
			<form className="login-form" onSubmit={handleSubmit}>
				<label>
					Email
					<input type="email" name="email" value={form.email} onChange={handleChange} required />
				</label>
				<label>
					Password
					<input type="password" name="password" value={form.password} onChange={handleChange} required />
				</label>
				<button type="submit">Login</button>
			</form>

			{message && <p>{message}</p>}
			<p className="switch-text">
				Don't have an account?{' '}
				<button type="button" onClick={onSwitch}>Sign up</button>
			</p>
		</main>
	)
}

export default Login
