import { Menu } from '@headlessui/react'
import {TiArrowSortedDown} from 'react-icons/ti'
import {BsBoxArrowUpRight} from 'react-icons/bs'

 function Auth() {

    const user={
        name:'alper kamil',
        avatar:'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo='
    }
    
  return (
    <div>
        <Menu>
              <Menu.Button className="relative flex items-center gap-x-4 bg-black rounded-full capitalize hover:bg-active">
                    <img src={user.avatar} className="w-8 h-8 rounded-full object-cover p-px"/>
                    <span>{user.name}</span>
                    <TiArrowSortedDown className="mx-1"/>
              </Menu.Button>
              <Menu.Items className="flex flex-col absolute right-5 w-[200px] gap-y-3 text-sm p-3 rounded-lg mt-3 bg-primarygray">
                <Menu.Item className="flex justify-between items-center">
                  {({ active }) => (
                    <a
                      className={`${active && 'text-white hover:text-base'}`}
                      href="/account-settings"
                    >
                      Account settings
                      <BsBoxArrowUpRight/>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${active && 'text-white hover:text-base'}`}
                      href="/account-settings"
                    >
                      Documentation
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${active && 'text-white hover:text-base'}`}
                      href=""
                    >
                      Log out
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
    </Menu>
    </div>
  )
}
export default Auth