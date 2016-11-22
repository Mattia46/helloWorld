import React, { Component } from 'react';

export class Blog extends React.Component {
  test(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
}

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number * 2}</li>
);
//ReactDOM.render (
   //<ul>{listItems}</ul>,
  ////<NumberList />,
  //document.getElementById('number')
//)

const doubled = numbers.map((number) => number * 2);
console.log(doubled);

function ListItem(props) {
  return <li>{props.value} </li>
}

function NumberList(props) {
  const numbers = [1,2,3,4,5]
  const listItems = numbers.map((n) =>
    <ListItem key={n.toString()} value={n} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  )
}
