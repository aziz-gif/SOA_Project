import React, {Component} from 'react';
import axios from 'axios';
import './CSS/Form.css';

const customStyle = {
    width: '300px',
    margin: '0 auto'
}

class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            tel: ''
        }
    }

    // lors du changement des données
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.value)
    }

    // Ajout d'un employée (consomation API)
    handleSubmit = (event) => {
        event.preventDefault(); //
        const {nom, prenom, email, tel} = this.state;
        axios.post('http://localhost:4000/employees/addEmployee', {
            nom: nom,
            prenom: prenom,
            email: email,
            tel: tel
        }).then((response) => {
            console.log(response);
            this.props.history.push('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container">
                <form style={customStyle}
                    onSubmit={
                        this.handleSubmit
                }>
                    <label>
                        Nom
                        <input name="nom" type="text"
                            value={
                                this.state.nom
                            }
                            onChange={
                                this.handleChange
                            }
                            className="form-control"/>
                    </label>
                    <br/>
                    <label>
                        Prenom
                        <input name="prenom" type="text"
                            value={
                                this.state.prenom
                            }
                            onChange={
                                this.handleChange
                            }
                            className="form-control"/>
                    </label>
                    <br/>
                    <label>
                        Email
                        <input name="email" type="email"
                            value={
                                this.state.email
                            }
                            onChange={
                                this.handleChange
                            }
                            className="form-control"/>
                    </label>
                    <br/>
                    <label>
                        Telephone
                        <input name="tel" type="number"
                            value={
                                this.state.tel
                            }
                            onChange={
                                this.handleChange
                            }
                            className="form-control"/>
                    </label>
                    <br/>
                    <input type="submit" value="submit" className="btn btn-primary"/>
                </form>
            </div>
        );
    }
}

export default AddEmployee;
