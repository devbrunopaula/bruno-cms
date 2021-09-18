import './layout.scss'
import HeaderComp from '../Header'
import Sidebar from '../Sidebar'

/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'
import Logo from '../../assets/images/Group.svg'

export default function LayoutRc({children}) {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	return (
		<>
			<HeaderComp setSidebarOpen={setSidebarOpen} />
			<div className='layout_sidebar_body flex overflow-hidden bg-white'>
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog
						as='div'
						className='fixed inset-0 flex z-40 lg:hidden'
						onClose={setSidebarOpen}
					>
						<Transition.Child
							as={Fragment}
							enter='transition-opacity ease-linear duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='transition-opacity ease-linear duration-300'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
						</Transition.Child>
						<Transition.Child
							as={Fragment}
							enter='transition ease-in-out duration-300 transform'
							enterFrom='-translate-x-full'
							enterTo='translate-x-0'
							leave='transition ease-in-out duration-300 transform'
							leaveFrom='translate-x-0'
							leaveTo='-translate-x-full'
						>
							<div className='relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none'>
								<Transition.Child
									as={Fragment}
									enter='ease-in-out duration-300'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='ease-in-out duration-300'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'
								>
									<div className='absolute top-0 right-0 -mr-12 pt-2'>
										<button
											type='button'
											className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
											onClick={() =>
												setSidebarOpen(false)
											}
										>
											<span className='sr-only'>
												Close sidebar
											</span>
											<XIcon
												className='h-6 w-6 text-white'
												aria-hidden='true'
											/>
										</button>
									</div>
								</Transition.Child>
								<div className='flex-1  overflow-y-auto'>
									<div className='flex-shrink-0 flex items-center px-4 bg-blue-primary'>
										<img
											className='h-8 w-auto '
											src={Logo}
											alt='BrunoCms'
										/>
										<p className='text-blue-dark'>
											Bruno
											<span className='text-blue-light'>
												CMS
											</span>
										</p>
									</div>
									<nav aria-label='Sidebar' className='mt-5'>
										<div className='px-2 space-y-1'>
											<Sidebar />
										</div>
									</nav>
								</div>
								<div className='flex-shrink-0 flex border-t border-gray-200 p-4'>
									<a
										href='/'
										className='flex-shrink-0 group block'
									>
										<div className='flex items-center'>
											<div>
												<img
													className='inline-block h-10 w-10 rounded-full'
													src='https://brunopaula.com/images/brunopaula.jpg'
													alt='bruno paula'
												/>
											</div>
											<div className='ml-3'>
												<p className='text-base font-medium text-gray-700 group-hover:text-gray-900'>
													Bruno Paula
												</p>
												<p className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
													<a href='https://www.brunopaula.com'>
														View portfolio
													</a>
												</p>
											</div>
										</div>
									</a>
								</div>
							</div>
						</Transition.Child>
						<div className='flex-shrink-0 w-14' aria-hidden='true'>
							{/* Force sidebar to shrink to fit close icon */}
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div className='hidden lg:flex lg:flex-shrink-0'>
					<div className='flex flex-col w-72'>
						{/* Sidebar component, swap this element with another sidebar if you like */}
						<div className='min-h-full flex-1 flex flex-col min-h-0 bg-blue-sidebarBg'>
							<div className='overflow-y-auto'>
								<nav className='flex-1' aria-label='Sidebar'>
									<div className='space-y-1'>
										<Sidebar />
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col min-w-0 flex-1 overflow-hidden'>
					<div className='lg:hidden'></div>
					<div className='flex-1 relative z-0 flex overflow-hidden'>
						<main className='flex-1 relative z-0 overflow-y-auto focus:outline-none'>
							{/* Start main area*/}
							<div className='max-w-screen-md absolute inset-0 py-6 px-4 sm:px-6 lg:px-8 '>
								<div className='h-full'>{children}</div>
							</div>
							{/* End main area */}
						</main>
					</div>
				</div>
			</div>
		</>
	)
}
