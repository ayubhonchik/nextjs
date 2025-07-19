import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='h-20 bg-gray-200 flex items-center gap-4 px-10'>
      <h2>Header</h2>
      <Link href={"/"}>Home</Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/Carts"}>Carts</Link>
      <Link href={"/Recipes"}>Recipes</Link>
      <Link href={"/login"}>Login</Link>
    </div>
  )
}

export default React.memo(Header)