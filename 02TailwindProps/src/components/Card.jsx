import React from "react";
//props means properties of this card
//function Card(props): if we use this syntax, then to access the varible of object(props), we need to use props.userName
//we can also do this(function Cards({userName})), then we can directly access the variables without using props.if we have more than one variable
//we can write function Cards({variable1,varible2...and so on})
//--passing default value to a varible--
//if we want to pass a default valuee to a variable , we can use this, function Cards({userName="default username of your choice"}),
//here what happens is that if when calling <Cards/> in app.jsx , we dnt pass any value for username , it will rint the default value. 
function Card({userName="Default",btnText}){
    return(
        <div class="relative h-[400px] w-[300px] rounded-md mt-20">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          class="z-0 h-full w-full rounded-md object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class="text-lg font-semibold text-white">{userName}</h1>
          <p class="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
            {btnText} →
          </button>
        </div>
      </div>
    )
}
export default Card;