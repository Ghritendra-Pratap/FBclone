import { signIn } from "next-auth/client"

function Login() {
    return (
        <div className='grid place-items-center'>
            <image src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="loginImg" 
            height = {400} width = {400}
            objectFit="contain"
            />

            <h1 onClick={signIn} className='p-5 bg-blue-500 text-white rounded-full text-center cursor-pointer'>Login with Facebook</h1>
        </div>
    )
}

export default Login

