import React from 'react'

function Loading() {
  return (
    <div className=" absolute left-[40%] mx-auto flex justify-center items-center w-100">
    <div className="  animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500">
    <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"  className="rounded-full h-28 w-28"/>

    </div>
</div>
  )
}

export default Loading