import { json, Link, useLoaderData } from '@remix-run/react';
import type { LoaderFunctionArgs, MetaFunction } from '@vercel/remix';

import { Breadcrumbs } from './Breadcrumbs';
import { Reviews } from './Reviews';

import type { CategoryProduct } from './category.model';
import { SortOrder } from './SortOrder';

export async function loader({ params, request }: LoaderFunctionArgs) {
    if (!params.name) {
        throw json('Not found', { status: 404 });
    }

    const requestUrl = new URL(request.url);
    const sortDirection = requestUrl.searchParams.get('sort') ?? 'asc';
    const response = await fetch(`https://fakestoreapi.com/products/category/${params.name}?sort=${sortDirection}`);
    const data: CategoryProduct[] = await response.json();

    return {
        category: `${params.name?.[0].toUpperCase()}${params.name?.slice(1)}`,
        products: data
    };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    return [
        { title: `${data?.category} (${data?.products?.length ?? 0})` }, 
        { content: 'Category', name: 'description' }
    ];
};

export default function Categories() {
    const { category, products } = useLoaderData<typeof loader>();

    return (
        <div className="mx-auto max-w-7xl my-8 lg:my-10">
            <Breadcrumbs categoryName={category}/>

            <header className="flex items-center justify-between mb-8 lg:mb-10">
                <div>
                    <h2 className="font-medium text-gray-900 text-2xl mb-2">
                        {category}
                    </h2>

                    <h3 className="text-lg font-thin text-gray-500">
                        Endnu mere end du forventer - Mode, Beauty, Designermode og mere
                    </h3>
                </div>

                <SortOrder/>
            </header>

            <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 items-center">
                {products.map(({ id, description, image, price, title, rating }) => (
                    <article className="relative flex flex-col gap-4" key={id}>
                        <img alt={description ?? title} className="aspect-[1/1]" src={image}/>

                        <Reviews rating={rating}/>

                        <aside className="flex flex-col gap-2">
                            <Link className="absolute inset-0" prefetch="intent" to={`/products/${id}`}>
                                <span className="sr-only">
                                    {title}
                                </span>
                            </Link>

                            <h4 className="font-medium line-clamp-2">
                                {title}
                            </h4>

                            <p className="text-lg tracking-tight text-gray-500">
                                {price} kr.
                            </p>
                        </aside>
                    </article>
                ))}
            </section>
        </div>
    );
}
