var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        React Music App
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link">Music</IndexLink>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active-link">About</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by Quang Truong
                    </li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Nav;