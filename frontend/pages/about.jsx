import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar';
import Reg from '../components/Reg'



import Image from 'next/image';



const register = () => {
  return (
    <div>
        <Navbar />
        <About />
        
      <div className='grid justify-evenly lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full mt-32 ml-2 mr-2'>  
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          {/* <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/kBMsSFj/IMG-20230116-095744.jpg" alt="Sunset in the mountains"/> */}
          
          <Image
            src="https://i.ibb.co/kBMsSFj/IMG-20230116-095744.jpg"
            alt="Sumit Picture"
            width={500}
            height={500}
            style={{ borderRadius: '50%'}}
          />
          
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sumit Kumar</div>
            <p className="text-gray-700 text-base">
              <b>Full Stack Developer</b><br></br>Indian Institute of Information Technology<br></br> Design and Manufacturing Kancheepuram
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#coding</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#badminton</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#dogs</span>
          </div>
        </div>
        
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          {/* <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/pK9fkZ2/Whats-App-Image-2023-01-16-at-10-11-26.jpg" alt="Sunset in the mountains"/> */}
          
          <Image
            src="https://i.ibb.co/pK9fkZ2/Whats-App-Image-2023-01-16-at-10-11-26.jpg"
            alt="Divyam Picture"
            width={500}
            height={500}
            style={{ borderRadius: '50%'}}
          />
          
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
          {/* <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/HPM6ftY/Whats-App-Image-2023-01-16-at-10-11-29.jpg" alt="Sunset in the mountains"/> */}
          
          <Image
            src="https://i.ibb.co/HPM6ftY/Whats-App-Image-2023-01-16-at-10-11-29.jpg"
            alt="Himasnhu Picture"
            width={500}
            height={500}
            style={{ borderRadius: '50%'}}
          />
          
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
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sleep</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#coding</span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          {/* <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/8gX4s9m/Whats-App-Image-2023-01-16-at-10-12-58.jpg" alt="Sunset in the mountains"/> */}
          
          <Image
            src="https://i.ibb.co/8gX4s9m/Whats-App-Image-2023-01-16-at-10-12-58.jpg"
            alt="Santosh Picture"
            width={500}
            height={500}
            style={{ borderRadius: '50%'}}
          />
          
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

