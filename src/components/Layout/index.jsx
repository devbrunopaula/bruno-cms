import './layout.scss'
import HeaderComp from '../Header'
import Sidebar from '../Sidebar'

const LayoutRc = () => {
	return (
		<div className='flex flex-col'>
			<div>
				<HeaderComp />
			</div>
			<div className=' test1 flex flex-row  layout_sidebar_body '>
				<div className='sidebar hidden w-1/4 md:block'>
					<Sidebar />
				</div>
				<div>Body</div>
			</div>
		</div>
	)
}

export default LayoutRc
