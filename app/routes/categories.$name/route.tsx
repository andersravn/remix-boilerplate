import { Link, useLoaderData } from '@remix-run/react';
import type { LoaderFunctionArgs, MetaFunction } from '@vercel/remix';

export const meta: MetaFunction = () => {
    return [{ title: 'Category' }, { content: 'Category', name: 'description' }];
};

export function loader({ params }: LoaderFunctionArgs) {
    return { params };
}

export default function Categories() {
    const data = useLoaderData<typeof loader>();

    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
            <h1>Category {data.params.name}</h1>

            <Link to="/products/1">Product 1</Link>
        </div>
    );
}
