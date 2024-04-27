function numberFormater(number) {
  let newFormattedNumber =
    String(number).length === 4
      ? `${String(number).split("")[0]}.${String(number).slice(1, 2)}K+`
      : String(number).length === 5
      ? `${String(number).slice(0, 2)}.${String(number).slice(2, 3)}K+`
      : String(number).length === 6
      ? `${String(number).slice(0, 3)}K+`
      : String(number).length === 7
      ? `${String(number).split("")[0]}.${String(number).slice(1, 3)}M+`
      : String(number).length === 8
      ? `${String(number).slice(0, 2)}.${String(number).slice(1, 3)}M+`
      : `${number}`;
  return newFormattedNumber;
}

export default numberFormater;
