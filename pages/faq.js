import React, { useState } from 'react'
import FooterSite from '../components/FooterSite';
import ContactForm from '../components/ContactForm'
import { Helmet } from "react-helmet";
import HeaderSite from '../components/HeaderSite';


const accordionItems = [
    {
      id: 1,
      mainTitle: "FAQ: About Glimpse",
      title: "What is The Glimpse Group's model?",
      content1: "Glimpse is a diversified VR/AR platform company—we are not a VC or a holding company or a incubator/accelerator, but strive to incorporate the best elements of those into a structure that is optimized to meet the challenges of the emerging, early stage, VR/AR industry.",
      content2: "In a nascent industry, our unique model and robust VR/AR ecosystem significantly increases each underlying Glimpse company’s chance of success while simultaneously creating a viable and diversified investment platform that is not dependent on the succus of any one Glimpse company. Ultimately, our goal is for Glimpse to become a premier VR/AR software and services company with a global footprint, and for each of our companies to dominate their particular industry as it relates to VR/AR."
    },
    {
      id: 2,
      title: "How does The Glimpse Group's model work?",
      content1: 'Glimpse identifies strategic areas in VR/AR that have great potential (Enterprise/Corporate/Industry focus) and then we “plant flags”. A “flag” being a company we acquire from the outside or one we develop internally. In each case, Glimpse owns 100% of each company, which is acquired for equity of the Glimpse parent. Glimpse’s equity serves as the glue for the creation of our highly collaborative ecosystem.',
      content2: 'Once a company becomes part of Glimpse, it is integrated into the Glimpse ecosystem, while still maintaining its individuality and unique path. Due to Glimpse’s ecosystem, our companies are able to develop better products, faster times to market, less redundancies, lower costs and leverage significant go-to-market synergies. In parallel, Glimpse’s experienced management works very closely with each company to help build, develop and grow it.',
      content3: 'Our goal with each company is to exit it when it reaches a certain level of maturity – when that happens all Glimpse equity holders benefit from the distribution of exit proceeds. In addition, the exited company’s entrepreneurs and employees – who are also Glimpse equity owners – receive an additional material economic interest in their particular exit.',
    },
    {
      id: 3,
      mainTitle: "FAQ: By Startups",
      title: "If I have an idea for VR/AR, how do I join Glimpse?",
      content1: 'Simply reach out to us on our Contact page to discuss. We love talking to people from the industry and are seeking bold but well thought-out ideas. However, keep in mind that Cool is Not Enough!',
      content2: 'To make things more effective, please have a basic business plan that includes a description of the business, what business problem is solved, product MVP criteria, development roadmap, competitive landscape and a rough go-to-market strategy that identifies revenue channels and general market potential.',
      content3: 'In general, we expect any Glimpse company to realistically be able to generate revenue within 12 months (at most) from joining us.',
    },
    {
      id: 4,
      title: "I don't have any funding. Can I join Glimpse?",
      content1: 'Yes. Most of our companies and entrepreneurs are very early stage when joining Glimpse (in no small part due to the very early stage nature of the industry…). Glimpse is responsible for funding its companies. You can focus 100% of your time on product development, business development and managing your team – not waste precious time and effort on fundraising, legal, accounting, rent, etc.',
      content2: '',
      content3: '',
    },
    {
      id: 5,
      title: "Do I own my product/idea after joining Glimpse?",
      content1: 'Glimpse owns any and all IP (which is technically owned by the Glimpse subsidiary company, which the Glimpse parent owns…). In return, when an entrepreneur joins Glimpse, they receive equity in the Glimpse parent and a material economic interest in their company at time of exit.',
      content2: '',
      content3: '',
    },
    {
      id: 6,
      title: "I have a partner or a small team. Can they join Glimpse too?",
      content1: 'Yes. Many Glimpse companies are comprised of a small team when they come onboard. We are looking for passionate, smart, capable, collaborative VR/AR enthusiasts.',
      content2: '',
      content3: '',
    },
    {
      id: 7,
      mainTitle: "FAQ: By Clients",
      title: "Why should my organization work with Glimpse over other VR/AR companies?",
      content1: 'Yes. Many Glimpse companies are comprised of a small team when they come onboard. We are looking for passionate, smart, capable, collaborative VR/AR enthusiasts.',
      content2: '',
      content3: '',
    },
    {
      id: 8,
      title: "How does The Glimpse Group's model work?",
      content1: 'Glimpse identifies strategic areas in VR/AR that have great potential (Enterprise/Corporate/Industry focus) and then we “plant flags”. A “flag” being a company we acquire from the outside or one we develop internally. In each case, Glimpse owns 100% of each company, which is acquired for equity of the Glimpse parent. Glimpse’s equity serves as the glue for the creation of our highly collaborative ecosystem.',
      content2: 'Once a company becomes part of Glimpse, it is integrated into the Glimpse ecosystem, while still maintaining its individuality and unique path. Due to Glimpse’s ecosystem, our companies are able to develop better products, faster times to market, less redundancies, lower costs and leverage significant go-to-market synergies. In parallel, Glimpse’s experienced management works very closely with each company to help build, develop and grow it.',
      content3: 'Our goal with each company is to exit it when it reaches a certain level of maturity – when that happens all Glimpse equity holders benefit from the distribution of exit proceeds. In addition, the exited company’s entrepreneurs and employees – who are also Glimpse equity owners – receive an additional material economic interest in their particular exit.',
    },
    {
      id: 9,
      title: "I want to work with Glimpse to bring VR/AR to my company/industry. How do I get started?",
      content1: 'Our companies work with a wide array of companies in various industries and we look forward to hearing from you—simply go to our Contact page and send us a brief note. We will get back to you quickly to set up a call to discuss next steps and put you in touch with the most relevant Glimpse compan',
      content2: '',
      content3: '',
    },
    {
      id: 10,
      title: "What does it cost to develop a VR/AR project?",
      content1: 'We work with a range of budgets from small to very large, depending on the scope of work needed. We are also a software driven company, with SaaS and Software licensing models in place for certain Glimpse company products that could satisfy your business needs without large upfront costs. Over the past few years, the price of VR equipment has decreased dramatically, implementation has become easier and Glimpse’s ecosystem allows us to manage development and projects internally in a very cost effective manner, which translates to lower expense to the customer relative to others. Please go to our Contact page and send an inquiry for more information regarding specific pricing.',
      content2: '',
      content3: '',
    },
    
  ]

function faq() {

    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <HeaderSite />
            <div className='flex justify-center mb-6 py-12 px-3 mt-16' style={{ fontFamily: 'Montserrat' }}>
                <div className='w-11/12 md:w-9/12'>

                    <h1 className='text-4xl my-3 py-4'>FAQ: About Glimpse</h1>
                    <div className='m-3'>
                        <div className='m-4'>
                            <button className="w-full text-left bg-zinc-300 p-3 rounded-lg transform duration-500 hover:ease hover:bg-zinc-200 hover:scale-105 panel-title" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                                What is The Glimpse Group's model?
                            </button>
                            <div className="collapse m-3" id="faq1">
                                <div>
                                    <p>Glimpse is a diversified VR/AR platform company—we are not a VC or a holding company or an incubator/accelerator, 
                                    but strive to incorporate the best elements of those into a structure that is optimized to meet the challenges of the
                                    emerging, early stage, VR/AR industry. 
                                    </p>
                                    <br />
                                    <p>
                                    In a nascent industry, our unique model and robust VR/AR ecosystem significantly 
                                    increases each underlying Glimpse company’s chance of success while simultaneously creating a viable and diversified 
                                    investment platform that is not dependent on the succus of any one Glimpse company. Ultimately, our goal is for Glimpse 
                                    to become a premier VR/AR software and services company with a global footprint, and for each of our companies to dominate 
                                    their particular industry as it relates to VR/AR.</p>
                                </div>
                            </div>
                        </div>
                        <div className='m-4'>
                            <button className="w-full text-left bg-zinc-300 p-3 rounded-lg transform duration-500 hover:ease hover:bg-zinc-200 hover:scale-105" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                How does The Glimpse Group's model work?
                            </button>
                            <div className="collapse m-3" id="faq2">
                                <div>
                                    
                                    <p>Glimpse identifies strategic areas in VR/AR that have great potential (Enterprise/Corporate/Industry focus) and then we 
                                    “plant flags”. A “flag” being a company we acquire from the outside or one we develop internally. In each case, Glimpse owns 
                                    100% of each company, which is acquired for equity of the Glimpse parent. Glimpse’s equity serves as the glue for the 
                                    creation of our highly collaborative ecosystem. 
                                    </p>
                                    <br />
                                    <p>Once a company becomes part of Glimpse, it is integrated into the Glimpse ecosystem, while still maintaining its 
                                    individuality and unique path. Due to Glimpse’s ecosystem, our companies are able to develop better products, faster 
                                    times to market, less redundancies, lower costs and leverage significant go-to-market synergies. In parallel, Glimpse’s 
                                    experienced management works very closely with each company to help build, develop and grow it.</p>
                                    <br />
                                    <p>Our goal with each company is to exit it when it reaches a certain level of maturity – when that happens all Glimpse 
                                    equity holders benefit from the distribution of exit proceeds. In addition, the exited company’s entrepreneurs and employees 
                                    – who are also Glimpse equity owners – receive an additional material economic interest in their particular exit.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className='text-4xl my-3'>FAQ: By Startups</h1>
                    <div className='m-3'>
                        <div className='m-4'>
                            <button className="w-full text-left bg-zinc-300 p-3 rounded-lg transform duration-500 hover:ease hover:bg-zinc-200 hover:scale-105" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                If I have an idea for VR/AR, how do I join Glimpse?
                            </button>
                            <div className="collapse m-3" id="faq3">
                                <div>
                                    <p>Simply reach out to us on our Contact page to discuss. We love talking to people from the industry and are seeking bold 
                                    but well thought-out ideas. However, keep in mind that Cool is Not Enough! 
                                    </p>
                                    <br />
                                    <p>
                                    To make things more effective, please have a basic business plan that includes a description of the business, what business 
                                    problem is solved, product MVP criteria, development roadmap, competitive landscape and a rough go-to-market strategy that 
                                    identifies revenue channels and general market potential.</p>
                                    <br />
                                    <p>In general, we expect any Glimpse company to realistically be able to generate revenue within 12 months (at most) from 
                                    joining us.</p>
                                </div>
                            </div>
                        </div>
                        <div className='m-4'>
                            <button className="w-full text-left bg-zinc-300 p-3 rounded-lg transform duration-500 hover:ease hover:bg-zinc-200 hover:scale-105" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                                I don't have any funding. Can I join Glimpse?
                            </button>
                            <div className="collapse m-3" id="faq4">
                                <div>
                                    <p>Yes. Most of our companies and entrepreneurs are very early stage when joining Glimpse (in no small part due 
                                    to the very early stage nature of the industry…). Glimpse is responsible for funding its companies. You can focus 
                                    100% of your time on product development, business development and managing your team – not waste precious time 
                                    and effort on fundraising, legal, accounting, rent, etc.</p>
                                </div>
                            </div>
                        </div>
                        <div className='m-4'>
                            <button className="w-full text-left bg-zinc-300 p-3 rounded-lg transform duration-500 hover:ease hover:bg-zinc-200 hover:scale-105" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                                Do I own my product/idea after joining Glimpse?
                            </button>
                            <div className="collapse m-3" id="faq5">
                                <div>
                                    <p>Glimpse owns any and all IP (which is technically owned by the Glimpse subsidiary company, which the Glimpse 
                                    parent owns…). In return, when an entrepreneur joins Glimpse, they receive equity in the Glimpse parent and a 
                                    material economic interest in their company at time of exit.</p>
                                </div>
                            </div>
                        </div>
                        <div className='m-4'>
                            <button className="w-full text-left bg-zinc-300 p-3 rounded-lg transform duration-500 hover:ease hover:bg-zinc-200 hover:scale-105" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                                I have a partner or a small team. Can they join Glimpse too?
                            </button>
                            <div className="collapse m-3" id="faq6">
                                <div>
                                    <p>Yes. Many Glimpse companies are comprised of a small team when they come onboard. We are looking for passionate, 
                                    smart, capable, collaborative VR/AR enthusiasts.</p>
                                </div>
                            </div>
                        </div>
                        
                        <h1 className='text-4xl my-3'>FAQ: By Clients</h1>
                        <div className='m-3'>
                            <div className='m-4'>
                                <button className="w-full text-left bg-zinc-300 p-3 rounded-lg transform duration-500 hover:ease hover:bg-zinc-200 hover:scale-105" type="button" data-bs-toggle="collapse" data-bs-target="#faq7" aria-expanded="false" aria-controls="faq7">
                                    Why should my organization work with Glimpse over other VR/AR companies?
                                </button>
                                <div className="collapse m-3" id="faq7">
                                    <div>
                                        <p>Yes. Many Glimpse companies are comprised of a small team when they come onboard. We are looking for passionate, smart, 
                                        capable, collaborative VR/AR enthusiasts.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='m-4'>
                                <button className="w-full text-left bg-zinc-300 p-3 rounded-lg transform duration-500 hover:ease hover:bg-zinc-200 hover:scale-105" type="button" data-bs-toggle="collapse" data-bs-target="#faq8" aria-expanded="false" aria-controls="faq8">
                                    How does The Glimpse Group's model work?
                                </button>
                                <div className="collapse m-3" id="faq8">
                                    <div>
                                        <p>Glimpse identifies strategic areas in VR/AR that have great potential (Enterprise/Corporate/Industry focus) and then we 
                                        “plant flags”. A “flag” being a company we acquire from the outside or one we develop internally. In each case, Glimpse owns 
                                        100% of each company, which is acquired for equity of the Glimpse parent. Glimpse’s equity serves as the glue for the 
                                        creation of our highly collaborative ecosystem.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='m-4'>
                                <button className="w-full text-left bg-zinc-300 p-3 rounded-lg transform duration-500 hover:ease hover:bg-zinc-200 hover:scale-105" type="button" data-bs-toggle="collapse" data-bs-target="#faq9" aria-expanded="false" aria-controls="faq9">
                                    I want to work with Glimpse to bring VR/AR to my company/industry. How do I get started?
                                </button>
                                <div className="collapse m-3" id="faq9">
                                    <div>
                                        <p>Our companies work with a wide array of companies in various industries and we look forward to hearing from 
                                        you—simply go to our Contact page and send us a brief note. We will get back to you quickly to set up a call 
                                        to discuss next steps and put you in touch with the most relevant Glimpse company.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='m-4'>
                                <button className="w-full text-left bg-zinc-300 p-3 rounded-lg transform duration-500 hover:ease hover:bg-zinc-200 hover:scale-105" type="button" data-bs-toggle="collapse" data-bs-target="#faq10" aria-expanded="false" aria-controls="faq10">
                                    What does it cost to develop a VR/AR project?
                                </button>
                                <div className="collapse m-3" id="faq10">
                                    <div>
                                        <p>We work with a range of budgets from small to very large, depending on the scope of work needed. We are also a software 
                                        driven company, with SaaS and Software licensing models in place for certain Glimpse company products that could satisfy 
                                        your business needs without large upfront costs. Over the past few years, the price of VR equipment has decreased 
                                        dramatically, implementation has become easier and Glimpse’s ecosystem allows us to manage development and projects 
                                        internally in a very cost effective manner, which translates to lower expense to the customer relative to others. 
                                        Please go to our Contact page and send an inquiry for more information regarding specific pricing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm />
            <FooterSite />
        </div>
    )
}

export default faq
