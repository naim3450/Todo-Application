import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const Account = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout, isAuthenticated, user } = useAuth0();

    return (
        <>
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-center text-gray-800">Awesome Todo List</h1>
            </header>

            <div className="flex justify-end space-x-4 mb-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    {isAuthenticated ? user.name : <a href='https://dev-0gij8deadpto4fnr.us.auth0.com/u/signup?state=hKFo2SBJUk1RVklqdkFZR3ZnMEQySGFJUUZPQndBNFlJUXNCS6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGpuYS1DM2pyNVp6ZTlhY29GNWdLWVE4aEFtdWlrc1Rto2NpZNkgMkhQSVJXdVNodEtLTGV5Ym1LWDZSUGlPcDBnWDJSYkM'>Sing Up</a>}
                </button>
                {
                    isAuthenticated ? <button onClick={() => logout()} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                        Log Out
                    </button> : <button onClick={() => loginWithRedirect()} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                        Login
                    </button>
                }

            </div>
        </>
    )
}

export default Account