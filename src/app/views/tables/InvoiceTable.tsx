// import ShareIcon from '@material-ui/icons/Share';
// import { Column } from 'material-table';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';
import {
  CardHeader,
  Avatar,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  Paper
  // Button,
  // CardActionArea,
  // CardMedia
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import { invoiceTableStyle } from '../../styles/invoiceTableStyle';
import './InvoiceTable.scss';

export const InvoiceTable = props => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = invoiceTableStyle();

  return (
    <div className="invoices">
      {props &&
        props.invoices.map(invoice => (
          <Card className={classes.card} key={invoice.id}>
            <CardHeader
              classes={{
                title: classes.title
              }}
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {invoice.id}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={`${invoice.created_at}`}
            />
            <CardContent>
              <h2>Total items: {invoice.items.length}</h2>
              <div className={classes.root}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <div className="data--display">
                      <ArrowDownwardIcon />
                      {/* Expense:{' '} */}
                      {invoice.total_spend ? invoice.total_spend : '0'}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="data--display">
                      <ArrowUpwardIcon />
                      {/* Net Sales:{' '} */}
                      {invoice.total_spend ? invoice.total_net_sales : '0'}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="data--display">
                      <AttachMoneyIcon />
                      {/* Profit:{' '} */}
                      {invoice.total_spend ? invoice.total_profit : '0'}
                    </div>
                  </Grid>
                </Grid>
              </div>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                {/* <FavoriteIcon /> */}
              </IconButton>
              <IconButton aria-label="share">{/* <ShareIcon /> */}</IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label={invoice.id}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
    </div>
  );
};
