// Code below is from https://www.codeseek.co/suez/cities-slider-react-OjGQza

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var CitiesSlider = (function (_React$Component) {
  _inherits(CitiesSlider, _React$Component);

  function CitiesSlider(props) {
    _classCallCheck(this, CitiesSlider);

    var _this = _possibleConstructorReturn(
      this,
      (CitiesSlider.__proto__ || Object.getPrototypeOf(CitiesSlider)).call(
        this,
        props
      )
    );

    _this.IMAGE_PARTS = 4;

    _this.changeTO = null;
    _this.AUTOCHANGE_TIME = 4000;

    _this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    return _this;
  }

  _createClass(CitiesSlider, [
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.clearTimeout(this.changeTO);
      },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.runAutochangeTO();
        setTimeout(function () {
          _this2.setState({ activeSlide: 0, sliderReady: true });
        }, 0);
      },
    },
    {
      key: "runAutochangeTO",
      value: function runAutochangeTO() {
        var _this3 = this;

        this.changeTO = setTimeout(function () {
          _this3.changeSlides(1);
          _this3.runAutochangeTO();
        }, this.AUTOCHANGE_TIME);
      },
    },
    {
      key: "changeSlides",
      value: function changeSlides(change) {
        window.clearTimeout(this.changeTO);
        var length = this.props.slides.length;

        var prevSlide = this.state.activeSlide;
        var activeSlide = prevSlide + change;
        if (activeSlide < 0) activeSlide = length - 1;
        if (activeSlide >= length) activeSlide = 0;
        this.setState({ activeSlide: activeSlide, prevSlide: prevSlide });
      },
    },
    {
      key: "render",
      value: function render() {
        var _this4 = this;

        var _state = this.state,
          activeSlide = _state.activeSlide,
          prevSlide = _state.prevSlide,
          sliderReady = _state.sliderReady;

        return React.createElement(
          "div",
          { className: classNames("slider", { "s--ready": sliderReady }) },
          React.createElement(
            "div",
            { className: "slider__slides" },
            this.props.slides.map(function (slide, index) {
              return React.createElement(
                "div",
                {
                  className: classNames("slider__slide", {
                    "s--active": activeSlide === index,
                    "s--prev": prevSlide === index,
                  }),
                  key: slide.city,
                },
                React.createElement(
                  "div",
                  { className: "slider__slide-content" },
                  React.createElement(
                    "h2",
                    { className: "section-heading slider__slide-heading" },
                    slide.city.split("").map(function (l, i) {
                      return React.createElement(
                        "span",
                        { className: null, key: i },
                        l
                      );
                    })
                  ),
                  React.createElement(
                    "a",
                    {
                      className: "slider__slide-readmore btn",
                      href: slide.link,
                    },
                    "find out more"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "slider__slide-parts" },
                  []
                    .concat(
                      _toConsumableArray(Array(_this4.IMAGE_PARTS).fill())
                    )
                    .map(function (x, i) {
                      return React.createElement(
                        "div",
                        { className: "slider__slide-part", key: i },
                        React.createElement("div", {
                          className: "slider__slide-part-inner",
                          style: { backgroundImage: "url(" + slide.img + ")" },
                        })
                      );
                    })
                )
              );
            })
          ),
          React.createElement("div", {
            className: "slider__control d-none d-md-block",
            onClick: function onClick() {
              return _this4.changeSlides(-1);
            },
          }),
          React.createElement("div", {
            className:
              "slider__control slider__control--right d-none d-md-block",
            onClick: function onClick() {
              return _this4.changeSlides(1);
            },
          })
        );
      },
    },
  ]);

  return CitiesSlider;
})(React.Component);

var slides = [
  {
    city: "Sydney",
    //Image from https://www.shutterstock.com/image-photo/aerial-view-sydney-australia-drone-shot-1580548351
    img: "assets/images/sydney1.jpg",
    link: "sydney.html",
  },
  {
    city: "Melbourne",
    //Image from: https://pixabay.com/photos/central-station-melbourne-victoria-2661255/
    img: "assets/images/melbourne1.jpg",
    link: "melbourne.html",
  },
  {
    city: "Brisbane",
    //Image from https://www.shutterstock.com/image-photo/brisbane-city-skyline-river-twilight-australia-657755617
    img: "assets/images/brisbane1.jpg",
    link: "brisbane.html",
  },
];

ReactDOM.render(React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#hero-image'));