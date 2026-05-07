import React, { useState } from "react";
import axios from "axios";

const Signup = () => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:8080/api/v1/user/register",
                {
                    fullname,
                    email,
                    password
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            );

            alert(res.data.message);

            setFullname("");
            setEmail("");
            setPassword("");

        } catch (error) {

            alert(
                error?.response?.data?.message ||
                error.message
            );
        }
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f1f3f4",
                fontFamily: "Arial"
            }}
        >

            <form
                onSubmit={submitHandler}
                style={{
                    backgroundColor: "white",
                    padding: "40px",
                    borderRadius: "12px",
                    width: "360px",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px"
                }}
            >

                <div
                    style={{
                        textAlign: "center"
                    }}
                >
                    <img
                        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
                        alt="gmail"
                        style={{
                            width: "120px",
                            marginBottom: "10px"
                        }}
                    />

                    <h2
                        style={{
                            margin: 0,
                            color: "#202124"
                        }}
                    >
                        Create Account
                    </h2>

                    <p
                        style={{
                            color: "#5f6368",
                            fontSize: "14px"
                        }}
                    >
                        Signup to continue
                    </p>
                </div>

                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                    style={inputStyle}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={inputStyle}
                />

                <button
                    type="submit"
                    style={{
                        backgroundColor: "#1a73e8",
                        color: "white",
                        border: "none",
                        padding: "12px",
                        borderRadius: "8px",
                        fontSize: "16px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    Signup
                </button>

                <p
                    style={{
                        textAlign: "center",
                        fontSize: "14px",
                        color: "#5f6368"
                    }}
                >
                    Already have an account?{" "}
                    <span
                        style={{
                            color: "#1a73e8",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        Login
                    </span>
                </p>

            </form>

        </div>
    );
};

const inputStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #dadce0",
    fontSize: "15px",
    outline: "none"
};

export default Signup;