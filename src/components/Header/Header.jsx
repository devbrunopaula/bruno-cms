import React from 'react'
import './header.scss'
import Logo from '../../assets/images/Group.svg'
import {MenuIcon} from '@heroicons/react/solid'

export default function HeaderComp() {
	return (
		<div>
			<nav className='bg-blue-navBlue h-20 flex items-center'>
				<div className='container m-auto flex items-center justify-between'>
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
						<button
							type='button'
							className=' h-8 px-4 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-pink-light hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							Pro Plan
						</button>
						<img
							className='inline-block h-10 w-10 rounded-full m-5'
							src='https://brunopaula.com/images/brunopaula.jpg'
							alt=''
						/>
						<MenuIcon className='text-white md:hidden pr-4' />
					</div>
				</div>
			</nav>
		</div>
	)
}
