import React from 'react';
import API from '../../utils/API';

class Table extends React.Component {

    state = {
        result: [],
        filteredInfo: []
    };

    componentDidMount() {
        this.getRandomUsers();
    }

    getRandomUsers() {
        API.getRandomUsers()
            .then(res => this.setState({ result: res.data.results }))
            .then(res => this.setState({ filteredInfo: this.state.result}))
    };

    handleInput = event => {
        const value = event.target.value;
        console.log(value);
        const filtered = this.state.result.filter(query => query.name.first.includes(value) || query.name.last.includes(value))
        this.setState({ filteredInfo: filtered })
    }

    sortInfo = event => {
        event.preventDefault();
        console.log(event.target.textContent)
        const sorted = this.state.result.sort(function(a, b) {
            var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
            });
        console.log(sorted)
        this.setState({ filteredInfo: sorted})
    }
    render(){
        return(
            <>
            <form className= "form-inline justify-content-center">
                <input className= "form-control mr-sm-2"
                onChange={this.handleInput}
                type="search"
                placeholder="Search Our Team!"
                />
            </form>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    <th scope="col" onClick={this.sortInfo}>First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.filteredInfo.map(element => (
                    <tr>
                        <td><img src={element.picture.thumbnail} /></td>
                        <td>{element.name.first}</td>
                        <td>{element.name.last}</td>
                        <td>{element.email}</td>
                        <td>{element.phone}</td>
                    </tr>
                )
                )}
                </tbody>
            </table>
            </>
        )
    }
}

export default Table
