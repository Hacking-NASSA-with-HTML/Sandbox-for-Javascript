
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        });
    }


    render() { // invoked when setState is called
        return (
            <div><p>Count: {this.state.count}
                < button type="button" onClick={this.incrementCount.bind(this)} > Click Me </button></p>
            </div>
        );
    }
};

ReactDOM.render(
    <div>
        <Counter />
    </div>,
    document.getElementById('container'))
    ;