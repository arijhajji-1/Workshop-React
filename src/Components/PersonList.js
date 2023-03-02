import React from 'react'; import axios
    from 'axios';

export default class PersonList extends React.Component {
    state =
        {
            ListPersons: []
        }

    componentDidMount() {

        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            const persons = res.data;

            this.setState({ ListPersons: persons });

        })

    }

    render() {

        return (

            <ul> {this.state.ListPersons.map((person, i) =>

                <li key={i}>{person.name}</li>

            )}

            </ul>

        );
    }
}