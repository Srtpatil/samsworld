import React from 'react'
import "./Contact.scss"
import { BiLogoGmail} from 'react-icons/bi'
import { EMAIL, LINKEDIN_LINK, TWITTER_LINK } from '../../constants'

const Contact = () => {
  return (
    <div className='contacts-container'>
      <p className='contacts-container-msg'>Shoot me an email if you want to connect! You can also find me on <a href={LINKEDIN_LINK} target='_blank'>LinkedIn</a> or <a href={TWITTER_LINK} target='_blank'>Twitter</a> <br /> if that's more your speed.</p>
      <div> <BiLogoGmail size={24} /> <a href={`mailto:${EMAIL}}`}>{EMAIL}</a></div>
    </div>
  )
}

export default Contact
