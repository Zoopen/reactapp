import TodoList from "../../components/TodoList/TodoList";
import "./Home.css";
import img from "../../assets/images/plus.png";
import recordImg from "../../assets/images/record.png";
import clockImg from "../../assets/images/clock.png";
import locationImg from "../../assets/images/location.png";
import wellImg from "../../assets/images/well.png";
import { useState } from "react";
import { Button, TextareaItem, Modal } from "antd-mobile";

function Home(props) {
  const { list, handleCheckbox, handleAddToo, handleDelete } = props;
  const [modal, setModal] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const unfinished = [];
  const finished = [];

  list.forEach((todo) => {
    if (todo.done) {
      finished.push(todo);
    } else {
      unfinished.push(todo);
    }
  });

  function showModal() {
    return function (e) {
      e.preventDefault(); // 修复 Android 上点击穿透
      setModal(true);
    };
  }
  function onClose() {
    return function () {
      setModal(false);
    };
  }

  function handelChange(val) {
    setNewTodo(val);
  }

  function handelSave() {
    console.log("好家伙", newTodo);
    var todo = {
      id: Math.floor(Math.random() * 10000),
      todo: newTodo,
      done: false,
    };
    handleAddToo(todo);
    setModal(false);
    setNewTodo("");
  }

  return (
    <div className="wrapper">
      <form className="list-wrapper">
        <TodoList
          handleCheckbox={handleCheckbox}
          handleDelete={handleDelete}
          unfinished={unfinished}
          finished={finished}
        />

        <Button
          className="addTodo"
          type="primary"
          inline={true}
          style={{ position: "fixed" }}
          icon={
            <div
              style={{
                width: "22px",
                height: "22px",
                marginRight: "0",
                background: `url(${img}) center center /  21px 21px no-repeat`,
              }}
            />
          }
          onClick={showModal("modal")}
        ></Button>
      </form>
      <Modal
        className="my-modal"
        popup
        visible={modal}
        onClose={onClose("modal")}
        animationType="slide-up"
        afterClose={() => {
          console.log("afterClose");
        }}
      >
        <TextareaItem
          className="my-textarea"
          autoHeight
          placeholder="代办事项"
          value={newTodo}
          onChange={handelChange}
        />
        <div className="tool-btn">
          <div className="left-btn">
            <Button
              icon={
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    marginRight: "0",
                    background: `url(${recordImg}) center center /  30px 30px no-repeat`,
                  }}
                />
              }
            ></Button>
            <Button
              icon={
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    marginRight: "0",
                    background: `url(${clockImg}) center center /  30px 30px no-repeat`,
                  }}
                />
              }
            ></Button>
            <Button
              icon={
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    marginRight: "0",
                    background: `url(${locationImg}) center center /  30px 30px no-repeat`,
                  }}
                />
              }
            ></Button>
            <Button
              icon={
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    marginRight: "0",
                    background: `url(${wellImg}) center center /  30px 30px no-repeat`,
                  }}
                />
              }
            ></Button>
          </div>
          <Button className="save" type="primary" onClick={handelSave}>
            保存
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
