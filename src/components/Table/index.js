import React from 'react';
import API from '../../utils/API';

class Table extends React.Component {

    state = {
        result: []
    };

    componentDidMount() {
        this.getRandomUsers();
    }

    getRandomUsers() {
        API.getRandomUsers()
            .then(res => this.setState({ result: res.data.results }))
    };

    render(){
        return(
            <div>
                Hello!
            </div>
        )
    }
}

export default Table
