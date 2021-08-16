import { signIn } from "next-auth/client"
import Image from "next/image"

function Login() {
    return (
        <div className='grid place-items-center'>
            <Image src="/assets/facebook.png" alt="loginImg" 
            height = {400} width = {400}
            objectFit="contain"
            />

            <h1 onClick={signIn} className='p-5 bg-blue-500 text-white rounded-full text-center cursor-pointer'>Login with Facebook</h1>
        </div>
    )
}

export default Login

