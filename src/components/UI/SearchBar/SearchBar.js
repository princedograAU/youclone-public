import React, { Component } from 'react';
import {connect} from 'react-redux';
import {searchFetchVideos} from '../../../actions';

import Icon from '../Icon/Icon';


const baseURL = window.location.origin + '/assets/icons/sprite.svg#';

export class SearchBar extends Component {

    state = {term: ""};

    onFormSubmit = event => {
        event.preventDefault();
        this.props.searchFetchVideos(this.state.term);
    }

    render() {
        return (
            <div className="searchbar">
                <form className="form" onSubmit={this.onFormSubmit}>
                    <div className="form__field">
                        <input 
                            type="text" 
                            className="form__input" 
                            placeholder="search video"
                            value={this.state.term}
                            onChange={e => this.setState({term: e.target.value})}
                        />
                        <button className="form__button">
                            <Icon baseURL={baseURL} iconName={'icon-search'} width={'2rem'} height={'2rem'} fill={'#999'}/>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}


export default connect(null, {searchFetchVideos})(SearchBar);