import React, { useEffect, createElement } from "react";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
const App = () => {
  const data = [
    {
      id: 1,
      name: "Shohrukh",
      email: "shoxa@gmail.com",
      status: true,
    },
    {
      id: 2,
      name: "John",
      email: "john@example.com",
      status: true,
    },
    {
      id: 3,
      name: "Jane",
      email: "jane@example.com",
      status: false,
    },
    {
      id: 4,
      name: "Mike",
      email: "mike@example.com",
      status: true,
    },
    {
      id: 5,
      name: "Sarah",
      email: "sarah@example.com",
      status: false,
    },
    {
      id: 6,
      name: "David",
      email: "david@example.com",
      status: true,
    },
    {
      id: 7,
      name: "Emily",
      email: "emily@example.com",
      status: false,
    },
    {
      id: 8,
      name: "Alex",
      email: "alex@example.com",
      status: true,
    },
    {
      id: 9,
      name: "Olivia",
      email: "olivia@example.com",
      status: false,
    },
    {
      id: 10,
      name: "Daniel",
      email: "daniel@example.com",
      status: true,
    },
  ];
  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }
  const [users, setUsers] = useState(data);
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const [openE, setOpenE] = useState(false);
  const openModalE = () => setOpenE(true);
  const closeModalE = () => setOpenE(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [edit, setEdit] = useState({});
  useEffect(() => {
    setNameE(edit.name);
    setEmailE(edit.email);
  }, [edit]);
  const [nameE, setNameE] = useState(edit.name);
  const [emailE, setEmailE] = useState(edit.email);
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  function checked(id) {
    setUsers(
      users.map((user) =>
        user.id == id ? { ...user, status: !user.status } : user
      )
    );
  }
  function addUser() {
    let newUser = {
      id: Date.now(),
      name: name,
      email: email,
      status: false,
    };
    setUsers([...users, newUser]);
    closeModal();
    setName("");
    setEmail("");
  }
  function editUser(user) {
    setEdit(user);
    openModalE();
  }
  function putUser() {
    let updateUser = {
      ...edit,
      name: nameE,
      email: emailE,
      status: edit.status,
    };
    setUsers(users.map((user) => (user.id == edit.id ? updateUser : user)));
    closeModalE();
  }
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      {
        className: "w-[85%] py-[10px] m-auto flex items-center justify-between",
      },
      React.createElement(
        "h1",
        { className: "text-[40px]", onClick: handleClick },
        "ToDoList"
      ),
      React.createElement(
        "div",
        { className: "flex items-center gap-[20px]" },
        React.createElement(
          "button",
          {
            className:
              "bg-blue-600 px-[10px] py-[5px] rounded-md text-white font-bold cursor-pointer",
            onClick: openModal,
          },
          "+ Add New"
        ),
        <label class="relative inline-flex items-center cursor-pointer">
          <input class="sr-only peer" value="" type="checkbox" onClick={handleClick} />
          <div class="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
        </label>
      )
    ),
    React.createElement(
      "table",
      { className: "w-[85%] text-center m-auto" },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          { className: "border-b-2 bg-gray-800 " },
          React.createElement(
            "th",
            { className: "w-[50px] text-[#fff] font-bold" },
            "#"
          ),
          React.createElement(
            "th",
            { className: "w-[] text-[#fff] font-bold py-[10px]" },
            "Name"
          ),
          React.createElement(
            "th",
            { className: "w-[] text-[#fff] font-bold" },
            "Status"
          ),
          React.createElement(
            "th",
            { className: "w-[] text-[#fff] font-bold" },
            "Email"
          ),
          React.createElement(
            "th",
            { className: "w-[] text-[#fff] font-bold" },
            "Actions"
          )
        )
      ),
      React.createElement(
        "tbody",
        { className: "" },
        users.map((user, index) =>
          React.createElement(
            "tr",
            { className: "border-b-2 py-[10px] text-center", key: user.id },
            React.createElement(
              "td",
              { className: "w-[50px] text-[20px] font-bold py-[10px]" },
              index + 1
            ),
            React.createElement(
              "td",
              { className: "w-[350px] text-[20px] font-bold" },
              user.name
            ),
            React.createElement(
              "td",
              { className: "w-[100px]" },
              React.createElement(
                "p",
                {
                  className: user.status
                    ? "text-[#fff] text-[20px] font-bold py-[5px] rounded-md shadow-2xl bg-[green]"
                    : "text-[#fff] text-[20px] font-bold py-[5px] rounded-md shadow-2xl bg-[red]",
                },
                user.status ? "Active" : "Inactive"
              )
            ),
            React.createElement(
              "td",
              { className: "w-[350px] text-[20px] font-bold" },
              user.email
            ),
            React.createElement(
              "td",
              { className: "" },
              React.createElement(
                "div",
                { className: "flex w-[90%] m-auto gap-[10px] items-center" },
                React.createElement(
                  "button",
                  {
                    className:
                      "bg-[red] text-[#fff] cursor-pointer px-[10px] py-[5px] rounded-md font-bold",
                    onClick: () => deleteUser(user.id),
                  },
                  "Delete"
                ),
                React.createElement(
                  "button",
                  {
                    className:
                      "bg-yellow-600 cursor-pointer text-[#fff] px-[10px] py-[5px] rounded-md font-bold",
                    onClick: () => editUser(user),
                  },
                  "Edit"
                ),
                React.createElement("input", {
                  className:
                    "w-[20px] h-[20px] rounded-[20px] cursor-pointer appearence-none",
                  type: "checkbox",
                  checked: user.status,
                  onChange: () => checked(user.id),
                })
              )
            )
          )
        )
      )
    ),
    React.createElement(
      "div",
      null,
      open &&
        React.createElement(
          "div",
          {
            className:
              "fixed top-[50%] rounded-[20px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#fff] w-[500px] h-[300px]",
          },
          React.createElement(
            "h1",
            {
              className:
                "text-[20px] font-bold cursor-pointer bg-[red] text-[#fff] text-center",
              onClick: closeModal,
            },
            "Close"
          ),
          React.createElement(
            "div",
            {
              className:
                "w-[70%] py-[20px] flex gap-[30px] flex-col m-auto justify-center",
            },
            React.createElement("input", {
              className: "border-b-[2px] border-black outline-black text-black py-[5px] px-[10px]",
              placeholder: "Name...",
              value: name,
              onChange: (e) => setName(e.target.value),
            }),
            React.createElement("input", {
              className: "border-b-[2px] border-black outline-black text-black py-[5px] px-[10px]",
              placeholder: "Email...",
              value: email,
              onChange: (e) => setEmail(e.target.value),
            }),
            React.createElement(
              "button",
              {
                className:
                  "border-2 w-[40%] cursor-pointer rounded-md text-[#fff] font-bold bg-blue-600 m-auto py-[5px]",
                placeholder: "name...",
                onClick: addUser,
              },
              "Save"
            )
          )
        )
    ),
    React.createElement(
      "div",
      null,
      openE &&
        React.createElement(
          "div",
          {
            className:
              "fixed top-[50%] rounded-[20px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#fff] w-[500px] h-[300px]",
          },
          React.createElement(
            "h1",
            {
              className:
                "text-[20px] font-bold cursor-pointer bg-[red] text-[#fff] text-center",
              onClick: closeModalE,
            },
            "Close"
          ),
          React.createElement(
            "div",
            {
              className:
                "w-[70%] py-[20px] flex gap-[30px] flex-col m-auto justify-center",
            },
            React.createElement("input", {
              className: "border-b-[2px] border-black outline-black text-black py-[5px] px-[10px]",
              placeholder: "Name...",
              value: nameE,
              onChange: (e) => setNameE(e.target.value),
            }),
            React.createElement("input", {
              className: "border-b-[2px] border-black outline-black text-black py-[5px] px-[10px]",
              placeholder: "Email...",
              value: emailE,
              onChange: (e) => setEmailE(e.target.value),
            }),
            React.createElement(
              "button",
              {
                className:
                  "border-2 w-[40%] cursor-pointer rounded-md text-[#fff] font-bold bg-blue-600 m-auto py-[5px]",
                placeholder: "name...",
                onClick: putUser,
              },
              "Save"
            )
          )
        )
    )
  );
};

export default App;
