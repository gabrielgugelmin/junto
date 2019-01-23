import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/main.scss';
import Intro from './Intro';
import Section from './Section';
import Input from './Input';
import Step from './Step';

class App extends Component {

  state = {
    inputStatus: '',
    data: {
      id: "",
      cnpj: "",
      name: ""
    }
  }

  handleSearch = (event) => {
    let cnpj = event.target.value;
    let c = cnpj.replace(new RegExp(/[.,-/\s]/g), '');
    if (c.length === 14) {
      this.getCompany(c);
    }
  }

  getCompany = (value) => {
    fetch(`http://localhost:3001/quote/${value}`, {
      method: 'GET',
      headers: new Headers({
        'Authorization': 'Bearer 23456789',
        'Accept': 'application/json'
      })
    })
      .then(response => {
        if(response.ok) {
          this.setState({
            inputStatus: 'input--success'
          })
          return response.json();
        } else {
          this.setState({
            inputStatus: 'input--error'
          })
          return { name: "Empresa não encontrada" }
        }
      })
      .then (json =>
        this.setState({
          data: json
        })
      )
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            {/* HOME */}
            <Route exact path="/" render={(props) => (
              <Intro
                title="Cotação de seguros"
                subtitle="Solução inovadora da líder de mercado"
                link={{
                  label: "Iniciar",
                  href: "/busca"
                }}
              />
            )} />
            <Route path="/busca" render={(props) => (
              <Section
                photo="https://randomuser.me/api/portraits/women/8.jpg"
                subtitle="#0980"
                title="Nova cotação"
                username="Jennifer Fritz"
                action={this.handleSearch}
                link={{
                  label: "OK"
                }}
              >
                <Step
                  number={1}
                  title="Buscar por CNPJ ou empresa"
                />
                <Input
                  status={this.state.inputStatus}
                  label="CNPJ/Empresa"
                  name="cnpj"
                  onChange={this.handleSearch}
                  type="text"
                />
                <p className="intro__detail">{this.state.data.name}</p>
              </Section>
            )} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
