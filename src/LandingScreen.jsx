import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Slika from './assets/10i.png'
import Video from './assets/web.mp4'
import './index.css'


function LandingScreen() {
    // #930415
    return (
        <div className="w-screen h-screen font-RS bg-red-200">
            <div className="igraona h-[120%] w-full bg-[#161616] relative" style={{
                backgroundImage: `url(${Slika})`,
                backgroundSize: "cover",
                backgroundPosition: "calc(50%) center",
                backgroundRepeat: "no-repeat",
            }}>
                <div className="w-full h-full flex flex-col justify-center items-center text-center gap-6">
                    <div>
                        <h1 className="text-[#8D151F] text-8xl font-[1000]">IGRAONA IGRAONA</h1>
                        <h2 className="text-white text-8xl font-[1000]">TURNIR TURNIRA 4</h2>
                    </div>
                    <div className="w-96 h-[1px] bg-white"></div>

                    <button type="button" className="button">
                        <div className="img-back"></div>
                        <div className="text">PRIJAVI SE</div>
                    </button>
                </div>

            </div>


            <div className="w-[140%] h-[120%] relative flex justify-center bottom-16 items-center bg-[#161616] overflow-hidden transform rotate-[-3deg] origin-bottom-left">
                <video
                    src={Video}
                    type="video/mp4"
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="absolute w-full h-[140%] object-cover z-0 mask-video transform translate-x-[-15%] translate-y-[-10%]"
                />
                <div className='absolute w-[40%] h-[100%] flex left-80 text-center justify-center flex-col text-white transform rotate-[3deg]'>
                    <h1 className='text-5xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                    <p className='text-3xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse nemo laborum magnam dolores neque mollitia quo sed,
                        quibusdam numquam itaque dolorem adipisci,
                        sit accusantium delectus,
                        beatae praesentium saepe dolor doloribus?
                    </p>
                </div>
            </div>


            <div className="bg-black w-[120%] image2-gradient h-[75vh] border-gradient flex justify-center items-center relative bottom-28 z-10 transform rotate-[-3deg] origin-top -left-[10%]">

                <p className="text-white w-96 text-lg rotate-[3deg]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste provident officia velit vitae blanditiis amet...
                </p>
            </div>




            <div className="w-full h-[100%] image-gradient relative bottom-32">

                <div className="w-full h-[100%] relative flex pt-52 items-center justify-evenly">
                </div>



                <div className="w-full h-[50%] flex justify-evenly items-center background-gradient">


                    <div className='w-[90%] h-80 bg-green-800 mb-2'>
                        Zamisli da je ovo mapa
                    </div>
                </div>

                <div className="image3-gradient w-full h-[400px] bg-gradient-to-b from-transparent to-black bg-cover bg-center flex justify-evenly items-center">
                    <div className='flex gap-36 relative '>
                        <div className=' text-white text-xl inline '>
                            <div className='w-72'>
                                <h3 className='font-bold mb-2'>Igraona Igraona</h3>
                                <p className='text-lg'>Najbolja igraona u univerzumu i šire Lorem ipsum dolor sit, amet consecpti autem neque optio nisi.</p>
                            </div>
                            <div className='flex space-x-2 mt-3'> {/* Promjena: dodana flex klasa */}
                                <a href="">
                                    <FacebookIcon fontSize='large' />
                                </a>
                                <a href="">
                                    <InstagramIcon fontSize='large' />
                                </a>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-twitch" viewBox="0 0 16 16" className='mt-1 ml-0.5'>
                                        <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z" />
                                        <path d="M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z" />
                                    </svg>
                                </a>
                            </div>
                        </div>


                        <div className='flex flex-col text-white text-xl'>
                            <h3 className='mb-2 font-bold'>KONTAKT</h3>
                            <div className='inline'>
                                <CallIcon fontSize='large' />  123456789
                            </div>
                            <div className='inline'>
                                <EmailIcon fontSize='large' />  a@gmail.com
                            </div>
                            <div className='inline'>
                                <LocationOnIcon fontSize='large' />  Igraona
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default LandingScreen