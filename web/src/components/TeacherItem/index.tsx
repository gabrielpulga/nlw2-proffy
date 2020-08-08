import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/61952539?s=460&v=4" alt="Gabriel Pulga"/>
            <div>
                <strong>Gabriel Pulga</strong>
                <span>Eletromagnetismo</span>
            </div>
            </header>
            <p>
                Estudante de engenharia, entusiasta de software.
                <br/><br/>
                Disponível para começar a dar aulas imediatamente.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
                </button>
            </footer>
            </article>
    );
}

export default TeacherItem;