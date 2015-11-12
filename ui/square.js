'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'Square',

    propTypes: {
        index: React.PropTypes.number.isRequired,
        number: React.PropTypes.number.isRequired,
        onSquareClick: React.PropTypes.func.isRequired
    },

    getDefaultProps: function() {
        return {
            onSquareClick: function() {}
        };
    },

    render: function() {
        var index  = this.props.index,
            number = this.props.number,
            cols = this.props.cols,
            style = {
            left: (index % cols) * 50 + 'px',
            top: Math.floor(index / cols) * 50 + 'px'
        };

        return (<div onClick={this.props.onSquareClick.bind(null, index, number)}
            className="square" style={style}>{number}</div>);
    }
});