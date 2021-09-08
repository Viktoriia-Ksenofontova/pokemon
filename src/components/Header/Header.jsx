import s from './style.module.css';

function Header({title, descr}) {
  return (
    <header className={s.root}>
    <div className={s.forest}></div>
      <div className={s.container}>
        {title && <h1>{title}</h1>}
        {descr && <p>{descr}</p>}
    </div>
    </header>
  )
 };
export default Header;
