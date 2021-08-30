import React from 'react'
import './header.scss'
import Logo from '../../assets/images/Group.svg'

export default function HeaderComp() {
	return (
		<div>
			<nav className='bg-blue-800'>
				<div className='container m-auto flex items-center justify-between'>
					<div>
						<div className='flex items-center'>
							<img src={Logo} alt='logo icon' />

							<p className='logo_name'>
								Bruno<span>CMS</span>
							</p>
						</div>
					</div>
					<div>icons</div>
				</div>
			</nav>
		</div>
	)
}
