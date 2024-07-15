import { ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '/analytics', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '/', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '/', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '/', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels', href: '/', icon: ArrowPathIcon },
];

export default function Products(props) {
  return (
    <>
      {products.map((product) => (
        <NavLink
          key={product.name}
          to={product.href}
          className={props.className}
        >
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <product.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
          </div>
          <div className="ml-4 flex-auto">
            <p className="font-semibold text-gray-900">{product.name}</p>
            <p className="mt-1 text-gray-600">{product.description}</p>
          </div>
        </NavLink>
      ))}
    </>
  );
}
