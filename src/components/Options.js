function Options({ question }) {
  return (
    <div className='options'>
      {question.options.map((option) => (
        <buttoon className='btn btn-option' kye={option}>
          {option}
        </buttoon>
      ))}
    </div>
  );
}

export default Options;
