import React from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  const [index, setIndex] = React.useState(0);

  const onNext = (el) => {
    setIndex(index + 1);
    if (index === slides.length - 2 || slides.length === 1) {
      return;
    }
  };

  const onPrev = (el) => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };

  const onRestart = (el) => {
    setIndex(0);
  };

  return (
    <>
      <h1 data-testid="title">{slides[index].title}</h1>
      <p data-testid="text">{slides[index].text}</p>

      <button
        data-testid="button-prev"
        disabled={index === 0 ? true : false}
        onClick={(el) => onPrev(el)}
      >
        Prev
      </button>

      <button
        data-testid="button-next"
        disabled={index === slides.length - 1 ? true : false}
        onClick={(el) => onNext(el)}
      >
        Next
      </button>

      <button
        data-testid="button-restart"
        onClick={(el) => {
          onRestart(el);
        }}
        disabled={index === 0 ? true : false}
      >
        Restart"
      </button>
    </>
  );
};

export default App;
