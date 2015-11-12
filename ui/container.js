'use strict';

var React = require('react'),
    _ = require('underscore'),
    Square = require('./square');

module.exports = React.createClass({
    displayName: 'Container',

    propTypes: {
        rows: React.PropTypes.number,
        cols: React.PropTypes.number
    },

    getDefaultProps: function() {
        return {
            rows: 4,
            cols: 4
        };
    },

    getInitialState: function() {
        return {
            squares: this.initSquares() 
        };
    },

    initSquares: function() {
        var targetSquares = this.props.rows * this.props.cols,
            squares = _.range(1, targetSquares);

        //squares.push(null);
        squares.splice(0, 0, null);
        return squares;
    },

    onSquareClick: function(index, number) {
        var options = [
                index - 1, //left
                index + 1, //right
                index - this.props.cols, // top
                index + this.props.cols //bottom
            ],
            targetSquares = this.props.rows * this.props.cols,
            squares = this.state.squares,
            moveTo = _.find(options, function(option) {
                return option >= 0 && option < targetSquares && squares[option] === null;
            });

        if (!isNaN(moveTo)) {
            squares[index] = null;
            squares[moveTo] = number;
            this.setState({
                squares: squares
            });
        }
    },

    createSquare: function(number, index) {
        return number ? 
            (<Square number={number} key={number} index={index} cols={this.props.cols} onSquareClick={this.onSquareClick}/>) 
            : null;
    },

    render: function() {
        var squares = _.map(this.state.squares, this.createSquare),
            style = {
                width: (50 * this.props.cols) + 'px',
                height: (50 * this.props.rows) + 'px'
            };

        return (<div className="container" style={style}>{squares}</div>);
    }
});