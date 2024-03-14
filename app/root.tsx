import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';
import type { LinksFunction } from '@remix-run/node';
import styles from '~/tailwind.css?url';
import { Fragment, useState } from 'react';
import type { ReactNode } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import {  Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import navigation from './navigation.const';
import clsx from 'clsx';

export const links: LinksFunction = () => [{ href: styles, rel: 'stylesheet' }];

export function Layout({ children }: { children: ReactNode; }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8"/>
                <meta content="width=device-width, initial-scale=1" name="viewport"/>
                <Meta/>
                <Links/>
            </head>
            <body>
                {children}
                <ScrollRestoration/>
                <Scripts/>
                <Analytics/>
            </body>
        </html>
    );
}

export default function App() {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Transition.Root as={Fragment} show={open}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full">
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                        type="button">
                                        <span className="absolute -inset-0.5"/>
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map((category) => (
                                                <Tab className={({ selected }) =>
                                                    clsx(
                                                        selected
                                                            ? 'border-indigo-600 text-indigo-600'
                                                            : 'border-transparent text-gray-900',
                                                        'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                                                    )}
                                                key={category.name}>
                                                    {category.name}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category) => (
                                            <Tab.Panel className="space-y-10 px-4 pb-8 pt-10"
                                                key={category.name}>
                                                <div className="grid grid-cols-2 gap-x-4">
                                                    {category.featured.map((item) => (
                                                        <div className="group relative text-sm"
                                                            key={item.name}>
                                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                <img alt={item.imageAlt}
                                                                    className="object-cover object-center"
                                                                    src={item.imageSrc}/>
                                                            </div>
                                                            <a className="mt-6 block font-medium text-gray-900"
                                                                href={item.href}>
                                                                <span aria-hidden="true"
                                                                    className="absolute inset-0 z-10"/>
                                                                {item.name}
                                                            </a>
                                                            <p aria-hidden="true" className="mt-1">
                                                                Shop now
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                                {category.sections.map((section) => (
                                                    <div key={section.name}>
                                                        <p className="font-medium text-gray-900"
                                                            id={`${category.id}-${section.id}-heading-mobile`}>
                                                            {section.name}
                                                        </p>
                                                        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                                                        <ul aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                            className="mt-6 flex flex-col space-y-6"
                                                            role="list">
                                                            {section.items.map((item) => (
                                                                <li className="flow-root" key={item.name}>
                                                                    <a className="-m-2 block p-2 text-gray-500"
                                                                        href={item.href}>
                                                                        {item.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    {navigation.pages.map((page) => (
                                        <div className="flow-root" key={page.name}>
                                            <a className="-m-2 block p-2 font-medium text-gray-900"
                                                href={page.href}>
                                                {page.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    <div className="flow-root">
                                        <a className="-m-2 block p-2 font-medium text-gray-900" href="/">
                                            Sign in
                                        </a>
                                    </div>
                                    <div className="flow-root">
                                        <a className="-m-2 block p-2 font-medium text-gray-900" href="/">
                                            Create account
                                        </a>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6">
                                    <a className="-m-2 flex items-center p-2" href="/">
                                        <img alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"/>
                                        <span className="ml-3 block text-base font-medium text-gray-900">
                                            CAD
                                        </span>
                                        <span className="sr-only">, change currency</span>
                                    </a>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Get free delivery on orders over $100
                </p>

                <nav aria-label="Top"
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                                type="button">
                                <span className="absolute -inset-0.5"/>
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <a href="/">
                                    <span className="sr-only">Your Company</span>
                                    <img alt=""
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>
                                </a>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {navigation.categories.map((category) => (
                                        <Popover className="flex" key={category.name}>
                                            {({ open }) => (
                                                <Fragment>
                                                    <div className="relative flex">
                                                        <Popover.Button className={clsx(
                                                            open
                                                                ? 'border-indigo-600 text-indigo-600'
                                                                : 'border-transparent text-gray-700 hover:text-gray-800',
                                                            'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                                        )}>
                                                            {category.name}
                                                        </Popover.Button>
                                                    </div>

                                                    <Transition as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0">
                                                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div aria-hidden="true"
                                                                className="absolute inset-0 top-1/2 bg-white shadow"/>

                                                            <div className="relative bg-white">
                                                                <div className="mx-auto max-w-7xl px-8">
                                                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                            {category.featured.map((item) => (
                                                                                <div className="group relative text-base sm:text-sm"
                                                                                    key={item.name}>
                                                                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                                        <img alt={item.imageAlt}
                                                                                            className="object-cover object-center"
                                                                                            src={item.imageSrc}/>
                                                                                    </div>
                                                                                    <a className="mt-6 block font-medium text-gray-900"
                                                                                        href={item.href}>
                                                                                        <span aria-hidden="true"
                                                                                            className="absolute inset-0 z-10"/>
                                                                                        {item.name}
                                                                                    </a>
                                                                                    <p aria-hidden="true"
                                                                                        className="mt-1">
                                                                                        Shop now
                                                                                    </p>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                        <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                                            {category.sections.map((section) => (
                                                                                <div key={section.name}>
                                                                                    <p className="font-medium text-gray-900"
                                                                                        id={`${section.name}-heading`}>
                                                                                        {section.name}
                                                                                    </p>
                                                                                    {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                                                                                    <ul aria-labelledby={`${section.name}-heading`}
                                                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                        role="list">
                                                                                        {section.items.map((item) => (
                                                                                            <li className="flex"
                                                                                                key={item.name}>
                                                                                                <a className="hover:text-gray-800"
                                                                                                    href={item.href}>
                                                                                                    {item.name}
                                                                                                </a>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </Fragment>
                                            )}
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                            href={page.href}
                                            key={page.name}>
                                            {page.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Group>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <a className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                        href="/">
                    Sign in
                                    </a>
                                    <span aria-hidden="true" className="h-6 w-px bg-gray-200"/>
                                    <a className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                        href="/">
                    Create account
                                    </a>
                                </div>

                                <div className="hidden lg:ml-8 lg:flex">
                                    <a className="flex items-center text-gray-700 hover:text-gray-800"
                                        href="/">
                                        <img alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"/>
                                        <span className="ml-3 block text-sm font-medium">CAD</span>
                                        <span className="sr-only">, change currency</span>
                                    </a>
                                </div>

                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <a className="p-2 text-gray-400 hover:text-gray-500" href="/">
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon aria-hidden="true"
                                            className="h-6 w-6"/>
                                    </a>
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <a className="group -m-2 flex items-center p-2" href="/">
                                        <ShoppingBagIcon aria-hidden="true"
                                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"/>
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                                        </span>
                                        <span className="sr-only">items in cart, view bag</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet/>
        </div>
    );
}
