import React from  'react'

export class ListUsuarios extends React.Component{
    
        state={
            nome:'',
            email:'',       
            cvv:''
        }
        onChanNome = (event) =>{
            this.setState({nome: event.target.value});
        }
        onChanEmail = (event) =>{
            this.setState({email: event.target.value});
        }
        onChanCvv = (event) =>{
            this.setState({cvv: event.target.value});
        }
        onClickBt = () =>{
            this.setState({nome:"",email:"",cvv:""})
        }
        render(){
            return(
                <>
                    <input name='nome' onChange={this.onChanNome} value={this.state.nome}/>
                    <input name='email' onChange={this.onChanEmail} value={this.state.email}/>
                    <input name='cvv' onChange={this.onChanCvv} value={this.state.cvv}/>

                    <button onClick={this.onClickBt}>limpar</button>
                </>
            )
    }
}