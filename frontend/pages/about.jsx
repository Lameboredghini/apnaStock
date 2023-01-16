import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar';
import Reg from '../components/Reg'
import IgImg1 from '../public/ig-img-1.jpeg';
const register = () => {
  return (
    <div>
        <Navbar />
        <About />
        {/* <div className="flex flex-row mt-20 mb-20 ml-20" >
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url("WhatsApp Image 2023-01-16 at 10.12.58.jpeg")` }} title="Santosh Dangi">
          </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
               
                
              </p>
                <div className="text-gray-900 font-bold text-xl mb-2">Santosh Dangi</div>
                <p className="text-gray-700 text-base">Frontend Developer<br></br>Github:<a href=''></a></p>
                </div>
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-4" src="https://upload.wikimedia.org/wikipedia/en/4/4a/Indian_Institute_of_Information_Technology%2C_Design_and_Manufacturing%2C_Kancheepuram_logo.png"/>
                  <div className="text-sm">
                <p className="text-gray-900 leading-none">Indian Institute of Information Technology<br></br> Design and Manufacturing Kancheepuram</p>
                
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url("IMG_20230116_095744.jpg")` }} title="Sumit Kumar">
          </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
               
                
              </p>
                <div className="text-gray-900 font-bold text-xl mb-2">Sumit Kumar</div>
                <p className="text-gray-700 text-base">Frontend Developer<br></br>Github:<a href=''></a></p>
                </div>
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-4" src="https://upload.wikimedia.org/wikipedia/en/4/4a/Indian_Institute_of_Information_Technology%2C_Design_and_Manufacturing%2C_Kancheepuram_logo.png"/>
                  <div className="text-sm">
                <p className="text-gray-900 leading-none">Indian Institute of Information Technology<br></br> Design and Manufacturing Kancheepuram</p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-20 mb-20 ml-20" >
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url("WhatsApp Image 2023-01-16 at 10.11.26.jpeg")` }} title="Woman holding a mug">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  
                  
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">Divyam Yadav</div>
                <p className="text-gray-700 text-base">Frontend Developer<br></br>Github:<a href=''></a></p>
              </div>
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="https://upload.wikimedia.org/wikipedia/en/4/4a/Indian_Institute_of_Information_Technology%2C_Design_and_Manufacturing%2C_Kancheepuram_logo.png" alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Indian Institute of Information Technology<br></br> Design and Manufacturing Kancheepuram</p>
                  
                </div>
              </div>
            </div>
          </div>
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url("WhatsApp Image 2023-01-16 at 10.11.29.jpeg")` }} title="Woman holding a mug">
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">Himanshu</div>
              <p className="text-gray-700 text-base">Frontend Developer<br></br>Github:<a href=''></a></p>
            </div>
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src="https://upload.wikimedia.org/wikipedia/en/4/4a/Indian_Institute_of_Information_Technology%2C_Design_and_Manufacturing%2C_Kancheepuram_logo.png" alt="Avatar of Jonathan Reinink" alt="Avatar of Jonathan Reinink"/>
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Indian Institute of Information Technology<br></br> Design and Manufacturing Kancheepuram</p>
                
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className='grid justify-evenly lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full mt-32 ml-2 mr-2'>  
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/kBMsSFj/IMG-20230116-095744.jpg" alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sumit Kumar</div>
            <p className="text-gray-700 text-base">
              <b>Full Stack Developer</b><br></br>Indian Institute of Information Technology<br></br> Design and Manufacturing Kancheepuram
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Coding</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Dogs</span>
          </div>
        </div>
        
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/pK9fkZ2/Whats-App-Image-2023-01-16-at-10-11-26.jpg" alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Divyam Yadav</div>
            <p className="text-gray-700 text-base">
            <b>Full Stack Developer</b><br></br>Indian Institute of Information Technology<br></br> Design and Manufacturing Kancheepuram
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#coding</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gaming</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fitness</span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/HPM6ftY/Whats-App-Image-2023-01-16-at-10-11-29.jpg" alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Himanshu</div>
              <p className="text-gray-700 text-base">
              <b>Full Stack Developer</b>
              </p>
              <p>Indian Institute of Information Technology Design and Manufacturing Kancheepuram</p>
            {/* <div className='align-bottom'>
            </div> */}
          </div>
          <div className="mt-4 px-6 pt-4 pb-2 align-bottom">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gaming</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#GussTT</span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/8gX4s9m/Whats-App-Image-2023-01-16-at-10-12-58.jpg" alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Santosh Dangi</div>
            <p className="text-gray-700 text-base">
            <b>Full Stack Developer</b><br></br>Indian Institute of Information Technology<br></br> Design and Manufacturing Kancheepuram
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fitness</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#coding</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cooking</span>
          </div>
        </div>
      </div>
    </div>
     
  )
}

export default register

