import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { BanknotesIcon, ShoppingBagIcon } from '@heroicons/react/16/solid';
import { useNavigation } from '@remix-run/react';

export default function Header() {
    const navigation = useNavigation();

    return (
        <header className="relative bg-white">
            <div className={`${navigation.state === 'loading' && 'bg-purple-700 animate-pulse'} h-2 w-full`}/>

            <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-gray-200 flex h-16">
                <a className="flex items-center gap-2" href="/">
                    <img alt="" className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>

                    <span className="font-medium text-xl">
                        Remix frenzy
                    </span>
                </a>

                <div className="flex-1 flex items-center justify-end">
                    <a className="hidden lg:block text-sm font-medium text-gray-700 hover:text-gray-500" href="/">
                        Log ind
                    </a>

                    <span aria-hidden="true" className="hidden lg:block h-6 w-px mx-4 bg-gray-200"/>

                    <a className="hidden lg:block text-sm font-medium text-gray-700 hover:text-gray-500" href="/">
                        Ny kunde?
                    </a>

                    <a className="lg:ml-6 text-gray-400 hover:text-gray-500" href="/">
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6"/>
                    </a>

                    <a className="hidden lg:ml-6 lg:flex gap-3 items-center text-gray-700 hover:text-gray-500" href="/">
                        <BanknotesIcon aria-hidden="true" className="w-6 h-6 text-indigo-600"/>
                        <span className="block text-sm font-medium">DKK</span>
                    </a>

                    <a className="ml-4 group flex items-center" href="/">
                        <ShoppingBagIcon aria-hidden="true"
                            className="h-6 w-6 flex-shrink-0 text-indigo-600"/>
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-500">
                            0
                        </span>

                        <span className="sr-only">items in cart, view bag</span>
                    </a>
                </div>
            </nav>
        </header>
    );
}