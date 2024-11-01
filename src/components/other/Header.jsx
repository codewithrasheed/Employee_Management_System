const Header = (props) => {

  const logOutUser = () =>{
      localStorage.setItem("loggedInUser", "");
      props.changeUser("");
  }
  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>
          {props.data ? props.data.username : "Rasheed" } 👋</span> </h1>
        <button onClick={logOutUser} className='bg-red-600 px-5 py-2 rounded-md font-medium text-lg'>Log Out</button>
    </div>
  )
}

export default Header