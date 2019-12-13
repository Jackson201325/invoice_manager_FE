import React from 'react';
import { createInvoiceStyle } from '../../styles/createInvoiceStyle';
import { formStyles } from '../../styles/formStyles';
import {
  Typography,
  Card,
  Grid,
  CardContent,
  Button,
  InputLabel,
  Input,
  Theme,
  Backdrop,
  Modal,
  Fade,
  createStyles,
  makeStyles
} from '@material-ui/core';
import { Formik } from 'formik';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      backgroundColor: 'white',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  })
);

export const CreateItem = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes2 = createInvoiceStyle();
  const classes3 = formStyles();

  return (
    <div>
      <Button className={classes2.button} type="button" onClick={handleOpen}>
        Create Item
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container justify="center" className={classes3.root}>
              <Grid item md={12}>
                <Card className={classes3.card}>
                  <div className={classes3.header}>
                    <Typography variant="h4">Item data</Typography>
                  </div>
                  <CardContent>
                    <Formik
                      initialValues={{
                        name: '',
                        model: '',
                        description: '',
                        color: '',
                        company: '',
                        url: '',
                        year: '',
                        cost_price: '',
                        sales_price: '',
                        order: '',
                        total_revenue: '',
                        total_cost: '',
                        profit: '',
                        confirm: '',
                        invoice_id: ''
                      }}
                      onSubmit={(values, actions) => {
                        actions.setSubmitting(true);
                        props
                          .createItem(values)
                          .then(() => actions.setSubmitting(false));
                      }}
                      render={props => (
                        <form
                          className={classes3.form}
                          onSubmit={props.handleSubmit}
                        >
                          <InputLabel htmlFor="name">Name</InputLabel>
                          <Input
                            id="name"
                            name="name"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.name}
                            className={classes3.textField}
                          />
                          {props.errors.name && (
                            <div id="feedback">{props.errors.name}</div>
                          )}

                          <InputLabel htmlFor="model">Model</InputLabel>
                          <Input
                            id="model"
                            name="model"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.model}
                            className={classes3.textField}
                          />

                          {props.errors.model && (
                            <div id="feedback">{props.errors.model}</div>
                          )}

                          <InputLabel htmlFor="description">
                            Description
                          </InputLabel>
                          <Input
                            id="description"
                            name="description"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.description}
                            className={classes3.textField}
                          />

                          {props.errors.description && (
                            <div id="feedback">{props.errors.description}</div>
                          )}

                          <InputLabel htmlFor="color">Color</InputLabel>
                          <Input
                            id="color"
                            name="color"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.color}
                            className={classes3.textField}
                          />

                          {props.errors.color && (
                            <div id="feedback">{props.errors.color}</div>
                          )}

                          <InputLabel htmlFor="company">Company</InputLabel>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.company}
                            className={classes3.textField}
                          />

                          {props.errors.company && (
                            <div id="feedback">{props.errors.company}</div>
                          )}

                          <InputLabel htmlFor="year">Year</InputLabel>
                          <Input
                            id="year"
                            name="year"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.year}
                            className={classes3.textField}
                          />

                          {props.errors.year && (
                            <div id="feedback">{props.errors.year}</div>
                          )}

                          <InputLabel htmlFor="url">URL</InputLabel>
                          <Input
                            id="url"
                            name="url"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.url}
                            className={classes3.textField}
                          />

                          {props.errors.url && (
                            <div id="feedback">{props.errors.url}</div>
                          )}

                          <InputLabel htmlFor="cost_price">
                            Cost Price
                          </InputLabel>
                          <Input
                            id="cost_price"
                            name="cost_price"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.cost_price}
                            className={classes3.textField}
                          />

                          {props.errors.cost_price && (
                            <div id="feedback">{props.errors.cost_price}</div>
                          )}

                          <InputLabel htmlFor="sales_price">
                            Sales Price
                          </InputLabel>
                          <Input
                            id="sales_price"
                            name="sales_price"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.sales_price}
                            className={classes3.textField}
                          />

                          {props.errors.sales_price && (
                            <div id="feedback">{props.errors.sales_price}</div>
                          )}

                          <InputLabel htmlFor="order">Order</InputLabel>
                          <Input
                            id="order"
                            name="order"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.order}
                            className={classes3.textField}
                          />

                          {props.errors.order && (
                            <div id="feedback">{props.errors.order}</div>
                          )}

                          <InputLabel htmlFor="total_revenue">
                            Total Revenue
                          </InputLabel>
                          <Input
                            id="total_revenue"
                            name="total_revenue"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.total_revenue}
                            className={classes3.textField}
                          />

                          {props.errors.total_revenue && (
                            <div id="feedback">
                              {props.errors.total_revenue}
                            </div>
                          )}

                          <Button type="submit" className={classes2.button}>
                            Create Item
                          </Button>
                        </form>
                      )}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
