import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemAction";
//import { v1 as uuid } from "uuid";
import PropTypes from "prop-types";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      //id: uuid(),
      name: this.state.name,
    };

    //Add item via addItem action
    this.props.addItem(newItem);

    //Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color="dark"
            style={{ marginBlock: "2rem" }}
            onClick={this.toggle}
          >
            Add Item
          </Button>
        ) : (
          <h4 className="mb-3 ml-4">Please login to manage items</h4>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To To-Do-List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add list item"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addItem })(ItemModal);