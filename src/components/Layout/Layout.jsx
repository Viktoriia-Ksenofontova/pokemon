import s from "./style.module.css";

function Layout({ title, urlBg, colorBg, children }) {
  const bgImg = urlBg ? {
    background: `url(${urlBg})  bottom left/cover no-repeat`
  } : colorBg ? { background:`${ colorBg }`}: {};
  
  return (
  <section className={s.root} style={bgImg}>
    <div className={s.wrapper}>
      <article>
        <div className={s.title}>
          {title && <h3>{title}</h3>}
            <span className={s.separator}></span>
        </div>
        <div className={`${s.desc} ${s.full}`}>
          {children}
        </div>
      </article>
    </div>
    </section>
  )
};
export default Layout;