var React = require('react');
var Nav = require('Nav');

import { getArtist } from '../api/MusicApi.js';

// var Main = (props) => {
//     return(
//         <div>
//             <div>
//                 <div>
//                     <Nav/>
//                     <p>Main.jsx Rendered</p>
//                     <p></p>
//                     {props.children}
//                 </div>
//             </div>
//         </div>
//     );
// };

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getvalue() {
        return getArtist(this.state.value).then(value => this.setState({url: value}));
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.getvalue();
    }
    render() {
        return (
            <div>
                <Nav/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h3>Name artist:</h3>
                        <input type="text" value={this.state.value} onChange={value => this.handleChange(value)} />
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit} className="button expanded hollow"/>
                </form>
                {this.state.url && <a href={this.state.url} target="blank">Artist</a>}
                
                {this.props.children}
            </div>
        )
    }
}

module.exports = Main;