import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string,
  href: string,
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Useful Links",
    link: [ 'Services', 'Technology', 'Career', 'Blogs', 'About us'],
  }
]

const socialLinks: Social[] = [
  { imgsrc: '/images/Footer/insta.svg', href: "https://instagram.com/" },
  { imgsrc: '/images/Footer/dribble.svg', href: "https://dribble.com/" },
  { imgsrc: '/images/Footer/twitter.svg', href: "https://twitter.com/" },
  { imgsrc: '/images/Footer/youtube.svg', href: "https://youtube.com/" },
]


const footer = () => {
  return (
    <div className=" relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mt-44y pb-16  mx-auto max-w-7xl p-4 sm:px-8 md:px-12 lg:px-8  ">
        <div className=" mt-24  grid grid-cols-12 gap-y-10  gap-6">

          {/* COLUMN-1 */}

          <div className='col-span-12 md:col-span-8 lg:col-span-9'>
            {/* <img
              className="block h-12 w-20px mb-4"
              src={'/images/Logo/logo.svg'}
              alt="Crypto-Logo"
            /> */}
             <Link href="/"><div className='text-[32px] text-white'>CodeCreador</div> </Link>
            <h3 className='text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16'> We are a dynamic IT company specializing in crafting cutting-edge solutions across diverse domains. Our expertise spans web development, Android app development, and innovative platforms tailored to specific industries. We take pride in developing robust systems such as restaurant POS (Point of Sale) solutions, CRM (Customer Relationship Management) platforms, and eCommerce solutions that drive growth and efficiency. With a commitment to delivering high-quality, scalable, and user-friendly applications, we empower businesses to achieve their goals in the digital era.</h3>
            
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-3 px-2  md:justify-start md:items-start flex flex-col mt-4 text-wrap">
            <h3 className="text-white text-xl font-medium mb-9">Contact Us</h3>
            <div>
            <div className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} />+917517998048</div>
            <div className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/email.svg'} alt="email-icon" width={20} height={20} />sales@codecreador.com</div>
            <div className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/address.svg'} alt="address-icon" width={20} height={20} />Maharashtra, India</div>
          </div>
          </div>
          {/* CLOUMN-2/3 */}

        </div>
      </div>

      {/* All Rights Reserved */}

      <div className='py-8 px-4 border-t border-t-lightblue'>
        <h3 className='text-center text-offwhite'>@2024-2025 - All Rights Reserved by <Link href="https://adminmart.com/" target="_blank"> CodeCreator.com </Link></h3>
      </div>

    </div>
  )
}

export default footer;
