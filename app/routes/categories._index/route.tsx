import type { MetaFunction } from '@vercel/remix';

export const meta: MetaFunction = () => {
    return [{ title: 'Categories' }, { content: 'Categories', name: 'description' }];
};

export default function Categories() {
    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
            <h1>Categories</h1>
        </div>
    );
}
