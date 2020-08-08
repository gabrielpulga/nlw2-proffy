import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                <Select
                        name="subject"
                        label="Dia da semana"
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
                        options={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda-feira'},
                            {value: '2', label: 'Terça-feira'},
                            {value: '3', label: 'Quarta-feira'},
                            {value: '4', label: 'Quinta-feira'},
                            {value: '5', label: 'Sexta-feira'},
                            {value: '6', label: 'Sábado'},
                        ]} />
                    <Input type="time" name="time" label="Hora" />
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