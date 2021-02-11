var dummy = [
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "1",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "2",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "3",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "4",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "5",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "6",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "7",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "8",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "9",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "10",
  },
];


const initState = { user: null  };
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        user: action.payload,
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
