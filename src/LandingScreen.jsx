import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Slika from './assets/10i.png'
import Video from './assets/web.mp4'
import './index.css'


function LandingScreen() {
    // #930415
    return (
        <div className="w-screen h-screen font-RS bg-red-200">
            <div className="igraona h-full w-full bg-[#161616] relative" style={{
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


            <div className="w-[120%] h-[120%] relative flex justify-center items-center bg-[#161616] overflow-hidden transform rotate-[-3deg] origin-bottom-left">
                <video
                    src={Video}
                    type="video/mp4"
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="absolute w-full h-[120%] object-cover z-0 mask-video transform translate-x-[-15%] translate-y-[-10%]"
                />
                <div className='absolute w-[40%] h-[100%] flex left-96 text-center justify-center flex-col text-white transform rotate-[3deg]'>
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


            <div className="bg-black w-[120%] image2-gradient h-[70vh] border-gradient flex justify-center items-center relative bottom-16 z-10 transform rotate-[-3deg] origin-top -left-[10%]">

                <p className="text-white w-96 text-lg rotate-[3deg]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste provident officia velit vitae blanditiis amet...
                </p>
            </div>




            <div className="w-full h-[100%] image-gradient relative bottom-32">

                <div className="w-full h-[100%] relative flex pt-52 items-center justify-evenly">
                </div>



                <div className="w-full h-[50%] flex justify-evenly items-center background-gradient">


                    <div className='w-96 h-80 bg-green-800'>
                        Zamisli da je ovo mapa
                    </div>
                </div>

                <footer className='bg-slate-300 w-full h-[35%] flex justify-evenly items-center background-gradient'>
                    <div className='flex gap-36'>
                        <div className=' text-white text-xl inline space-x-2'>
                            <div>
                                <h3>IGRAONA IGRAONA</h3>
                                <p>Najbolja igraona u univerzumu i šire</p>
                            </div>
                            <a href="">
                                <FacebookIcon fontSize='large' />
                            </a>
                            <a href="">
                                <InstagramIcon fontSize='large' />
                            </a>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-twitch" viewBox="0 0 16 16" className='mt-1 ml-0.5 inline' >
                                    <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z" />
                                    <path d="M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z" />
                                </svg>
                            </a>
                        </div>


                        <div className='flex flex-col text-white text-xl'>
                            <p>Broj: 123456789</p>
                            <p>Email: a@gmail.com</p>
                            <p>Adresa: igraona st.</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </footer>
            </div>
        </div>
    )
}

export default LandingScreen