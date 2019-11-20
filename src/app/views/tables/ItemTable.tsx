import React from 'react';
import {
  CardHeader,
  Avatar,
  Card,
  CardContent,
  Grid,
  CardActions,
  Button
} from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LanguageIcon from '@material-ui/icons/Language';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import NumberFormat from 'react-number-format';

import { itemStyle } from '../../styles/itemStyle';
import './itemTable.scss';
const ItemTable = props => {
  const classes = itemStyle();
  console.log(props);
  return (
    <div className="items">
      {props &&
        props.items.map(item => {
          return (
            <Card className={classes.card} key={item.id}>
              <CardHeader
                classes={{
                  title: classes.title
                }}
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {item.id}
                  </Avatar>
                }
                title={`${item.model}`}
              />
              <CardContent>
                <h3 className="item--subtitle">
                  <span className="item--subtitle--word">Total Cost: </span>
                  {
                    <NumberFormat
                      value={item.total_cost}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$ '}
                    />
                  }
                </h3>
                {/* <div className={classes.root}> */}
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <div className="data--display">
                      <LanguageIcon className="icon--display" />
                      {item.url}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="data--display">
                      <div className="data--display item--display">
                        <ArrowDownwardIcon className="icon--display" />
                        <NumberFormat
                          value={item.cost_price}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'$ '}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="data--display">
                      <LocalGroceryStoreIcon className="icon--display" />
                      {item.order}
                    </div>
                  </Grid>
                </Grid>
                {/* </div> */}
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  Delete Item
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => console.log(item.id)}
                >
                  Show Item
                </Button>
              </CardActions>
            </Card>
          );
        })}
    </div>
  );
};
// interface IProps {
//   items: any;
//   location: any;
//   getItems: Function;
// }

// class ItemTable extends Component<IProps, {}> {
//   componentDidMount() {
//     const invoiceId = this.props.location.pathname.slice(-1);
//     this.props.getItems(invoiceId);
//   }

//   render() {
//     console.log(this.props);
//     return (
//       <div className="items">
//         {this.props &&
//           this.props.items.map(item => {
//             return (
//               <div className="item--card" key={item.id}>
//                 <div className="item--card-infos">
//                   <h2>{item.model}</h2>
//                   <div className="data--display item--display">
//                     <LanguageIcon className="icon--display" />
//                     {item.url}
//                   </div>
//                 </div>
//                 <div className="item--card-infos">
//                   <div className="data--display item--display">
//                     <ArrowDownwardIcon className="icon--display" />
//                     <NumberFormat
//                       value={item.cost_price}
//                       displayType={'text'}
//                       thousandSeparator={true}
//                       prefix={'$ '}
//                     />
//                   </div>
//                   <div className="data--display item--display">
//                     <LocalGroceryStoreIcon className="icon--display" />
//                     {item.order}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   // console.log(state);
//   return {
//     items: state.invoiceReducer.items
//   };
// };

// export default withRouter(
//   connect(
//     mapStateToProps,
//     { getItems }
//   )(ItemTable)
// );
export default ItemTable;
