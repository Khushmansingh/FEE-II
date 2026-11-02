import { useState } from 'react'
import './signup.css'

const key = 'forumUsers'

function Signup({ onSwitch }) {
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	const [users, setUsers] = useState(() => {
		const savedUsers = localStorage.getItem(key)
		return savedUsers ? JSON.parse(savedUsers) : []
	})
	const [message, setMessage] = useState('')

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	function handleSubmit(event) {
		event.preventDefault()

		if (form.password !== form.confirmPassword) {
			setMessage('Passwords do not match.')
			return
		}

		const newUser = {
			name: form.name,
			email: form.email,
			password: form.password,
		}
		const updatedUsers = [...users, newUser]

		localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUsers))
		setUsers(updatedUsers)
		setForm({ name: '', email: '', password: '', confirmPassword: '' })
		setMessage('Signup successful.')
	}

	return (
		<main className="signup-page">
			<h1>Forum Signup</h1>
			<form className="signup-form" onSubmit={handleSubmit}>
				<label>
					Name
					<input name="name" value={form.name} onChange={handleChange} required />
				</label>
				<label>
					Email
					<input type="email" name="email" value={form.email} onChange={handleChange} required />
				</label>
				<label>
					Password
					<input type="password" name="password" value={form.password} onChange={handleChange} required />
				</label>
				<label>
					Confirm password
					<input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
				</label>
				<button type="submit">Sign up</button>
			</form>

			{message && <p>{message}</p>}

			<p className="switch-text">
				Already have an account?{' '}
				<button type="button" onClick={onSwitch}>Login</button>
			</p>
		</main>
	)
}

export default Signup
