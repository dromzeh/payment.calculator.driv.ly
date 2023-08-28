import Link from 'next/link'
import Image from 'next/image'
import ContactUs from './ContactUs'

export default function Header() {
    return (
        <header className="sticky top-0 z-[100] border-b border-zinc-100 bg-white/80 pb-0 pt-0 backdrop-blur-lg backdrop-filter">
            <div className="mx-auto flex h-14 max-w-screen-xl justify-between px-5">
                <div id="left" className="flex items-center">
                    <Link href="https://driv.ly/" passHref target="_blank">
                        <Image
                            src="DrivlyLogoDark.svg"
                            className="translate-y-1"
                            alt="Drivly Logo"
                            width={50}
                            height={50}
                        />
                    </Link>
                </div>
                <div id="right" className="flex items-center gap-3">
                    <ContactUs />
                </div>
            </div>
        </header>
    )
}
