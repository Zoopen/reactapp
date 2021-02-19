import "./TodoItem.css";
import sendImg from "../../assets/images/send.png";
import deleteImg from "../../assets/images/delete.png";
import React from "react";
import { Checkbox, Button, SwipeAction, Modal, Toast } from "antd-mobile";
const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;
export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  onChange = (todo) => {
    this.props.handleCheckbox(todo);
  };

  handleSendTo = (e) => {
    e.preventDefault();
    console.log("send");
  };
  handleDelete = (id) => {
    this.props.handleDelete(id)
  }

  render() {
    const { todo } = this.props;
    return (
      <li className={todo.done ? "done" : ""}>
        <SwipeAction
          style={{ backgroundColor: "transparent" }}
          right={[
            {
              text: "sendTo",
              onPress: () => console.log("sendTo"),
              style: {
                color: "transparent",
                marginRight: "0",
                background: `url(${sendImg}) center center /  21px 21px no-repeat`,
                backgroundColor: "#239afc",
              },
            },
            {
              text: "delete",
              onPress: (e) => {
                e.preventDefault();
                return alert("Delete", "Are you sure???", [
                  { text: "Cancel", onPress: () => console.log("cancel") },
                  {
                    text: "Ok",
                    onPress: () => this.handleDelete(todo.id)
                  },
                ]);
              },
              style: {
                color: "transparent",
                background: `url(${deleteImg}) center center /  21px 21px no-repeat`,
                backgroundColor: "#F4333C",
              },
            },
          ]}
          onOpen={() => console.log("global open")}
          onClose={() => console.log("global close")}
        >
          <CheckboxItem
            className="todo-item"
            defaultChecked={todo.done}
            multipleLine={true}
            wrap={true}
            onChange={() => this.onChange(todo)}
          >
            {todo.todo}
          </CheckboxItem>
        </SwipeAction>
      </li>
    );
  }
}

// https://www.jb51.net/article/164601.htm
