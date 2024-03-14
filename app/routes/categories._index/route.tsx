import { Link, useLoaderData } from '@remix-run/react';
import type { MetaFunction } from '@vercel/remix';
import clsx from 'clsx';

export const meta: MetaFunction = () => {
    return [{ title: 'Vores assortiment' }, { content: 'Categories', name: 'description' }];
};

export async function loader() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const categories: string[] = await response.json();

    return categories.map((category, index) => ({
        category,
        image: `https://picsum.photos/${650 + index}`
    }));
}

export default function Categories() {
    const categories = useLoaderData<typeof loader>();

    return (
        <div className="mx-auto max-w-7xl my-8 lg:my-10">
            <h2 className="font-medium text-gray-900 text-2xl mb-2">
                Vores assortiment
            </h2>

            <h3 className="text-lg font-thin text-gray-500 mb-8">
                Endnu mere end du forventer - Mode, Beauty, Designermode og mere
            </h3>

            <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
                {categories.map(({ category, image }, index) => (
                    <article className={clsx('relative rounded-lg group hover:shadow-md transition-shadow duration-300 ease-in-out', { 
                        'lg:min-h-[18.5rem]': !!index,
                        'lg:row-span-2 lg:col-span-2 lg:min-h-[41.6rem]': !index
                    })} key={category}>
                        <img alt={category} className="w-full h-full rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-75"
                            src={image}/>

                        <Link className="absolute inset-0 flex items-end p-4 bg-indigo-900 bg-opacity-30 rounded-lg transition-opacity duration-300 ease-in-out" 
                            prefetch="intent" 
                            to={`/categories/${category}`}>
                            <h3 className="font-medium text-lg text-white capitalize">
                                {category}
                            </h3>
                        </Link>
                    </article>
                ))}
            </section>
        </div>
    );
}
