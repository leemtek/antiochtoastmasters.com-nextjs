import type { NextPage } from 'next'
import Navbar from './navbar';
import Footer from './footer';

 const Layout: NextPage = ({ children }) => {
  return (
    <>
    <Navbar />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {children}
      </main>

    <Footer />
    </>
  )
}

export default Layout;