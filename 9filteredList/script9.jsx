class FilteredList extends React.Component {

    constructor(props) {
        super(props);
        var allItems = ["anteater", "bear", "cat", "dog", "elephant", "fox"];
        this.state = { initialItems: allItems, currentItems: allItems };
    }

    filterList(input) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.search(input.target.value) !== -1;
        });
        this.setState({ currentItems: updatedList });
    }


    render() {
        return (
            <div className="filter-list">
                <input type="text" id="inputFrom9block" placeholder="Filter" onChange={this.filterList.bind(this)} />
                <List items={this.state.currentItems} />
            </div>
        );
    }
};

class List extends React.Component {
    render() {
        return (
            <ul> { this.props.items.map(function (item) {
                return <li key={item}>{item}</li>
            })}
            </ul>
        )
    }
};

ReactDOM.render(<FilteredList />, document.getElementById('container'));
