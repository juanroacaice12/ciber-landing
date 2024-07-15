import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Products from './Products';
import CallsToAction from './CallsToAction';

export default function PopoverMenu() {
  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        Funciones
        <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
      </PopoverButton>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            <Products className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50" />
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            <CallsToAction className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100" />
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
