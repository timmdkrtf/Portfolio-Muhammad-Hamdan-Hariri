import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import ProjectGallery from "../components/ProjectGallery";

export default function Modal({ isOpen, onClose, dataId }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      {/* Overlay */}
      <DialogBackdrop className="fixed inset-0 bg-gray-900/50" />

      {/* Wrapper untuk modal */}
      <div className="fixed inset-0 flex justify-center p-4 overflow-y-auto">
        <DialogPanel className="bg-[#16151d] rounded-lg shadow-lg max-sm:py-4 py-8 max-sm:px-3 px-10 w-full max-sm:max-w-full max-lg:max-w-[85%] max-w-[75%] min-h-[770px]">
          {/* Header */}
          <div className="flex flex-col gap-5 w-full">
            <DialogTitle className="text-xl font-semibold text-white orbitron-font">
              Detail Projek
            </DialogTitle>
            <div className='image-container h-[500px] relative max-sm:mt-[-130px] mt-[-120px]'>
              <ProjectGallery bend={0} dataImage={dataId.imageProject} textColor="#ffffff" borderRadius={0.02} scrollEase={0.02}/>
            </div>
            <div className='text-white relative max-sm:mt-[-90px] mt-[-70px]'>
              <p className='source3-font opacity-80'>{dataId.category}</p>
              <h3 className='text-2xl mt-1 orbitron-font font-bold'>{dataId.title}</h3>
              <p className='source3-font opacity-60 text-sm'>{dataId.description}</p>
              <div className='date absolute right-0 top-1 text-end opacity-70'>
                <hr className='w-[100px]'/>
                <p className='source3-font'>{dataId.date}</p>
              </div>
            </div>
            <div className='skill-list h-[130px]'>
              <div className='line-title relative'>
                <h4 className='text-lg orbitron-font bg-[#16151d] pr-3 w-fit z-2 relative text-white mb-2'>Skill & Tools</h4>
                <hr className='absolute w-full top-[14px] opacity-70 text-white' />
              </div>
              <div className='content flex flex-wrap gap-2'>
                {dataId.skill.map((skill, index) =>
                  <p key={index} className='badge-skill text-sm border-1 border-white px-2 py-[2px] source3-font rounded-xs text-white h-fit'>{skill}</p>
                )}
                {dataId.tools.map((tool, index) =>
                  <p key={index} className='badge-tools text-sm px-2 py-[2px] bg-white text-stone rounded-xs h-fit'>{tool}</p>  
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex flex-col gap-4 items-end">
            <hr className='border-white w-full opacity-40' />
            <div className='flex gap-6'>
              <button
                onClick={onClose}
                className="border-b-1 border-white text-white px-4 py-2 w-fit hover:font-bold orbitron-font transition-all cursor-target"
              >
                Close
              </button>
              {dataId.link &&(
                <a
                  className="border-1 px-4 py-2 w-fit bg-white text-stone-800 font-bold orbitron-font transition-all cursor-target"
                  href={dataId.link}
                  target="_blank"
                >
                  Open a Project
                </a>
              )}
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
