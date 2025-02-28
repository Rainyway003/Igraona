import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Slika from './assets/10i.png'
import Video from './assets/web.mp4'
import './index.css'

function LandingScreen() {
    // #930415
    return (
        <div className="w-screen h-screen font-RS">
            <div className="h-full w-full bg-slate-800" style={{
                backgroundImage: `url(${Slika})`,
                backgroundSize: "cover",
                backgroundPosition: "calc(50%) center",
                backgroundRepeat: "no-repeat",
            }}>
                <div className="w-full h-full flex flex-col justify-center items-center text-center gap-6">
                    <div>
                        <h2 className="text-white text-4xl">Turnir 4</h2>
                        <h1 className="text-white text-8xl font-[1000]">IGRAONA</h1>
                        <h1 className="text-gray-300 text-2xl">Najbolja
                            <span className="text-[#8D151F] text-8xl p-2 italic">IGRAONA</span>
                            u svijetu <br /> i šire</h1>
                    </div>
                    <div className="w-96 h-[1px] bg-white"></div>
                    <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-1 focus:ring-red-300 relative left-1 font-medium text-lg rounded-lg px-5 py-2.5 me-2 mt-2 mb-2 dark:bg-red-800 dark:hover:bg-red-900 focus:outline-none dark:focus:ring-red-900">PRIJAVI SE</button>
                </div>
            </div>


            <div className="w-full h-screen relative flex justify-center items-center bg-black overflow-hidden">
                <video
                    src={Video}
                    type="video/mp4"
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className='absolute w-[40%] h-[100%] flex items-center justify-center flex-col text-white text-center'>
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
                    <img src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/473800326_1030011709154770_738760792021761499_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHemf9omrcHcNipWwPWqwUe5cdhkR3ea3jlx2GRHd5reH-tDLn_IgSFYDjho8v6J5WIHWNUmfbXIbO50fjkM4ZT&_nc_ohc=0_rJyUdxYskQ7kNvgF3pAyI&_nc_oc=AdhyiOUwg6pO5rMT_puLWb7X4nu2xaYVMr-EUek3WG9RzJlD6lKg6aI-l2p4YRlmJm4&_nc_zt=23&_nc_ht=scontent.fsjj1-1.fna&_nc_gid=AdGq3HhcLetPwCFfN8F1T7G&oh=00_AYALDEXX5Di61NjPiVvVW4bJ0DZGmpEPa4D3B00PHH4m4A&oe=67C6854C"
                        className='w-96 h-96 ml-40 shadow-2xl shadow-black' />
                    <p className="text-white w-96 mr-40">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quasi eius quas, dicta sint quia sequi odit omnis optio,
                        expedita non maxime aspernatur provident doloribus voluptatem,
                        est similique autem officiis fugiat!
                        Quidem tempore tempora dolore qui ratione eveniet doloremque dolores molestias reiciendis voluptate cum ipsam numquam assumenda saepe,
                    </p>
                </div>


                <div className="w-full h-[50%] flex justify-evenly items-center background-gradient rotate-[0deg] relative">

                    <div className='flex gap-36'>
                        <div className='flex flex-col text-white text-xl'>
                            <a href="">
                                <FacebookIcon fontSize='large' /> Facebook
                            </a>
                            <a href="">
                                <InstagramIcon fontSize='large' /> Instagram
                            </a>
                            <a href="">
                                <TwitterIcon fontSize='large' /> Twitter
                            </a>
                        </div>
                        <div className='flex flex-col text-white text-xl'>
                            <p>Broj: 123456789</p>
                            <p>Email: a@gmail.com</p>
                            <p>Adresa: igraona st.</p>
                        </div>
                    </div>
                    <div className='w-96 h-80 bg-green-800'>
                        Zamisli da je ovo mapa
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingScreen