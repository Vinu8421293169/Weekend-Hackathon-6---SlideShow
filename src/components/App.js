import React from "react";
import "../styles/App.css";

const App = (props) => {
  const [index, setIndex] = React.useState(0);
  const [nextButton, setNextButton] = React.useState(false);
  const [prevButton, setPrevButton] = React.useState(true);

  const onNext = (el) => {
    setIndex(index + 1);
    if (index === props.slides.length - 2) {
      setNextButton(true);
      return;
    }
    setNextButton(false);
    setPrevButton(false);
  };

  const onPrev = (el) => {
    if (index === 0) {
      setPrevButton(true);
      return;
    }
    setIndex(index - 1);
    setPrevButton(false);
    setNextButton(false);
  };

  const onRestart = (el) => {
    setIndex(0);
    setNextButton(false);
    setPrevButton(true);
  };

  return (
    <>
      <h1 data-testid="title">{props.slides[index].title}</h1>
      <p data-testid="text">{props.slides[index].text}</p>

      <button
        data-testid="button-prev"
        disabled={prevButton}
        onClick={(el) => onPrev(el)}
      >
        Prev
      </button>

      <button
        data-testid="button-next"
        disabled={nextButton}
        onClick={(el) => onNext(el)}
      >
        Next
      </button>

      <button
        data-testid="button-restart"
        onClick={(el) => {
          onRestart(el);
        }}
      >
        Restart"
      </button>
    </>
  );
};

export default App;
