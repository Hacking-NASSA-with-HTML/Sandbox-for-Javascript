
class MyText extends React.Component {

    constructor(props) {
        super(props);
        this.state = { bold: false, color: 'white' };
    }

    handleMouseOver() {
        this.setState({ bold: true });
    }

    handleMouseOut() {
        this.setState({ bold: false });
    }

    handleClick() {
        this.setState({ color: (this.state.color == 'darkblue' ? 'white' : 'darkblue') });
    }


    render() {
        var color = this.state.color;
        var bold = this.state.bold ? 'bold' : 'normal';
        return (
            <span style={{ color: color, fontWeight: bold }} onClick={this.handleClick.bind(this)} onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}> {this.props.text} </span>
        );
    }
};

ReactDOM.render(
    <p>
        <MyText text="Hover on me!" />
    </p>,
    document.getElementById('container'))
    ;