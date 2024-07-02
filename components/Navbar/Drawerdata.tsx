import React, { useState } from "react";
import Link from "next/link";

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
    { 
        name: 'Our Company', 
        href: '/ourcompany/', 
        current: false,
        dropdownItems: [
            { name: 'Eurosia Technologies ', href: 'https://eurosiatechnologies.com/', current: false },
            { name: 'Eurosia Holdings', href: 'https://eurosiaholdings.com/', current: false },
            { name: 'Eurosia Restaurant', href: 'https://eurosiarestaurant.com/', current: false },
            { name: 'Eurosia Group', href: 'https://eurosiagroup.com/', current: false },
            { name: 'Eurosia info', href: 'http://www.eurosia.info/', current: false },
            { name: 'Eurosia Trip', href: 'https://eurosiatrip.com/', current: false },
        ]
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data: React.FC = () => {
    const [dropdownStates, setDropdownStates] = useState<{ [key: string]: boolean }>({});

    const toggleDropdown = (itemName: string) => {
        setDropdownStates(prevState => ({
            ...prevState,
            [itemName]: !prevState[itemName]
        }));
    };

    return (
        <div className="rounded-md max-w-sm w-full ">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                        'block py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                    onClick={() => item.dropdownItems && toggleDropdown(item.name)}
                                >
                                    {item.name}
                                </Link>
                                {item.dropdownItems && dropdownStates[item.name] && (
                                    <div className="pl-4 space-y-1">
                                        {item.dropdownItems.map((dropdownItem) => (
                                            <Link
                                                key={dropdownItem.name}
                                                href={dropdownItem.href}
                                                className={classNames(
                                                    dropdownItem.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                                    'block py-2 rounded-md text-base font-medium'
                                                )}
                                                aria-current={dropdownItem.current ? 'page' : undefined}
                                            >
                                                {dropdownItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="mt-4"></div>
                        <button className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
