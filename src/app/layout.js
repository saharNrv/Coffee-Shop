import AOSIniit from '@/utils/aos'
import './globals.css'



export const metadata = {
  title: 'فروشگاه قهوه || Coffee-Set',
  description: 'sahar nourivand coffee project with next.js v.13',
  icons:{
    icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0kJxRVxK6jdAGvscjKveyiYiBhar_gkgg6coAKByqA&s'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" >
      <body >
        <AOSIniit/>
        {children}
        </body>
    </html>
  )
}
