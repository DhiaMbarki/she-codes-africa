const getDonutPrice = (numDonuts) =>
  (Math.round(numDonuts * 1.5 * 100) / 10).toFixed(2);

export default getDonutPrice;
