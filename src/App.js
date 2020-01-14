import React from 'react';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';

function App() {
  return (
    <div className="App">

      <CounterTwo  
        render ={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
        />
        <CounterTwo  
        render ={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
        />
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn)=> isLoggedIn? 'Sahil': 'Guest'} /> */}
    </div>
  );
}

export default App;






























 {/*<NameList/> <Stylesheet primary={true}/> <FormsComponent /> <LifecycleA></LifecycleA>*/}
    {/*<UserGreeting/>*/}
    {/*<ParentComponent/>*/}
    {/*<EventBind/>*/}
    {/*<FunctionalClick/>*/}
    {/*<ClassClick/>*/}
      {/*<Greet name="Virat" idolize="me"><p>this is children prop</p></Greet>
      <Greet name="Rohit" idolize="Smith"><button class="btn">
              Does nothing <span class="badge badge-primary"></span>
      </button></Greet>
      <Greet name="Babar" idolize="no one"/>
      <Welcome name="Virat" idolize="me"/>
  <Welcome name="Rohit" idolize="Smith"/>
      <Welcome name="Babar" idolize="no one"/> 
      <Message/>
  <Counter/>  <Table/> <ParentComp></ParentComp>
  <ErrorBoundary><Hero heroName="Superman"></Hero></ErrorBoundary>
    <ErrorBoundary><Hero heroName="Batman"></Hero></ErrorBoundary>
    <ErrorBoundary><Hero heroName="Joker"></Hero></ErrorBoundary>  
*/} 

  // import Greet  from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionalClick from "./components/FunctionalClick";
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList'
// import Stylesheet from './components/Stylesheet'
// import FormsComponent from './components/FormsComponent'
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import PureComp from './components/PureComp';
// import RegularComp from './components/RegularComp';
// import ParentComp from './components/ParentComp'; 
// import Hero from './components/Hero'
//import ErrorBoundary from './components/ErrorBoundary'
 