import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

export default function listing() {
  return (
    <Layout title="Product Listing">
    <div id='products' class="pl-32 p-2 flex max-w-[1240px]  py-16 flex-col">
    <div class=" items-center overflow-x-auto max-w-[1240px] sm:-mx-6 lg:-mx-8">
    <div class="py-2 max-w-[1240px] items-center  inline-block w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        {/* <Link href='/booking'>
            <p className='pb-10'>Want to order In bulk , Click Here</p>
        </Link> */}
      <p className='uppercase pb-14 text-xl font-bold tracking-widest text-[#5651e5]'>
                Products
              </p>
        <table class="pt-5 min-w-full">
          <thead class="bg-[#F6FBF4] border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Sl. No.
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Flakes
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Dalia
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Juices
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              White Poha
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Whole Wheat-Plain 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Herbal Juices (Amla, Giloy, Aloe Vera, Wheatgrass)

              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Brown Poha
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Whole wheat-Roasted
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Fruit Juices
              </td>
            </tr>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Puffed Rice
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Barle
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Energy Drinks
              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Pearl Millet-Bajara
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div id='products' class="pl-32 p-2 flex max-w-[1240px]  py-16 flex-col">
    <div class=" items-center overflow-x-auto max-w-[1240px] sm:-mx-6 lg:-mx-8">
    <div class="py-2 max-w-[1240px] items-center  inline-block w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
      <p className='uppercase pb-14 text-xl font-bold tracking-widest text-[#5651e5]'>
      Life with Healthy Food
              </p>
        <table class="pt-5 min-w-full">
          <thead class="bg-[#F6FBF4] border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Sl. No.
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Pulses 
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Rice and Flakes
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Oils
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Flour
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Starter
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Tuar 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Basmati
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Black Mustard 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Whole Wheat Flour
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Vegetable soups
              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Chana Daa
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Kala Namak 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Yellow Mustard 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Multigrain Flour
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Urad Whole
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Joha-Assam
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Sunflower
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Besan
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Urad Dhuli 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Govind bhogBengal
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Groundnuts 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Barley 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Urad Chilka
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Brown Basmati
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              White Sesame
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Jwar 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Moong Whole  
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              BrownSonamasuri
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Black Seasme 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Ragi  
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">7</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Moong Dhuli 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Broken Rice Basmati
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Coconut-Virgin
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Rajgir 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">8</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Moong Chilka 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Coconut-Extra Virgin
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Buckwheat 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">9</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Brown Chana
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Desi Ghee-Bilona
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Desi Ghee-Bilona
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Rice 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">10</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              10. Roasted Chana
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              A-2 Milk-Sahewal
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Singara 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">11</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Kabuli Chana 
 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Gir Cow
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Quinoa 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">12</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Red Rajama 
 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Corn-White  
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">13</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            Chitra Rajma 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Corn-Yellow 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">14</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Uttarakhand Harsil Rajma
 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Pearl Millets Flour 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">15</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Red Rajma Joshimath
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Sattu 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">16</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Black Masoor
 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">17</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Malka Masoor
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">18</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Masoor Daal 
 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">19</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Soyabean 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">20</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Peanuts
 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">21</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Soyabean 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">22</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Tils- Sesame 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div id='products' class="pl-32 p-2 flex max-w-[1240px]  py-16 flex-col">
    <div class=" items-center overflow-x-auto max-w-[1240px] sm:-mx-6 lg:-mx-8">
    <div class="py-2 max-w-[1240px] items-center  inline-block w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
      <p className='uppercase pb-14 text-xl font-bold tracking-widest text-[#5651e5]'>
      Life with Sweet & Sour Taste

              </p>
        <table class="pt-5 min-w-full">
          <thead class="bg-[#F6FBF4] border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Sl. No.
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Spices & Salt 
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Sweeteners
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Sweets
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Pickles
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Green Cardamom
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Jaggery
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Amla Murabba
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Vegetables
              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Black Cardamom
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Jaggery Powder
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Apple Murabba 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ---- 
              </td>
            </tr>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Black Pepper
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Desi Khand
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Carrot Murabba
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Clove
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Bhoora
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Amla Sweet Candy
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Cinnamon
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Dhaga Misri 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Amla Chatpata Candy
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Cinnamon Powder
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Sugar
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Fruit Candy
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">7</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Turmeric
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Palm Jaggery
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Bel Candy 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">8</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Red Chili
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Palm Sugar
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Ginger Candy
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">9</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Red Chili Powder
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Coconut Sugar
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">10</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Garam Masala
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              White Honey
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">11</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Jeera
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Forest Honey
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">12</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Himalaya Pink Salt
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Flavored
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">13</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Black Salt
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Raw Honey
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div id='products' class="pl-32 p-2 flex max-w-[1240px]  py-16 flex-col">
    <div class=" items-center overflow-x-auto max-w-[1240px] sm:-mx-6 lg:-mx-8">
    <div class="py-2 max-w-[1240px] items-center  inline-block w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
      <p className='uppercase pb-14 text-xl font-bold tracking-widest text-[#5651e5]'>
      Life with Something Light & Super Foods

              </p>
        <table class="pt-5 min-w-full">
          <thead class="bg-[#F6FBF4] border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Sl. No.
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Healthy
Snacks
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Seeds
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Dry Fruits
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Noodles &
Pasta
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Whole Wheat
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Chia Seeds Black

              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Saffron
              </td>
            </tr>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Ragi
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Chia Seeds White

              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Almond-Kashmir Mamra
              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Brown Rice
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Mixed Seeds
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Raisin
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Barnyard
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Flax Seeds

              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Apricot
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Biscuits
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Pearl Millet
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Pumkin
Seeds

              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Walnut
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Ragi
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Watermelon
Seeds
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Cashew
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">7</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Multigrain
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Basil Seeds

              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">8</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Banana &
Drumsticks
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Cranberry
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Chips
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----

              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>

            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">9</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Banana
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Blueberry
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>

            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">10</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Jackfruit
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----

              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div id='products' class="pl-32 p-2 flex max-w-[1240px]  py-16 flex-col">
    <div class=" items-center overflow-x-auto max-w-[1240px] sm:-mx-6 lg:-mx-8">
    <div class="py-2 max-w-[1240px] items-center  inline-block w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
      <p className='uppercase pb-14 text-xl font-bold tracking-widest text-[#5651e5]'>
      Life with Feel Fresh and Aromatic
              </p>
        <table class="pt-5 min-w-full">
          <thead class="bg-[#F6FBF4] border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Sl. No.
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Products
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Types
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Camphor
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Bheemsaini
              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Aromatic Essential Oils
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Jasmine, Rose, Rosemary, Sandalwood,
Lemongrass, Lavender
              </td>
            </tr>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Incent sticks and Dry corns
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Jasmine, Rose, Rosemary, Sandalwood,
Lemongrass, Lavender
              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Pearl Millet-Bajara
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ----
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div id='products' class="pl-32 p-2 flex max-w-[1240px]  py-16 flex-col">
    <div class=" items-center overflow-x-auto max-w-[1240px] sm:-mx-6 lg:-mx-8">
    <div class="py-2 max-w-[1240px] items-center  inline-block w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
      <p className='uppercase pb-3 text-xl font-bold tracking-widest text-[#5651e5]'>
      Natural & Herbal Products
              </p>
     <p className='pb-14'>
     It has been experienced that we do need to associate with other corporate groups who
are equally playing an important role in enhancing the healthy life of society. In this
regard, we decided to procure the products from Pantanjali and Khadi India. The details
are mentioned below:
     </p>
     <p className='uppercase pb-3 text-xl font-bold tracking-widest text-[#5651e5]'>
     Pantanjali
              </p>
        <table class="pt-5 min-w-full">
          <thead class="bg-[#F6FBF4] border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Sl. No.
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Products
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Types
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              White Poha
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Whole Wheat-Plain 
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Herbal Juices (Amla, Giloy, Aloe Vera, Wheatgrass)

              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Cosmetics
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Creams, Soaps, Face pack, Shampoo,
Hair oils
              </td>
            </tr>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Herbal Medicines
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Tablets, Juices, Powder
              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Oils
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Mustard, Rice Bran, Sesame
              </td>
            </tr>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Cow Ghee
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Tablets, Juices, Powder
              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Grains    
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Rice
              </td>
            </tr>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">7</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Sweeteners
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Honey, Jaggery Powder, Bhoora
              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">8</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Others
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Vermicelli, Noodles
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div id='products' class="pl-32 p-2 flex max-w-[1240px]  py-16 flex-col">
    <div class=" items-center overflow-x-auto max-w-[1240px] sm:-mx-6 lg:-mx-8">
    <div class="py-2 max-w-[1240px] items-center  inline-block w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
      <p className='uppercase pb-14 text-xl font-bold tracking-widest text-[#5651e5]'>
      Khadi India
              </p>
        <table class="pt-5 min-w-full">
          <thead class="bg-[#F6FBF4] border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Sl. No.
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Products
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Types
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Cosmetics
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Creams, Soaps, Face pack, Shampoo,
Hair oils, Hair oils
              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Essential Oils
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Rose, Jasmine, Sandal, Jojba, Lavender,
Lemon Grass, Aragon

              </td>
            </tr>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Religious
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Incented sticks, dry corn

              </td>
            </tr>
            <tr class="bg-[#F6FBF4] border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Pickles
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</Layout>
  )
}
