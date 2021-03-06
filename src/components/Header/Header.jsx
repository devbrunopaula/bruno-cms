import React from 'react'
import './header.scss'
import Logo from '../../assets/images/Group.svg'
import {MenuIcon} from '@heroicons/react/solid'

export default function HeaderComp({setSidebarOpen}) {
	return (
		<div>
			<nav className='bg-blue-navBlue h-20 flex items-center'>
				<div className='w-full flex items-center justify-between px-7 py-7'>
					<div>
						<div className='flex items-center'>
							<img src={Logo} alt='logo icon' />

							<p className='logo_name'>
								Bruno
								<span className='text-blue-light'>CMS</span>
							</p>
						</div>
					</div>
					<div className='flex flex-row items-center'>
						<div className='xs:hidden '>
							<button
								type='button'
								className='h-8 px-4 border border-transparent text-s font-medium rounded shadow-sm text-white bg-pink-light hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							>
								Pro Plan
							</button>
						</div>
						<img
							className='inline-block h-10 w-10 rounded-full m-5'
							src='https://brunopaula.com/images/brunopaula.jpg'
							alt=''
						/>
						<div className='lg:hidden'>
							<button
								type='button'
								className='-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900'
								onClick={() => setSidebarOpen(true)}
							>
								<span className='sr-only'>Open sidebar</span>
								<MenuIcon
									className='h-6 w-6 text-white'
									aria-hidden='true'
								/>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}
