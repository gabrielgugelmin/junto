import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { MdCheckCircle, MdArrowForward } from 'react-icons/md';
import '../styles/main.scss';
import Intro from './Intro';
import Section from './Section';
import Input from './Input';
import Step from './Step';

class App extends Component {

  state = {
    color: 'blue',
  }

  handleSearch = (event) => {
    let cnpj = event.target.value;
    let c = cnpj.replace(new RegExp(/[.,-/\s]/g), '');
    console.log(c.length, c);
    if (c.length === 14) {
      this.getCompany(c);
    }
  }

  getCompany = (value) => {
    // Set up our HTTP request
    var xhr = new XMLHttpRequest();

    // Setup our listener to process completed requests
    xhr.onload = () => {
      console.log(xhr.status);

      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // What do when the request is successful
        // console.log('success!', xhr);
        // console.log(JSON.parse(xhr.responseText));
        console.log('opa', xhr.responseText);
      } else if (xhr.status === 404) {
        console.log('404 error');
      } else {
        // What do when the request fails
        console.log('The request failed!');
      }

      // Code that should run regardless of the request status
      console.log('This always runs...');
    };


    // Create and send a GET request
    // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
    // The second argument is the endpoint URL
    xhr.open('GET', 'http://localhost:3001/quote/' + value);
    xhr.setRequestHeader('Authorization','Bearer ' + 23456789);
    xhr.send();
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
                  type="text"
                  name="cnpj"
                  label="CNPJ/Empresa"
                  onChange={this.handleSearch}
                />
              </Section>
            )} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
