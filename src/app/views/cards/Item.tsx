import React from 'react';
import {
  CardHeader,
  Avatar,
  Card,
  Grid,
  CardContent,
  CardActions,
  Button,
  Typography
} from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { itemStyle } from '../../styles/itemStyle';
import NumberFormat from 'react-number-format';

const ItemCard = props => {
  const classes = itemStyle();
  const { item } = props;

  return (
    <div className="item">
      <Card className={classes.card} key={item.id}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.model}
          </Typography>
          <div className="items--data">
            <p>
              <LanguageIcon /> {item.url}
            </p>
            <p>
              <LanguageIcon />{' '}
              <NumberFormat
                value={item.cost_price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </p>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">
            Delete Invoice
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() =>
              // props.history.push(`/admin/Invoices/${invoice.id}`)
              console.log(item)
            }
          >
            View Invoice console
          </Button>
        </CardActions>
      </Card>
    </div>
  );
  // {/* <div>This is Item: {props.item.model}</div>; */}
};

export default ItemCard;
