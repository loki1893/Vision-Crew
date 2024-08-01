'use client';
import Image from 'next/image';

export default function TestimoniaData() {
  return (
    <div 
      className="max-w-sm border border-gray-200 rounded-lg "
      style={{ backgroundColor: '#F7F7F7' }}  
    >
      <a href="#">
        <Image
          className="rounded-t-lg"
          src="/userImage.png"
          alt="user"
          width={105}
          height={89}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal style={{ color: '#4E4E4E' }} text-gray-700 leading-8 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate laoreet mauris suspendisse nisi et donec volutpat integer. Duis vel porta nisl facilisi mauris, sodales ornare metus. Est volutpat turpis nec sapien.
        </p>
      </div>
    </div>
  );
}
