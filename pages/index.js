import Head from 'next/head'

// Imports de ícones
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

// Imports de imagens
import Image from "next/image";
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ReactJS Portifolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Dev Portifolio</h1>

            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Renan Fachin</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>JR. Front-End Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-80 md:text-lg max-w-xl mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet hendrerit velit eget iaculis. Cras urna metus, rutrum non lacus eget, tristique blandit turpis. Donec euismod libero ut iaculis dictum. Nulla facilisi. Morbi non dignissim sapien, sed hendrerit urna. Etiam mi eros, cursus id ante ac, ultrices condimentum tortor.
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-14 py-3 text-gray-600 md:text-6xl'>
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillInstagram />
          </div>

        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Skills</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet hendrerit velit eget iaculis. Cras urna metus, <span className='text-teal-500'>rutrum</span> non lacus eget, tristique blandit turpis. Donec euismod <span className='text-teal-500'>rutrum</span> ut iaculis dictum. Nulla facilisi. Morbi non dignissim sapien, sed hendrerit urna. Etiam mi eros, cursus id ante ac, ultrices condimentum tortor.
            </p>

            <p className='text-md py-2 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet hendrerit velit eget iaculis. Cras urna metus, <span className='text-teal-500'>rutrum</span> non lacus eget, tristique blandit turpis.
            </p>
          </div>

          <div className='lg:flex gap-10'>
            {/* Design */}
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={design} width={100} height={100} className='inline'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beatiful Designs</h3>
              <p className='py-2'>
                Crating elegant designs suited for your needs design theory....
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
            </div>

            {/* Code */}
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={code} width={100} height={100} className='inline'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beatiful Designs</h3>
              <p className='py-2'>
                Crating elegant designs suited for your needs design theory....
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
            </div>

            {/* Consulting */}
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={consulting} width={100} height={100} className='inline'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beatiful Designs</h3>
              <p className='py-2'>
                Crating elegant designs suited for your needs design theory....
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>PortFolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet hendrerit velit eget iaculis. Cras urna metus, <span className='text-teal-500'>rutrum</span> non lacus eget, tristique blandit turpis. Donec euismod <span className='text-teal-500'>rutrum</span> ut iaculis dictum. Nulla facilisi. Morbi non dignissim sapien, sed hendrerit urna. Etiam mi eros, cursus id ante ac, ultrices condimentum tortor.
            </p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>

        </section>

      </main>
    </div>
  )
}
