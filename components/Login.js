import { signIn } from "next-auth/client"
import Image from "next/image"

function Login() {
    return (
        <div className='grid place-items-center p-20'>
            <Image src="/assets/facebook.png" alt="loginImg" 
                height = {350} width = {350} 
                objectFit="contain"
            />
            <div className= 'p-5'></div>
            <h1 onClick={signIn} className='p-5 bg-blue-500 text-white rounded-full text-center cursor-pointer  '>Login with Facebook</h1>
        </div>
    )
}

export default Login

