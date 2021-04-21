import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

const currenDate = format(new Date(), 'EEEEEE, d MMM', {
    locale: ptBR,

})


export function Header() {
    return (
       <header className={styles.headerContainer}>
           <img src="/logo.svg" alt="Podcastr"/>

           <p>O melhor para você ouvir, sempre</p>

           <span>{currenDate}</span>
       </header> 
    );
}