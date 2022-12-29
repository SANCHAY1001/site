import Head from 'next/head'
import Link from 'next/link'
import {signOut, useSession} from 'next-auth/react'
import React , {useContext , useEffect , useState} from 'react'
import LogoImg from '../public/images/logo122.png'
import {SearchIcon} from '@heroicons/react/solid';
import { ToastContainer } from 'react-toastify'
import Cookies from 'js-cookie'
import { Menu } from '@headlessui/react'
import DropdownLink from '../components/DropdownLink'
import 'react-toastify/dist/ReactToastify.css'
import {BsCart , BsPerson} from 'react-icons/bs'
import {Store} from '../utils/Store'
import { InputBase } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { useRouter } from 'next/router'
import Image from 'next/image'
export default function ({title , children}) {

    const router = useRouter();

    const [query , setQuery] = useState('');
    const queryChangeHandler = (e) => {
        setQuery(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        router.push(`/search?query=${query}`);
    }

    const {status , data : session} = useSession();
    const {state, dispatch} = useContext(Store);
    const {cart} = state;
    const [cartItemsCount, setcartItemsCount] = useState(0);
    useEffect(() => {
        setcartItemsCount(cart.cartItems.reduce((a,c) => a+c.quantity, 0))
    }, []);
    const logoutClickHandler = () => {
        Cookies.remove('cart');
        dispatch({type: 'CART_RESET'});
        signOut({callbackUrl: '/login'})
    }
 return (
    <>
        <Head>
            <title>{title? title + ' - SANCHAY': 'SANCHAY'}</title>
            <meta name="description" content="Generated" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <ToastContainer position='bottom-center' limit={1}/>

        <div className='flex bg-[#F6FBF4] min-h-screen flex-col justify-between'>
            <header>
                <nav className='flex sm:flex-grow-0 bg-[#ebe9e9]  h-24 justify-between px-4 shadow-md shadow-gray-400 items-center py-2'>
                    <Link legacyBehavior href="/">
                        <Image src={LogoImg} className='h-[100px] object-fill w-[300px]' />
                    </Link>
                    {/* <div className=' hidden  sm:flex items-center h-10 rounded-md flex-grow cursor-pointer  bg-yellow-400 hover:bg-yellow-500'>
                        <form>
                            
                        </form>
                        <input onSubmit={submitHandler} type="submit" name='query' onChange={queryChangeHandler} className='p-2 h-full w-6 bg-[#F6FBF4] flex-grow flex-shrink rounded-l-md focus:outline-none px-4' placeholder='Search' />
                        <SearchIcon className='h-12 p-4' />
                    </div> */}

                    <div className='items-center'>
                        <form onSubmit={submitHandler} className ='bg-white border-5 rounded-lg'>
                            <InputBase name='query' className='px-4 flex-grow flex-shrink' placeholder="Search" onChange={queryChangeHandler} />
                            <IconButton type="submit"className='lg:inline-block flex-grow flex-shrink md:inline-block hidden' aria-lable="search">
                                <SearchIcon className=' h-5 lg:inline-block hidden' />
                            </IconButton>
                        </form>
                    </div>
                    <div className='flex z-30 items-center ' >
                        <Link className='mx-3 shadow-sm rounded-md  shadow-gray-300 hover:shadow-gray-500 text-black' href='/Listing'>Products</Link>
                        <Link className='mx-3 shadow-sm rounded-md  shadow-gray-300 hover:shadow-gray-500 text-black' href='/#about'>Background</Link>
                        <Link className='mx-3 shadow-sm rounded-md  shadow-gray-300 hover:shadow-gray-500 text-black' href='/#vision'>Mission</Link>
                        <BsCart/>
                        <Link legacyBehavior href="/cart"><a className='mx-4 shadow-sm rounded-md  shadow-gray-300 hover:shadow-gray-500 text-black'>Cart{cartItemsCount>0 && (
                            <span className='ml-1 rounded bg-[#5FD068] px-2 py-1 text-xs font-bold text-white'>{cartItemsCount}</span>
                        )}</a>
                        </Link>
                        {status ===  'loading' ? ('Loading') : 
                            session?.user ? ( 
                                <Menu as="div" clasName="relative inline-block">
                                    <Menu.Button className="text-yellow-400 pl-5">
                                        {session.user.name}
                                    </Menu.Button>
                                    <Menu.Items className='absolute bg-[#F6FBF4] right-0 w-56 origin-top-right shadow-lg'>
                                        <Menu.Item>
                                        <DropdownLink className="dropdown-link " href="/profile">
                                            Profile
                                        </DropdownLink>
                                        </Menu.Item>
                                        {session.user.isAdmin && (
                                            <Menu.Item>
                                                <DropdownLink clasName="dropdown-link"
                                                href="/admin/dashboard">Admin Dashboard</DropdownLink>
                                            </Menu.Item>
                                        )}
                                        <Menu.Item>
                                        <DropdownLink className="dropdown-link " href="/order-history">
                                            Order History
                                        </DropdownLink>
                                        </Menu.Item>
                                        <Menu.Item>
                                         <a className='dropdown-link' href='#' onClick={logoutClickHandler}>Logout</a>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                             )
                        : ( 
                            <span className='flex p-1 items-center'>
                                <BsPerson/>
                                <Link  legacyBehavior href='/login'>
                                <a className='px-3 shadow-sm rounded-md  shadow-gray-300 hover:shadow-gray-500 text-black'>Login</a>
                            </Link>
                            </span>
                            
                        )
                    }
                    </div>
                </nav>
            </header>

            <main className='container m-auto mt-4 px-4  '>
                {children}
            </main> 
            <footer className='flex h-10 shadow-inner justify-center items-center '>
                <p>Copyright 2022 SANCHAY</p>
            </footer>
        </div>
    </>
  )
}
