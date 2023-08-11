import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { registerThunk } from "../services/auth-thunks"; // Import the registration thunk

function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // Confirmation password
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            await dispatch(registerThunk({ username, password }));
            navigate("/tuiter/login"); // Redirect to login after successful registration
        } catch (e) {
            alert(e);
        }
    };

    return (
        <div>
            <h1>Register Screen</h1>
            <div className="mt-2">
                <label>Username</label>
                <input className="form-control" type="text" value={username}
                    onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="mt-2">
                <label>Password</label>
                <input className="form-control" type="password" value={password}
                    onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className="mt-2">
                <label>Confirm Password</label>
                <input className="form-control" type="password" value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)} />
            </div>
            <button className="btn btn-primary mt-2"
                onClick={handleRegister}>
                Register
            </button>
        </div>
    );
}

export default RegisterScreen;
