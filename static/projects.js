"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('github-content');

var Projects = function (_React$Component) {
  _inherits(Projects, _React$Component);

  function Projects(props) {
    _classCallCheck(this, Projects);

    var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

    _this.state = {
      repos: []
    };
    return _this;
  }

  _createClass(Projects, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadGithubData();
    }
  }, {
    key: "loadGithubData",
    value: function loadGithubData() {
      var _this2 = this;

      fetch("https://api.github.com/users/MiloCS/repos").then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            _this2.setState({
              repos: data
            });
            console.log(_this2.state.repos);
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to fetch user data: " + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server: ", err);
      });
    }
  }, {
    key: "sortByLastCommit",
    value: function sortByLastCommit() {}
  }, {
    key: "render",
    value: function render() {
      var repo_display = this.state.repos.map(function (data) {
        return React.createElement(
          "li",
          { key: data.id },
          data.full_name
        );
      });

      return React.createElement(
        "div",
        null,
        repo_display
      );
    }
  }]);

  return Projects;
}(React.Component);

ReactDOM.render(React.createElement(Projects, null), contentNode);