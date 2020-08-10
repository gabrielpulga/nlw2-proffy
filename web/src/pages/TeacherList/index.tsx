import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';


function TeacherList() {
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function searchTeachers(e: FormEvent) {
        e.preventDefault();

        console.log('a');

    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select
                        name="subject"
                        label="Dia da semana"
                        value={subject}
                        onChange={e => { setSubject(e.target.value)}}
                        options={[
                            {value: 'Programação', label: 'Programação'},
                            {value: 'Análise de Circuitos Elétricos', label: 'Análise de Circuitos Elétricos'},
                            {value: 'Cálculo Diferencial e Integral', label: 'Cálculo Diferencial e Integral'},
                            {value: 'Eletromagnetismo', label: 'Eletromagnetismo'},
                            {value: 'Eletrônica Digital', label: 'Eletrônica Digital'},
                            {value: 'Propagação de Ondas e Guias', label: 'Propagação de Ondas e Guias'},
                        ]} />
                        <Select
                        name="week_day"
                        label="Matéria"
                        value={week_day}
                        onChange={e => { setWeekDay(e.target.value)}}
                        options={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda-feira'},
                            {value: '2', label: 'Terça-feira'},
                            {value: '3', label: 'Quarta-feira'},
                            {value: '4', label: 'Quinta-feira'},
                            {value: '5', label: 'Sexta-feira'},
                            {value: '6', label: 'Sábado'},
                        ]} />
                    <Input 
                    type="time" 
                    name="time" 
                    label="Hora"
                    value={time}
                    onChange={e => { setTime(e.target.value)
                    }} />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;