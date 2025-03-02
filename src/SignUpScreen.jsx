import { Form, redirect } from 'react-router';
import Slika from './assets/10i.png';
import { signUpTeam } from './firebase/firebaseDatabase';
import FormInput from './components/forms/FormInput';
import StarIcon from '@mui/icons-material/Star';
import './index.css';

export const SignUpScreenAction = async ({ request }) => {
    const formData = await request.formData()
    const TeamName = formData.get("TeamName")
    const number = formData.get('number')
    const Player1 = formData.get('Player1')
    const Player2 = formData.get('Player2')
    const Player3 = formData.get('Player3')
    const Player4 = formData.get('Player4')
    const Player5 = formData.get('Player5')
    const Player6 = formData.get('Player6')

    try {
        await signUpTeam(TeamName, number, Player1, Player2, Player3, Player4, Player5, Player6)
        return redirect('/')
    } catch (err) {
        console.log(err)
    }
}


function SignUpScreen() {



    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-8" style={{
            backgroundImage: `url(${Slika})`,
            backgroundSize: "cover",
            backgroundPosition: "calc(50%) center",
            backgroundRepeat: "no-repeat",
        }}>
            <h1 className='sm:text-5xl text-2xl font-extrabold'>Prijava za <span className='text-[#8D151F]'>TURNIR TURNIRA 4</span>
            </h1>
            <Form method="post" className='flex flex-col items-center w-[50%] gap-3'>
                <FormInput placeholder={'Ime tima'} name={'TeamName'} className={'lg:!w-[32rem] max-sm:!w-80 max-lg:!w-[26rem] max-[800px]:!w-[22rem]'} required={true} children={<StarIcon className='text-[#8D151F]' />} />
                <FormInput placeholder={'Kontakt'} type={'number'} name={'number'} className={'lg:!w-[32rem] max-sm:!w-80 max-lg:!w-[26rem] max-[800px]:!w-[22rem]'} required={true} children={<StarIcon className='text-[#8D151F]' />} />
                <div className='flex max-sm:flex-col lg:flex-row items-center justify-center gap-3'>
                    <div className='flex flex-col gap-3'>
                        <FormInput placeholder={'Igrač 1'} name={'Player1'} required={true} children={<StarIcon className='text-[#8D151F]' />} />
                        <FormInput placeholder={'Igrač 2'} name={'Player2'} required={true} children={<StarIcon className='text-[#8D151F]' />} />
                        <FormInput placeholder={'Igrač 3'} name={'Player3'} required={true} children={<StarIcon className='text-[#8D151F]' />} />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <FormInput placeholder={'Igrač 4'} name={'Player4'} required={true} children={<StarIcon className='text-[#8D151F]' />} />
                        <FormInput placeholder={'Igrač 5'} name={'Player5'} required={true} children={<StarIcon className='text-[#8D151F]' />} />
                        <FormInput placeholder={'Rezerva'} name={'Player6'} />
                    </div>
                </div>
                <button type="submit" className="button sm:!w-[300px] sm:!h-[75px] max-sm:!w-[200px] max-sm:!h-[50px]">
                    <div className="img-back !w-full !h-full"></div>
                    <div className="text max-sm:!text-xs">PRIJAVI SE</div>
                </button>
            </Form>

        </div>
    )
}

export default SignUpScreen