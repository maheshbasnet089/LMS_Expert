import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    return (
      <>
        {/* Hero Section: Image Side with Simple Header */}
        <div className="relative overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
          {/* Main Header */}
          <header
            id="page-header"
            className="relative flex flex-none items-center py-8"
          >
            {/* Main Header Content */}
            <div className="container mx-auto flex flex-col space-y-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:space-y-0 lg:px-8 xl:max-w-7xl">
              <div>
                <a
                  href="#"
                  className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                >
                  <svg
                    className="hi-mini hi-cube-transparent inline-block size-5 text-blue-600 transition group-hover:scale-110 dark:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Pathshala</span>
                </a>
              </div>
             {
                localStorage.getItem('token') ? (
                    <nav className="space-x-3 md:space-x-6">
                
                    <a
                      onClick={()=>{
                        localStorage.clear()
                        navigate('/login')
                      }}
                      className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                    >
                      <span>Log out</span>
                    </a>
                 
                  </nav>
                ) :
                (
                    <nav className="space-x-3 md:space-x-6">
                    <a
                      href="/login"
                      className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                    >
                      <span>Login</span>
                    </a>
                    <a
                      href="/register"
                      className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                    >
                      <span>Register</span>
                    </a>
                 
                  </nav>
                )
             }
            </div>
            {/* END Main Header Content */}
          </header>
          {/* END Main Header */}
  
          {/* Hero Content */}
          <div className="container relative mx-auto flex flex-col space-y-16 px-4 py-16 text-center lg:flex-row lg:space-y-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
            <div className="lg:flex lg:w-1/2 lg:items-center">
              <div>
                <div className="mb-2 inline-flex rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-medium leading-4 text-gray-800 dark:border-gray-600/50 dark:bg-gray-700/50 dark:text-gray-200">
                  Coding Institute
                </div>
                <h1 className="mb-4 text-4xl font-black text-black dark:text-white">
                  Pathshala
                  <span className="text-blue-600 dark:text-blue-500 ml-2">
                    Nepal
                  </span>
                </h1>
                <h2 className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                Your Gateway to Coding Excellence! We are dedicated to providing top-notch coding education and empowering aspiring developers to achieve their dreams. Explore our courses and start your coding journey with us
                </h2>
                <div className="flex flex-col justify-center space-y-2 pb-16 pt-10 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 lg:justify-start">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-7 py-3.5 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
                  >
                    <svg
                      className="hi-mini hi-arrow-down-tray inline-block size-5 opacity-75"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                      <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                    </svg>
                    <span>Download for free</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-7 py-3.5 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                  >
                    <span>Learn more</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
              <div className="relative mx-5 lg:w-96">
                <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-blue-200 dark:border-blue-900 lg:size-72" />
                <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border border-blue-100 dark:border-blue-950 lg:size-72" />
                <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border border-blue-200 dark:border-blue-900 lg:size-72" />
                <div className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border border-blue-100 dark:border-blue-950 lg:size-72" />
                <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-gray-200 dark:bg-gray-800" />
                <div className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-blue-800 bg-opacity-75 shadow-inner dark:bg-blue-900 dark:bg-opacity-75" />
                <img
                  src="https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg"
                  className="relative mx-auto rounded-lg shadow-lg"
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
          {/* END Hero Content */}
        </div>
        {/* END Hero Section: Image Side with Simple Header */}
      </>
    );
  }
  