import React, { Component } from 'react';
import { connect } from 'react-redux';

import { translate } from 'react-i18next';

class Checkbox extends Component {
    render(){
        const { label, onClick, genreFilter } = this.props;
        const { t, i18n } = this.props;
        if (genreFilter && genreFilter.length > 0) {
            if (genreFilter.includes(label)) {
                    return (
                        <div className="movies-filters__genders--checkbox">
                            <label className="movies-filters__genders--checkbox-label">
                                <input
                                    className="movies-filters__genders--checkbox-input"
                                    type='checkbox'
                                    value={label}
                                    onClick={onClick}
                                    defaultChecked
                                />
                                <span className="movies-filters__genders--checkbox-span">{label}</span>
                            </label>
                        </div>
                    )
                } else {
                    return (
                        <div className="movies-filters__genders--checkbox">
                            <label className="movies-filters__genders--checkbox-label">
                                <input
                                    className="movies-filters__genders--checkbox-input"
                                    type='checkbox'
                                    value={label}
                                    onClick={onClick}
                                />
                                <span className="movies-filters__genders--checkbox-span">{label}</span>
                            </label>
                        </div>
                    )
                }
    } else {
            return (
                <div className="movies-filters__genders--checkbox">
                    <label className="movies-filters__genders--checkbox-label">
                        <input
                            className="movies-filters__genders--checkbox-input"
                            type='checkbox'
                            value={label}
                            onClick={onClick}
                        />
                        <span className="movies-filters__genders--checkbox-span">{label}</span>
                    </label>
                </div>
            )
        }
    } 
}

function mapStateToProps(state) {
    return {
        genreFilter: state.filters.genreFilter
    }
  }

export default translate('common')(connect(mapStateToProps, null)(Checkbox));

