import {FaPodcast} from 'react-icons/fa';
import s from './styles.module.scss';

export default function Header(){
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <FaPodcast />
        <h1>Podcast.</h1>
      </div>
      <div>

        <nav className={s.headerContent}>
          <a href="/" className={s.active}>
            Discover
          </a>
        </nav>
      </div>
    </div>
  );
}