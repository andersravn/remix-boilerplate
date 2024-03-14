import { Link } from '@remix-run/react';

export type BreadcrumbsProps = {
    categoryName: string;
};

export function Breadcrumbs({ categoryName }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 mb-8">
                <li>
                    <Link className="text-sm font-medium text-gray-900" to="/categories">
                        Alle
                    </Link>
                </li>
                    
                <svg aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                    fill="currentColor"
                    height={20}
                    viewBox="0 0 16 20"
                    width={16}>
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>
                </svg>
                
                <li className="text-sm">
                    {categoryName}
                </li>
            </ol>
        </nav>
    );
}