
import React from 'react'

export default function About() {
    return (
        <div id='about' className='w-full p-2 flex items-center py-16'>
          <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
              <p className='uppercase text-xl font-bold tracking-widest text-[#5651e5]'>
                Background
              </p>
              <p className='py-2 text-gray-600'>
                            The present world is passing through two stages of growth. At one hand, we are very
                progressive in infrastructural and scientific development but on other hand we are
                gradually degrading in environment. As a result of environment degradation, the quality
                of healthy life has affected very much. With the view of providing healthy life to social
                wellbeing, we have started an initiative of SANCHAY through our eco-friendly products
                like Clay and Jute in August 2015 and gradually entered in healthy and natural foods in
                subsequent years. The journey of exposing of SANCHAY initiatives started with
                participation in various national and international exhibitions and then moving to
                opening static outlet and developing market linkages with likeminded individuals and
                groups. In this regard, we worked at two levels which include corporate groups and
                individuals and groups working at rural community level with special focus on small
                farmers’ and Farmers’ Producer Company. In 2017 and 2019, SANCHAY got registered
                in proprietorship legal entities with name of Sanchay Eco-Friendly Udyog and Sanchay Nature Haat.
              </p>
            </div>
            {/* <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
              <Image src={AboutImg} className='rounded-xl' alt='/' />
            </div> */}
          </div>
        </div>
      )
}