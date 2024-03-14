import clsx from 'clsx';

import { StarIcon } from '@heroicons/react/20/solid';

import type { CategoryProduct } from './category.model';

export type ReviewsProps = {
    rating: CategoryProduct['rating'];
};

const RATINGS = [0, 1, 2, 3, 4];

export function Reviews({ rating }: ReviewsProps) {
    return (
        <div className="flex items-center self-center">
            {RATINGS.map(rate => (
                <StarIcon aria-hidden="true" className={clsx('h-5 w-5 flex-shrink-0', {
                    'text-gray-200': rating.rate < rate,
                    'text-gray-900': rating.rate > rate
                })} key={rate}/>
            ))}

            <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500" href="/">
                {rating.count} reviews
            </a>
        </div>
    );
}