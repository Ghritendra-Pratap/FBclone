//styles fully not included
import Image from "next/image";
function StoryCard({name , profile , src}) {
    return ( 
        <div className='relative h-14 w-14 md:h-20 md:w-20
        lg:h-56 lg:w-32 cursor-pointer overflow-x p-3'>

            <Image className=" opacity-0 lg:opacity-100 rounded-full z-40 top-10 relative"
            src={profile}
            width={40}
            height={40}
            layout="fixed"
            objectFit="cover"
            />
            <Image className="object-cover filter brightness-75
                rounded-full lg:rounded-3xl"
                src={src}
                layout="fill"
            /> 

            
            
            
        </div>
    )
}

export default StoryCard
