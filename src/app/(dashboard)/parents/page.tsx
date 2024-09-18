// src/pages/studentpage.js (or .tsx if using TypeScript)
import dynamic from 'next/dynamic';

// Dynamically import BigCalendar with server-side rendering disabled
const BigCalendar = dynamic(() => import('@/components/BigCalendar'), {
  ssr: false, // Disable server-side rendering for this component
});

import Announcement from '@/components/Announcement';
import EventCalendar from '@/components/EventCalendar';

const Parentpage = () => {
  return (
    <div className='flex-1 p-4 flex gap-4 flex-col xl:flex-row'>
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (Run Chedchanchaisi)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcement />
      </div>
    </div>
  );
}

export default Parentpage;
