import React from 'react'
import './header.scss'
import Logo from '../../assets/images/Group.svg'

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
					<div>
						<button
							type='button'
							className='inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-pink-light hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							Pro Plan
						</button>
						<img
							className='inline-block h-10 w-10 rounded-full m-5'
							src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''
						/>
					</div>
				</div>
			</nav>
		</div>
	)
}
