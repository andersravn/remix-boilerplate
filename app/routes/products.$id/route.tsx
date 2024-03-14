import { json, Link, Outlet, useLoaderData } from '@remix-run/react';
import type { LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import Reviews from './Reviews';

export const meta: MetaFunction = () => {
    return [{ title: 'Product' }, { content: 'Product', name: 'description' }];
};

export async function loader({ params }: LoaderFunctionArgs) {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);

    const product = await response.json();

    return json(product);
}

export default function Product() {
    const product = useLoaderData<typeof loader>();

    return (
        <div className="mx-auto max-w-7xl my-8 lg:my-10 bg-white pt-6" style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
            <Breadcrumb product={product}/>
            <div className="pt-10 grid grid-cols-12">

                {/* Image */}
                <div className="mx-auto mt-6 max-w-lg sm:px-6 lg:px-8 col-span-8">
                    <img alt={product.name} src={product.image}/>
                </div>

                {/* Product info */}
                <div className="col-span-4 mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-10 lg:row-span-3">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">€{product.price}</p>
                        <Reviews/>
                        <Outlet/>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

function Breadcrumb(props: any) {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <li>
                    <div className="flex items-center">
                        <Link className="mr-2 text-sm font-medium text-gray-900" to={`/categories/${props.product.category}`}>
                            {props.product.category}
                        </Link>
                        <svg aria-hidden="true"
                            className="h-5 w-4 text-gray-300"
                            fill="currentColor"
                            height={20}
                            viewBox="0 0 16 20"
                            width={16}>
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>
                        </svg>
                    </div>
                </li>
                <li className="text-sm">
                    {props.product.title}
                </li>
            </ol>
        </nav>
    );
}
