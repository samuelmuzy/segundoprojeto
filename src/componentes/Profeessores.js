import React from 'react';

export class Profeessores extends React.Component {
    state = {
        professores: [
            { nome: "flavio", idade: "12", id: Math.random() },
            { nome: "lucas", idade: "50", id: Math.random() }
        ],
        nome: "",
        idade: ""
    }

    onChangeNomeP = (event) => {
        this.setState({ nome: event.target.value });
    }

    onChangeIdadeP = (event) => {
        this.setState({ idade: event.target.value });
    }

    onClickBt = () => {
        const { nome, idade } = this.state;
        const id = Math.random();
        const novoProfessor = { nome, idade, id };

        const professores = [...this.state.professores, novoProfessor];

        
        this.setState({ professores, nome: "", idade: ""});
    }
    
    onClickApagar = (id) =>{
        let professor = this.state.professores.filter((prof)=>{
            return prof.id !== id 
        })
        this.setState({professores:professor})
    }

    render() {
        const Listar = this.state.professores.map((professor) => {
            return (
                <div key={professor.id}>
                    <p>{professor.nome}</p>
                    <p>{professor.idade}</p>
                    <button onClick={() => this.onClickApagar(professor.id)}>Apagar</button>
                </div>
            );
        });

        return (
            <>
                <input 
                    name='nomeProf' 
                    onChange={this.onChangeNomeP} 
                    value={this.state.nome} 
                    placeholder="Nome"
                />
                <input 
                    name='idadeProf' 
                    onChange={this.onChangeIdadeP} 
                    value={this.state.idade} 
                    placeholder="Idade"
                />
                <button onClick={this.onClickBt}>Adicionar</button>
                <div>{Listar}</div>
            </>
        );
    }
}
