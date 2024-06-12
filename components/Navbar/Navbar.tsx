import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
    dropdownItems?: NavigationItem[];
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: false },
    { 
        name: 'About', 
        href: 'about', 
        current: false,
        dropdownItems: [
    
            { name: 'Vision & Mission', href: '/about/vision-mission', current: false },
            { name: 'Board of Directors', href: '/about/board-of-directors', current: false },
            { name: 'Management Team', href: '/about/management-team', current: false },
        
        ]
    },
    { name: 'Features', href: '#features-section', current: false },

    { 
        name: 'Our Company', 
        href: '/ourcompany/', 
        current: false,
        dropdownItems: [
            { name: 'Eurosia Technologies ', href: '/ourcompany/eurosiatechnologies', current: false },
            { name: 'Vision & Mission', href: '/about/vision-mission', current: false },
            { name: 'Board of Directors', href: '/about/board-of-directors', current: false },
            { name: 'Management Team', href: '/about/management-team', current: false },
          
        ]
    },




];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleContactClick = () => {
        router.push('/contact');
    };
    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">
                            <div className="flex flex-shrink-0 items-center">
                                <Image
                                    className="block h-10 w-20px lg:hidden"
                                    src={'/images/Logo/logo.gif'}
                                    alt="Crypto-Logo"
                                    width={150}
                                    height={40}
                                />
                                <Image
                                    className="hidden h-48px w-48px lg:block"
                                    src={'/images/Logo/logo.gif'}
                                    alt="Crypto-Logo"
                                    width={180}
                                    height={50}
                                />
                            </div>
                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <div key={item.name} className="relative group">
                                            <Link
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900' : 'navlinks text-white hover:text-offwhite hover-underline',
                                                    'px-3 py-4 rounded-md text-lg font-normal'
                                                )}
                                                aria-current={item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                            {item.dropdownItems && (
                                                <div className="absolute top-full left-0 hidden group-hover:block bg-black rounded-md shadow-lg py-2 w-52 z-10">
                                                    {item.dropdownItems.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block px-4 py-2 text-white hover:bg-gray-700"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button 
                        className='hidden lg:flex justify-end text-xl font-semibold py-4 px-6 lg:px-12 navbutton text-white'
                        onClick={handleContactClick}
                    >
                        Contact
                    </button>

                        </div>
                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
