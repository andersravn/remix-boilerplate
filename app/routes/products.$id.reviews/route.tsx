import type { LoaderFunctionArgs, TypedResponse } from '@vercel/remix';
import { Await, isRouteErrorResponse, json, useLoaderData, useRouteError } from '@remix-run/react';
import { defer } from '@vercel/remix';
import { StarIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { Suspense } from 'react';

interface IReview {
    name: string;
    description: string;
    rating: number;
}

export async function loader({ params }: LoaderFunctionArgs) {
    const reviewsPromise: IReview[] = await new Promise((resolve) => {
        setTimeout(() => resolve([
            {
                'description': 'Great product, very durable and reliable. I use it every day!',
                'name': 'John Doe',
                'rating': 5
            },
            {
                'description': 'Average product, does the job but nothing special.',
                'name': 'Jane Smith',
                'rating': 3
            },
            {
                'description': 'Terrible quality, broke after just a few uses. Would not recommend.',
                'name': 'David Johnson',
                'rating': 1
            },
            {
                'description': 'Excellent value for the price. Surprisingly good quality.',
                'name': 'Emily Brown',
                'rating': 4
            }
        ]), 3000);
    });

    // throw new Response('Not Found', { status: 404 });

    return json({ productId: params.id, reviews: reviewsPromise });
}

export default function Reviews() {
    const { reviews, productId } = useLoaderData<typeof loader>();

    return (
        <div className="mt-10 flex flex-col gap-y-6">
            <Suspense fallback={<div>Loading data for {productId}</div>}>
                <Await resolve={reviews}>
                    Done loading
                    <pre>{JSON.stringify(reviews)}</pre>
                    {reviews.map((review: IReview) => (
                        <div className="border rounded-md p-4" key={review.name}>
                            <div className="text-10">{review.name}</div>
                            <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rate) => (
                                    <StarIcon aria-hidden="true"
                                        className={clsx(
                                            review.rating > rate ? 'text-gray-900' : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0'
                                        )}
                                        key={rate}/>
                                ))}
                            </div>
                            <div>{review.description}</div>
                        </div>
                    ))}
                </Await>
            </Suspense>
        </div>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();
  
    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>
                    {error.status} {error.statusText}
                </h1>
                <p>{error.data}</p>
            </div>
        );
    } else if (error instanceof Error) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error.message}</p>
                <p>The stack trace is:</p>
                <pre>{error.stack}</pre>
            </div>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }  
}