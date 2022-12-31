
import React from 'react';

export default function About() {
    return (
        <div id='vision' className='w-full p-2 flex items-center py-16'>
          <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
              <p className='uppercase text-xl font-bold tracking-widest text-[#5651e5]'>
                Mission
              </p>
              <p className='py-2 text-gray-600'>
              1. To demonstrate eco-friendly products developed by poor and downtrodden community.
              </p>
              <p className='py-2 text-gray-600'>
              2. To revive and ensure the identity of social entrepreneurs like artisans, women
                and other related groups. 
              </p>
              <p className='py-2 text-gray-600'>
                3. To develop market linkages for products of poor and downtrodden community
                and to explore the role of poor and down trodden community in social and human
                well-being. 
              </p>
            </div>
          </div>
        </div>
      )
}