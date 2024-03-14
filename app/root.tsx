import type { ReactNode } from 'react';

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';

import Header from './layout/Header';

import styles from '~/tailwind.css?url';

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
            </body>
        </html>
    );
}

export default function App() {
    return (
        <div className="bg-white">
            <Header/>            
            <Outlet/>
        </div>
    );
}
