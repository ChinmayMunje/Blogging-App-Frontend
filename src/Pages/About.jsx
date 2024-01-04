import React from 'react'

const About = () => {
  return (
    <div>
      <div className='flex flex-col'>
        <h1 className='font-bold text-2xl text-start pt-10 text-blue-950 underline'>About Us</h1>
        <div className='flex flex-col text-start'>
        <p className='m-4'>
          BlogLink is a website dedicated to those who create and maintain websites: web developers, web designers, webmasters, and so on.
          </p>
          <p className='m-4'>
            Our aim is to make web development easier and more fun by providing high-quality resources and useful tutorials to our readers. The website has been founded in June 2008. The name "BlogLink" came from the founder’s immoderate love for these sweet, friendly and funny animals.
          </p>
          <p className='m-4'>
            BlogLink provides free guides, tutorials, and articles about web development, WordPress and web design. All content on the site is free of charge for our readers.
          </p>
          <p className='m-4'>
            In addition to articles, we also provide exclusive deals, coupons and discounts on hosting, WordPress Themes and everything else that can be useful to bloggers, web developers and designers.</p>

        </div>
       
      </div>
    </div>
  )
}

export default About