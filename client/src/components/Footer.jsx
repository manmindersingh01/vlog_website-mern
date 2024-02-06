import React from 'react'

import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
export default function FooterCom() {
  return (
    <>
      <Footer className=' p-6 border border-t-8 border-teal-500'>
        <div className=" ">
          <div className=" ">
            <div className="">
              <Link to="/" className=' self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'> <span className=' px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'> Footer</span>here </Link>
            </div>
            <div className=" grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm: gap-6">
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link href='https://www.instagram.com/manminder_singh2401/' target='_blank' rel='noreferrer'>
                    Instagram
                  </Footer.Link>

                  <Footer.Link href='https://github.com/manmindersingh01' target='_blank' rel='noreferrer'>
                    GitHub
                  </Footer.Link>
                  <Footer.Link href='https://www.linkedin.com/in/manminder-singh-596447204/' target='_blank' rel='noreferrer'>
                    LinkedIn
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link href='https://www.instagram.com/manminder_singh2401/' target='_blank' rel='noreferrer'>
                    Instagram
                  </Footer.Link>

                  <Footer.Link href='https://github.com/manmindersingh01' target='_blank' rel='noreferrer'>
                    GitHub
                  </Footer.Link>
                  <Footer.Link href='https://www.linkedin.com/in/manminder-singh-596447204/' target='_blank' rel='noreferrer'>
                    LinkedIn
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <p className=' mt-10 text-slate-400'>this is a personal vlog site .whree i share my personal views nad experiences</p>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="">
            <Footer.Copyright by="ManminderSingh" year={new Date().getFullYear} text="&copy; Your Website 2024" />
          </div>
        </div>
      </Footer>
    </>
  )
}
