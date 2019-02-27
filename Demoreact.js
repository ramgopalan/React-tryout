class Demoreact extends React.Component {
    render(){
        return (
            <div classname="react-first">
            <h1>Welcome to React {this.props.username}</h1>
            <ul>
                <li>Ram</li>
                <li>Hari</li>
                <li>Krishna</li>
            </ul>
            </div>
        );
    }
}