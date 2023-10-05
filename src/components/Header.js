import React from 'react'

function Header() {
    const logo = <img
                    src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                    alt="logo"
                />
  return (
    <div className='header'>
        {logo}
      <span className='span'>Keep</span>
    </div>
  )
}

export default Header