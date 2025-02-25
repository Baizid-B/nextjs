"use client";

const register = () => {
    const handleRegister = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const password = form.password.value;
        const payload = {username, password};
        console.log("Registration payload", payload);
        form.reset()
    }
    return (
        <form onSubmit={handleRegister} className="space-y-4">

            {/* username */}
            <label htmlFor="username" className="block">UserName</label>
            <input 
                type="text" 
                name="username" 
                id="username" 
                placeholder="Enter uniqe username"
                className="block p-1 text-black border-2"
            />

            {/* password */}
            <label htmlFor="password" className="block">Password</label>
            <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter uniqe password"
                className="block p-1 text-black border-2"
            />

            <button className="outline">Register</button>
        </form>
    );
};

export default register;