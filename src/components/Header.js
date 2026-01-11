import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)
    const signOutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });

    }
    return (
        <div className="z-10 w-full absolute px-8 py-2 bg-gradient-to-b from-black flex items-center justify-between">
            <img
                className="w-44"
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
            {user && <div className="flex items-center text-white">
                {/* <img className="h-10 w-10" src="https://i.pinimg.com/736x/ec/74/7a/ec747a688a5d6232663caaf114bad1c3.jpg" alt="" /> */}
                <img className="h-10 w-10" src={user?.photoURL} alt="" />
                <el-dropdown class="inline-block">
                    <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-white">
                        {user?.displayName}
                        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                            <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                    </button>

                    <el-menu anchor="bottom end" popover class="m-0 w-56 origin-top-right rounded-md bg-gray-800 p-0 outline outline-1 -outline-offset-1 outline-white/10 transition [--anchor-gap:theme(spacing.2)] [transition-behavior:allow-discrete] data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                        <div class="py-1">
                            <button onClick={signOutHandler} type="submit" class="block w-full px-4 py-2 text-left text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-none">Sign out</button>
                        </div>
                    </el-menu>
                </el-dropdown>
            </div>}
        </div>
    )
}

export default Header
