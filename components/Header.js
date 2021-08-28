import Image from 'next/image';
import {
    SearchIcon,
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline'
import {
    HomeIcon,
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    UserGroupIcon,
    ViewGridIcon
} from '@heroicons/react/solid'
import HeaderIcon from './HeaderIcon';

function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex p-2 items-center shadow-md lg:px-5">
            {/* LEFT */}
            <div className="flex items-center">
                <Image src="https://icons-for-free.com/iconfiles/png/512/facebook+high+quality+media+social+social+media+square+icon-1320192615308993674.png"
                        width={40}
                        height={40}
                        className="rounded-full"
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600"/>
                    <input className="hidden md:inline-flex bg-transparent outline-none ml-1 items-center placeholder-gray-500 flex-shrink" type="text" placeholder="Search Facebook" />
                </div>
            </div>

            {/* CENTER */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* IMAGE */}
                <p className="whitespace-nowrap font-semibold pr-3">Jay B. Crisostomo</p>
                <ViewGridIcon className='icon'/>
                <ChatIcon className='icon'/>
                <BellIcon className='icon'/>
                <ChevronDownIcon className='icon'/>
            </div>
        </div>
    )
}

export default Header
