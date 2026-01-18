import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidation } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE, USER_AVTAR } from "../utils/constants";
function Login() {
    const dispatch = useDispatch()
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMg] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = (e) => {
        e.preventDefault()
        const error = checkValidation(email.current.value, password.current.value)
        setErrorMg(error)
        if (error) {
            return
        }
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);

                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                        photoURL: USER_AVTAR
                    }).then((user) => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid, email, displayName, photoURL }))
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMg(errorCode + " - " + errorMessage)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMg(errorCode + " - " + errorMessage)

                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in `
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMg(errorCode + " - " + errorMessage)
                });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute w-screen h-screen">
                <img
                    className="h-full w-full"
                    src={BACKGROUND_IMAGE} alt="" />
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm &&
                    <input ref={name} type="text" name="name" id="" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-800" />}
                <input ref={email} type="text" name="email" id="" placeholder="Email or phone number" className="p-2 my-2 w-full bg-gray-800" />
                <input ref={password} type="password" name="password" placeholder="Passwords" id="" className="p-2 my-2 w-full bg-gray-800" />
                {errorMsg && <p className="text-red-600">{errorMsg}</p>}
                <button className="py-2 my-4 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login
