import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

export default function Testipaggination() {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex gap-2.5 rounded-lg shadow-sm">
            
            {/* Previous Page Button */}
            <a
              href="#"
              aria-label="Previous"
              className="relative inline-flex items-center rounded-lg border-gray-300 ring-1 ring-inset ring-gray-300 transition-all duration-300 ease-in-out transform hover:bg-gradient-to-b hover:from-[#3E9AF9] hover:to-[#2863A0] text-gray-900 hover:text-white px-4 py-2 text-sm font-semibold"
              style={{
                width: '32px',
                height: '32px',
              }}
            >
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Previous"
              className="relative inline-flex items-center rounded-lg border-gray-300 ring-1 ring-inset ring-gray-300 transition-all duration-300 ease-in-out transform hover:bg-gradient-to-b hover:from-[#3E9AF9] hover:to-[#2863A0] text-gray-900 hover:text-white px-4 py-2 text-sm font-semibold"
            
            >
              <Image
              src="/FirstPrev.png"
              alt="Previous"
              width={16}
              height={16}
              />
            </a>

            {/* Pagination Buttons */}
            <a
              href="#"
              className="relative inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 transition-all duration-300 ease-in-out transform hover:bg-gradient-to-b hover:from-[#3E9AF9] hover:to-[#2863A0] hover:text-white"
              style={{
                width: '32px',
                height: '32px',
              }}
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 transition-all duration-300 ease-in-out transform hover:bg-gradient-to-b hover:from-[#3E9AF9] hover:to-[#2863A0] hover:text-white"
              style={{
                width: '32px',
                height: '32px',
              }}
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 transition-all duration-300 ease-in-out transform hover:bg-gradient-to-b hover:from-[#3E9AF9] hover:to-[#2863A0] hover:text-white md:inline-flex"
              style={{
                width: '32px',
                height: '32px',
              }}
            >
              3
            </a>
            <span className="relative inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 transition-all duration-300 ease-in-out transform hover:bg-gradient-to-b hover:from-[#3E9AF9] hover:to-[#2863A0] hover:text-white md:inline-flex"
              style={{
                width: '32px',
                height: '32px',
              }}
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 transition-all duration-300 ease-in-out transform hover:bg-gradient-to-b hover:from-[#3E9AF9] hover:to-[#2863A0] hover:text-white"
              style={{
                width: '32px',
                height: '32px',
              }}
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 transition-all duration-300 ease-in-out transform hover:bg-gradient-to-b hover:from-[#3E9AF9] hover:to-[#2863A0] hover:text-white"
              style={{
                width: '32px',
                height: '32px',
              }}
            >
              10
            </a>

            {/* Next Page Button */}
            <a
              href="#"
              aria-label="Next"
              className="relative inline-flex items-center rounded-lg border-gray-300 ring-1 ring-inset ring-gray-300 transition-all duration-300 ease-in-out transform hover:bg-gradient-to-b hover:from-[#3E9AF9] hover:to-[#2863A0] text-gray-900 hover:text-white px-4 py-2 text-sm font-semibold"
              style={{
                width: '32px',
                height: '32px',
              }}
            >
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Previous"
              className="relative inline-flex items-center rounded-lg border-gray-300 ring-1 ring-inset ring-gray-300 transition-all duration-300 ease-in-out transform hover:bg-gradient-to-b hover:from-[#3E9AF9] hover:to-[#2863A0] text-gray-900 hover:text-white px-4 py-2 text-sm font-semibold"
              style={{
                width: '32px',
                height: '32px',
              }}
            >
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
