import { Children } from 'react'

const ThreeColumnLayout = ({ children }) => {
  const [title, leftDrawer, mainContent, details] = Children.toArray(children)
  return (
    <div className='wrapper'>
      <header className='header'>{title}</header>
      <section className='content'>
        <div className='columns'>
          <main className='main'>{mainContent}</main>
          <aside className='sidebar-first'>{leftDrawer}</aside>
          <aside className='sidebar-second'>{details}</aside>
        </div>
      </section>
      <footer className='footer'>Footer: Fixed height</footer>
    </div>
  )
}

export default ThreeColumnLayout
