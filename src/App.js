import * as React from 'react';
// import './App.css';

// const welcome = {
//   greeting: 'Hey',
//   title: 'React',
// };

// function getTitle(title) {
//   return title;
// }

// const list = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ];


const App = () =>  {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  // const searchedStories = stories.filter(function (story) {
  //   return story.title.includes(searchTerm);
  // });

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="App">
      {/* <h1>{welcome.greeting} {welcome.title}</h1> */}
      {/* <h1>Hello {getTitle('React')}</h1> */}
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />
  
      <List list={searchedStories} />
    
      </div>
    );
};

//arrow function is more concise and return statements is not needed
const Search = (props) => {

  const { search, onSearch } = props;
  
  // const handleChange = (event) => {
  //   // console.log(event.target.value);
  //   setSearchTerm(event.target.value);

  //   props.onSearch(event);
  // };
 
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input 
        id="search"
        type="text"
        value={search}
        onChange={onSearch}
       />
      {/* <p>
        Searching for <strong>{searchTerm}</strong>.
      </p> */}
    </div>
  );
};


  const List = ({list}) => (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );



  const Item = ({item}) =>  (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  );



export default App;


