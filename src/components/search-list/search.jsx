import { Component } from "react";
import './search.css';
class Searchbox extends Component {
    render() {
        // const { monsters } = this.props;
        return (
            <input
                className={`search-box ${this.props.className}`}
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler} />

        );
    }
}

export default Searchbox;
