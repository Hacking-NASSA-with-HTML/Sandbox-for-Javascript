
class TimesViewed extends React.Component {
    constructor(props) {
        super(props);
        var timesViewed = 0;
        if (localStorage.timesViewed) {
            timesViewed = localStorage.timesViewed;
        }
        timesViewed++;
        this.state = { numViews: timesViewed };
        localStorage.timesViewed = timesViewed;
    }

    render() {
        return <p>This Page was  reloaded {this.state.numViews} times</p>;
    }
}

ReactDOM.render(
    <TimesViewed />,
    document.getElementById('container')
);
