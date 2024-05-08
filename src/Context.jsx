import React, {useContext, useState, useEffect} from 'react';
const AppContext = React.createContext();

const AppProvider = ({children})=> {

const [showMenuContainer, setMenuContainer] = useState(false)
const [headerColor,setHeaderColor]= useState(null)
const[showMessagePane, setMessagePane] = useState(false)
const [bodyColor, setBodyColor] = useState(false)

const[messageSent, setMessageSent] = useState(false)



const handleContactClick=()=>{
    if(showMessagePane){
        setMessagePane(false)
        setMessageSent(false)
    }
    else{
        setMessagePane(true)
    }
    
   
}
const getScreenWidth =()=>{
    let width = window.innerWidth;
    return width
    }

const handleMenuContainer =()=>{
    if(showMenuContainer){
         setMenuContainer(false)
         setHeaderColor(null)
    }
    else{
         setMenuContainer(true)
         setHeaderColor('#03449d')
    }
    }

const [screenWidth, setScreenWidth] = useState(getScreenWidth())

    
useEffect(()=>{
const updateScreenWidth =()=>{
    setScreenWidth(getScreenWidth())
}
window.addEventListener('resize', updateScreenWidth)


},[screenWidth])



  return (
   <AppContext.Provider value={{setMessageSent,messageSent,screenWidth, handleMenuContainer, showMenuContainer,headerColor,handleContactClick,showMessagePane,bodyColor,setBodyColor}}>
            {children}
   </AppContext.Provider>
  )
}

export const useGlobalContext=()=>{
return useContext(AppContext); 
}

export default AppProvider