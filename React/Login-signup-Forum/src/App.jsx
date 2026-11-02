import { useState } from 'react'

import Login from './login.jsx'
import Signup from './signup.jsx'

function App() {
    const [showLogin, setShowLogin] = useState(true)

    return showLogin ? (
        <Login onSwitch={() => setShowLogin(false)} />
    ) : (
        <Signup onSwitch={() => setShowLogin(true)} />
    )
}

export default App