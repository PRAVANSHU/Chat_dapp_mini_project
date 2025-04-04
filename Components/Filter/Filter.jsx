import React,{useState,useContext} from 'react'
import Image from 'next/image'
import Style from "./Filter.module.css"
import images from "../../assets"
import { ChatAppContext } from '@/Context/ChatAppContext'
import { Model } from '../index1'

const Filter = () => {

  const {account,addFriends}=useContext(ChatAppContext);
  const [addFriend,setAddFriend]=useState(false);



  return (
    <div className={Style.Filter}>
      <div className={Style.Filter_box}>
        <div className={Style.Filter_box_left}>
          <div className={Style.Filter_box_left_search}>
            <Image src={images.search} alt='search' width={20} height={20}/>
            <input type='text' placeholder='search..' />
          </div>

        </div>
        <div className={Style.Filter_box_right}>
          <button>
            <Image src={images.clear} alt='clear' width={20} height={20}/>
            CLEAR CHAT
          </button>
          <button onClick={()=>setAddFriend(true)}>
            <Image src={images.user} alt='clear' width={20} height={20}/>
            ADD FRIEND
          </button>
        </div>

      </div>

      {/* model component */}
      {
        addFriend &&(
          <div className={Style.Filter_model}>
            <Model
             openBox={setAddFriend}
             title="WELCOME TO"
             head="CHATX"
             info="ChatX is a blockchain-powered messaging app that puts privacy back in your hands. No central servers. No tracking. Just end-to-end encrypted, peer-to-peer chats secured by Web3."
             smallInfo="Kindly Select Your Friend Name & Address.."
             image={images.hero}
             functionName={addFriends}
            />
          </div>
        )
      }
    </div>
  )
}

export default Filter