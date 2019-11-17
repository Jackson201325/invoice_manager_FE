import React, { Component } from 'react';
import ItemCard from '../cards/Item';
import { connect } from 'react-redux';
import { getItems } from '../../redux/Invoice/actions';
import { withRouter } from 'react-router-dom';

interface IProps {
  items: any;
  location: any;
  getItems: Function;
}

class ItemTable extends Component<IProps, {}> {
  componentDidMount() {
    const invoiceId = this.props.location.pathname.slice(-1);
    this.props.getItems(invoiceId);
  }

  render() {
    console.log(this.props);
    return (
      <div className="items">
        <h1>This is Items</h1>
        {this.props &&
          this.props.items.map(item => {
            return <ItemCard item={item} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    items: state.invoiceReducer.items
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getItems }
  )(ItemTable)
);
