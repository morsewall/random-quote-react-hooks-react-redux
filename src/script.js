"use strict";

//defining an array for the quotes
const quotes = [
  {
    quoteText:
      '"Many of you appear concerned that we are wasting valuable lesson time, but I assure you we will go back to school the moment you start listening to science and give us a future."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"I was fortunate to be born in a time and place where everyone told us to dream big. I could become whatever I wanted to. I could live wherever I wanted to. People like me had everything we needed and more. Things our grandparents could not even dream of. We had everything we could ever wish for and yet now we may have nothing. Now we probably don’t even have a future any more."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"That future was sold so that a small number of people could make unimaginable amounts of money. It was stolen from us every time you said that the sky was the limit, and that you only live once. You lied to us. You gave us false hope. You told us that the future was something to look forward to."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      "\"But perhaps the most dangerous misconception about the climate crisis is that we have to 'lower' our emissions. Because that is far from enough. ... The fact that we are speaking of 'lowering' instead of 'stopping' emissions is perhaps the greatest force behind the continuing business as usual.\"",
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      "\"We should no longer only ask: 'Have we got enough money to go through with this?' but also: 'Have we got enough of the carbon budget to spare to go through with this?' That should and must become the centre of our new currency.\"",
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"This ongoing irresponsible behavior will no doubt be remembered in history as one of the greatest failures of humankind."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"You don’t listen to the science because you are only interested in solutions that will enable you to carry on like before. Like now. And those answers don’t exist any more. Because you did not act in time."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"Sometimes we just simply have to find a way. The moment we decide to fulfill something, we can do anything. And I’m sure that the moment we start behaving as if we were in an emergency, we can avoid climate and ecological catastrophe. Humans are very adaptable: we can still fix this. But the opportunity to do so will not last for long. We must start today. We have no more excuses."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"We children are doing this to wake the adults up. We children are doing this for you to put your differences aside and start acting as you would in a crisis. We children are doing this because we want our hopes and dreams back."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"Until you start focusing on what needs to be done rather than what is politically possible, there is no hope. We can’t solve a crisis without treating it as a crisis. We need to keep the fossil fuels in the ground, and we need to focus on equity. And if solutions within the system are so impossible to find, maybe we should change the system itself."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      'Our house is falling apart and our leaders need to start acting accordingly because at the moment they are not. If our house was falling apart our leaders wouldn’t go on like we do today. If our house was falling apart, you wouldn’t hold three emergency Brexit summits and no emergency summit regarding the breakdown of the climate and the environment."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"If you still say that we are wasting valuable lesson time, then let me remind you that our political leaders have wasted decades through denial and inaction."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"Some people, some companies, some decision-makers in particular, have known exactly what priceless values they have been sacrificing to continue making unimaginable amounts of money. And I think many of you here today belong to that group of people."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"It is still not too late to act. It will take a far-reaching vision, it will take courage, it will take fierce, fierce determination to act now, to lay the foundations where we may not know all the details about how to shape the ceiling. In other words, it will take cathedral thinking. I ask you to please wake up and make changes required possible."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"Either we choose to go on as a civilisation or we don\'t ... There are no grey areas when it comes to survival."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText: '"I don\'t want you to be hopeful, I want you to panic."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"Our house is on fire. I am here to say, our house is on fire."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"I don’t want your hope. I don’t want you to be hopeful. I want you to panic. I want you to feel the fear I feel every day. And then I want you to act."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"I want you to act as you would in a crisis. I want you to act as if our house is on fire. Because it is."',
    quoteAuthor: "@GretaThunberg"
  }
];

//Redux:

// The UMD build makes Redux available as a window.Redux global variable
const Redux = window.Redux;

//defining initial state
const initialState = {
  data: quotes[Math.floor(Math.random() * quotes.length)]
};

//defining an action type
const NEW_QUOTE = "NEW_QUOTE";

//defining an action creator, which creates the action to select a new quote.  The action creator is a function that returns an action (object that contains information about an action-event that has occurred). It creates the action to add a new quote.
const newQuoteActionCreator = quoteObject => {
  return {
    type: NEW_QUOTE,
    payload: quoteObject
  };
};

//creating a reducer that handles the state for quotes. The redux state is initially set to an empty object. The reducer adds a quote to the object of quotes held in state or return the current state.
const getNextQuoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_QUOTE:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

//creating the Redux store and passing the reducer to it
// const store = Redux.createStore(getNextQuoteReducer);

const store = Redux.createStore(
  getNextQuoteReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //second argument is to add Chrome's Redux DevTool's extension https://github.com/zalmoxisus/redux-devtools-extension that allows me to go back in the state history

// React:

//creating a reusable quote box to handle a potential "future case" in which I want to add more screens/routes to the app and use the same quote box, but with different text(data).
//I'm getting author and quote values from App component via props.
const QuoteBox = ({ text, author }) => {
  //destructuring
  return (
    <React.Fragment>
      <div className="quotable-square">
        <div className="content">
          <div id="text">{text}</div>
          <div id="author" className="author">
            {author}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

//creating a reusable button to handle a potential "future case" in which I want to have two buttons, instead of having one New Quote button. For instance: one for Next Quote and one for Previous Quote.
const Button = ({ onClick, title }) => {
  return (
    <button className="new-quote" onClick={onClick}>
      {title}
    </button>
  );
};

//creating a reusable share button to handle a potential "future case" in which I want to add additional social share buttons. These buttons would then share the same styling but different props.
const TwitterShare = ({ link }) => {
  return (
    <React.Fragment>
      <button className="tweet-quote">
        <a
          href={link}
          target="_blank"
          title="Tweet this on Twitter"
          id="tweet-quote"
        >
          <i className="fab fa-twitter"></i>Tweet Quote
        </a>
      </button>
    </React.Fragment>
  );
};

// defining the function component. Redux state and dispatch are passed to the component as props
const App = props => {
  //making the machine tweet
  let linkToRef;

  const twitterLink = React.useMemo(() => {
    let quoteTextElem = props.currentQuote.data.quoteText;
    let quoteAuthorElem = " - " + props.currentQuote.data.quoteAuthor;
    let contentQuote = quoteTextElem + quoteAuthorElem;
    if (contentQuote.length > 280) {
      let charCountAuthor = quoteAuthorElem.length;
      const extraStylingChar = "..." + '"';
      let extraCharCount = extraStylingChar.length;
      let subString =
        quoteTextElem.substring(0, 280 - extraCharCount - charCountAuthor) +
        extraStylingChar +
        quoteAuthorElem;
      //generate url available for Twitter intent and inject url on HTML
      linkToRef = "https://twitter.com/intent/tweet?text=" + subString;
    } else {
      //generate url available for Twitter intent and inject url on HTML
      linkToRef = "https://twitter.com/intent/tweet?text=" + contentQuote;
    }
    return linkToRef;
  }, [props.currentQuote.data.quoteText]);

  const random = array => {
    return Math.floor(Math.random() * array.length);
  };

  const randomQuoteFunction = array => {
    return array[random(array)];
  };

  //defining a function to (ultimately) update the Redux state with a new quote. Passing a randomly selected quote via props (?). Dispatching selectNewQuote() from props and passing in the randomly selected new quote as an argument
  const chosenRandomQuoteToState = () => {
    //selecting a random quote from the array
    let chosenQuote = randomQuoteFunction(quotes);
    props.selectNewQuote(chosenQuote);
  };

  //the component returns JSX, and as per code snippet below, JSX clearly represents HTML, composing the UI. As a React component can only return one single element, I’m using <React.Fragment> to add a parent tag to my JSX elements without adding an extra node to the DOM.
  return (
    <React.Fragment>
      <div className="container">
        <div id="quote-box">
          <QuoteBox
            text={props.currentQuote.data.quoteText}
            author={props.currentQuote.data.quoteAuthor}
          />{" "}
          {/* passing data via props to QuoteBox component */}
          <div className="actions">
            <Button
              id="new-quote"
              title="Get New Quote"
              onClick={chosenRandomQuoteToState}
            />
            <TwitterShare link={linkToRef} />
          </div>
        </div>
      </div>
      <footer>
        <ul className="footer-options">
          <li className="footer-link">
            <a href="#" className="footer-linktext">
              Legal
            </a>
          </li>
          <li className="footer-link">
            <a href="#" className="footer-linktext">
              Contact Us
            </a>
          </li>
        </ul>
        <span>© 2019 Developed by Pat. All Rights Reserved.</span>
      </footer>
    </React.Fragment>
  );
};

// React Redux:

//using Provider to connect redux to react. Allows me to provide state and dispatch to React components. Setting React Redux Provider to a constant.
const Provider = ReactRedux.Provider;

//mapping state to props. Allows me to specify exactly what pieces of the state should the React component have access to. Taking state as argument, it returns an object which maps that state to specific property names. These properties will become accessible to the React component via props
const mapStateToProps = state => {
  return {
    currentQuote: state
  };
};

//mapping dispatch to props. Specifying what actions should the React component have access to. Allows me to specify which action creators I need to be able to dispatch. It is used to provide specific action creators to the React components so they can dispatch actions against the Redux store. It returns an object that maps dispatch actions to property names, which become component props. As opposed to mapStateToProps (that returns a piece of state), here each property returns a function that calls dispatch with an action creator and any relevant action data. I have access to this dispatch because it's passed in to mapDispatchToProps()as a parameter when I define the function, just like I've passed state to mapStateToProps(). The object should have a property selectNewQuote set to the dispatch function, which takes a parameter for the new quote to add when it dispatches newQuoteActionCreator().
const mapDispatchToProps = dispatch => {
  return {
    selectNewQuote: function(quoteToBeNewQuote) {
      dispatch(newQuoteActionCreator(quoteToBeNewQuote));
    }
  };
};

//setting React Redux connect to a constant.
const connect = ReactRedux.connect;

//connecting Redux to React. Mapping state and dispatch to the props of the React component. Container then represents the connected component.
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

//defining the Provider wrapper. Allows me to access the Redux store and dispatch functions. Finalizing connecting the Redux store with the React component, thereby extracting the local state into the Redux store. Provider wraps the React app and allows me to access the Redux store and dispatch actions throughout the React component. The Redux store is passed as a prop to the Provider.
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

// React:

//placing JSX into React’s own DOM
ReactDOM.render(<AppWrapper />, document.getElementById("app"));
