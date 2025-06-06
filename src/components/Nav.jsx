import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className='flex justify-center gap-6'>
         <Link to='/home'>Home</Link>
         <Link to='/product'>products</Link>
         <Link to='/wishlist'>wishlist</Link>
         <Link to='/cart'>cart</Link>

    </div>
    </>
  )
}

export default Nav