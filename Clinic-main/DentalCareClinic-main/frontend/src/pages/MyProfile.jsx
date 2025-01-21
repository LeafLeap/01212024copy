import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData,setUserData] = useState({
    name:"Leaf Something",
    image:assets.profile_pic,
    email:'leafleap@gmail.com',
    phone:'+63 999 999 9999',
    address:{
      line1:"Block something 5",
      line2:"Caloocan City"
    },
    gender:'Male',
    dob:'2000-01-20'
  })

  const [isEdit,setIsEdit] = useState(false)

  return (
    <div>
        <div>
        <img src={userData.image} alt="" />

        {
          isEdit 
          ? <input type="text"/>
          : <p>{userData.name}</p>
        }
        </div>
    </div>
  )
}

export default MyProfile