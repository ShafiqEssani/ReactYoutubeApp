import React, { Component} from 'react';
import '../style/style.css';
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { keyword: ''};
    }

    render() {
    return (
        <div className="search-bar">
            <input 
                value = {this.state.keyword}    
                onChange = { (ev) => this.onInputChange(ev.target.value) }/>
        </div>
    );
    }

    onInputChange(term) {
        this.setState({ keyword: term});
        this.props.onSearch(this.state.keyword);
    }
}

export default SearchBar;