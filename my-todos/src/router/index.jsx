import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import Note from "../pages/Note/Note";
import { useState } from "react";
// const list = [
//   {
//     id: 1,
//     todo: "今天xxxxxxxxx",
//     done: true,
//   },
//   {
//     id: 2,
//     todo: "今天xxxxxxxxx",
//     done: false,
//   },
//   {
//     id: 3,
//     todo: "明天xxxxxxxxx",
//     done: false,
//   },
//   {
//     id: 4,
//     todo: "sdsdsdxxxxxxxxx",
//     done: false,
//   },
//   {
//     id: 5,
//     todo: "盛世嫡妃胜多负少发斯蒂芬斯蒂芬",
//     done: false,
//   },
//   {
//     id: 6,
//     todo: "胜利大街分开睡极度空灵废旧塑料肯定放就考试了等级风裂开就",
//     done: false,
//   },
//   {
//     id: 7,
//     todo: "床前明月光",
//     done: false,
//   },
//   {
//     id: 8,
//     todo: "疑是地上霜",
//     done: false,
//   },
//   {
//     id: 9,
//     todo: "举头望明月",
//     done: false,
//   },
// ];

const Routes = () => {
  const [list, setList] = useState([
    {
      id: 1,
      todo: "今天xxxxxxxxx",
      done: true,
    },
    {
      id: 2,
      todo: "今天xxxxxxxxx",
      done: false,
    },
    {
      id: 3,
      todo: "明天xxxxxxxxx",
      done: false,
    },
    {
      id: 4,
      todo: "sdsdsdxxxxxxxxx",
      done: false,
    },
    {
      id: 5,
      todo: "盛世嫡妃胜多负少发斯蒂芬斯蒂芬",
      done: false,
    },
    {
      id: 6,
      todo: "胜利大街分开睡极度空灵废旧塑料肯定放就考试了等级风裂开就",
      done: false,
    },
    {
      id: 7,
      todo: "床前明月光",
      done: false,
    },
    {
      id: 8,
      todo: "疑是地上霜",
      done: false,
    },
    {
      id: 9,
      todo: "举头望明月",
      done: false,
    },
  ]);

  function handleCheckbox(e) {
    let newList = list.concat([]);
    newList.map((todo) => {
      if (todo.id == e.id) {
        todo.done = !e.done;
      }
      return todo;
    });
    setList(newList);
  }

  function handleAddToo(newTodo) {
    console.log(newTodo);
    setList([newTodo].concat(list))
  }

  function handleDelete(id) {
    setList( list.filter((todo) => {
      return todo.id !== id;
    }))
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/todo" />
        </Route>
        <Route exact path="/todo">
          <Home
            list={list}
            handleCheckbox={handleCheckbox}
            handleAddToo={handleAddToo}
            handleDelete={handleDelete}
          ></Home>
        </Route>
        <Route exact path="/note" component={Note} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
