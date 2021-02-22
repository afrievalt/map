import { Children } from 'react'

const ThreeColumnLayout = ({ children }) => {
  const [title, leftSidebar, mainContent, rightSidebar] = Children.toArray(children)
  return (
    <div className='wrapper'>
      <header className='header'>{title}</header>
      <section className='content'>
        <div className='columns'>
          <main className='main'>{mainContent}</main>
          <aside className='sidebar-first'>{leftSidebar}</aside>
          {rightSidebar}
        </div>
      </section>
      <footer className='footer'>Footer: Fixed height</footer>
    </div>
  )
}

export default ThreeColumnLayout
