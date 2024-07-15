import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a href="#inicio" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100">
                Inicio
              </a>
              <a href="#servicios" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100">
                Servicios
              </a>
              <a href="#background" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100">
                Background
              </a>
              <a href="#quienes-somos" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100">
                ¿Quiénes somos?
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
