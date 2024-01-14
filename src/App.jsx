import {
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiMailSend,
} from 'react-icons/bi'
import { Button } from './Components/Button'
import { LinkSocial } from './Components/LinkSocial'

export default function App() {
  return (
    <div className="flex w-card flex-col items-center space-y-6">
      <img
        src="https://github.com/diogo-kappaun.png"
        className="w-img rounded-full shadow-lg"
        alt="Diogo Kappaun"
      />
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-center text-cxl font-medium">Diogo Kappaun</h1>
        <p className="text-csm font-medium">Web developer - Frontend</p>
      </div>
      <Button href="mailto:diogohkappaun@gmail.com">
        Me envie um Email <BiMailSend className="h-5 w-5" />
      </Button>
      <div className="flex gap-2">
        <LinkSocial href="https://www.instagram.com/eu.diogokappaun/">
          <BiLogoInstagram className="h-8 w-8" />
        </LinkSocial>
        <LinkSocial href="https://www.linkedin.com/in/diogo-kappaun/">
          <BiLogoLinkedinSquare className="h-8 w-8" />
        </LinkSocial>
        <LinkSocial href="https://github.com/diogo-kappaun">
          <BiLogoGithub className="h-8 w-8" />
        </LinkSocial>
      </div>
    </div>
  )
}
