import React from 'react'



export const MainNavigation = (props) => {

  const doLogout = () => {
    window.localStorage.setItem('token', JSON.stringify("null"))
    // This is not elegant, but need to refresh the state of the system.  If using a global store, would use that.
    window.location.assign('/login')
  }

  return (<header className="h-16 flex justify-between px-12 pt-8">
    <div className="w-1/6">
      LOGO
    </div>
    <div className="flex w-1/6 justify-between ">
      <div>About</div>
      <div>Partner</div>
      <div>Other</div>
      <div onClick={doLogout}>Logout</div>
    </div>

  </header>)
}