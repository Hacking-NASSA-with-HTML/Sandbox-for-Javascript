
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { items: [], text: '', id: 0 };
    }

    render() {
        return (
            <div>
                <h3 id='block10thInputHeader'>TO-DO LIST</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input id='inputFrom9block' onChange={this.handleChange} value={this.state.text} />
                    <button>Add</button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.state.text,
            id: this.state.id
        };
        this.setState({
            items: this.state.items.concat(newItem),
            text: '',
            id: this.state.id + 1
        });
    }
}

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { amDone: true };
    }


    handleClick() {
        var doneState = !this.state.amDone;
        this.setState({ amDone: !this.state.amDone });
    }

    render() {
        var line = this.state.amDone ? 'none' : 'line-through';
        return (
            <li key={this.props.id} onClick={this.handleClick.bind(this)} style={{ textDecoration: line }}>{this.props.text}</li>
        );
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(function (item) {
                    return <TodoItem id={item.id} text={item.text} />
                })}
            </ul>
        );
    }
}



ReactDOM.render(
    <TodoApp />,
    document.getElementById('container')
);
