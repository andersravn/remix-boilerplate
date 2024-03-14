import type { LoaderFunctionArgs } from '@vercel/remix';
import { json, Link, useLoaderData } from '@remix-run/react';
import { StarIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

export async function loader({ params }: LoaderFunctionArgs) {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);

    const product = await response.json();

    return json({ rating: product.rating });
}

export default function Reviews() {
    const data = useLoaderData<typeof loader>();

    return (
        <div className="mt-20">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
                <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rate) => (
                        <StarIcon aria-hidden="true"
                            className={clsx(
                                data.rating.rate > rate ? 'text-gray-900' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0'
                            )}
                            key={rate}/>
                    ))}
                </div>
                <p className="sr-only">{data.rating.rate} out of 5 stars</p>
                <Link className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500" to="reviews">
                    {data.rating.count} reviews
                </Link>
            </div>
        </div>
    );
}