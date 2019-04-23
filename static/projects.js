'use strict';

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
				_this.loadLastCommit = _this.loadLastCommit.bind(_this);
				_this.loadGithubData = _this.loadGithubData.bind(_this);
				_this.sortByLastCommit = _this.sortByLastCommit.bind(_this);
				_this.loadGithubData();
				return _this;
		}

		// componentWillMount() {
		//  	this.loadGithubData();
		// }

		_createClass(Projects, [{
				key: 'componentDidMount',
				value: function componentDidMount() {
						this.sortByLastCommit();
				}
		}, {
				key: 'sortByLastCommit',
				value: function sortByLastCommit() {
						console.log(this.state.repos);
						var tempArray = this.state.repos;
						console.log(tempArray);
						tempArray.sort(function (a, b) {
								var dateA = a.last_commit;
								var dateB = b.last_commit;
								return dateA - dateB;
						});
						this.setState({ repos: tempArray });
				}
		}, {
				key: 'loadLastCommit',
				value: function loadLastCommit(name) {
						var _this2 = this;

						fetch('https://api.github.com/repos/MiloCS/' + name + '/commits').then(function (response) {
								if (response.ok) {
										response.json().then(function (data) {
												var mydate = new Date(data[0].commit.author.date);
												var temp_repos = _this2.state.repos;
												temp_repos.forEach(function (repo) {
														if (repo.name == name) {
																repo.last_commit = mydate;
																repo.last_commit_string = mydate.getMonth() + 1 + '/' + mydate.getDate() + '/' + mydate.getFullYear() + ' ' + mydate.toLocaleTimeString();
														}
												});
												_this2.setState({
														repos: temp_repos
												});
										});
								} else {
										response.json().then(function (error) {
												console.log("Failed to fetch commit data: " + error.message);
										});
								}
						}).catch(function (err) {
								console.log("Error in fetching data from server: ", err);
						});
				}
		}, {
				key: 'loadGithubData',
				value: function loadGithubData() {
						var _this3 = this;

						console.log('loading github data');
						fetch('https://api.github.com/users/MiloCS/repos').then(function (response) {
								if (response.ok) {
										response.json().then(function (data) {
												_this3.setState({
														repos: data
												});
												data.forEach(function (repo) {
														return _this3.loadLastCommit(repo.name, data);
												});
												console.log(_this3.state.repos);
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
				key: 'render',
				value: function render() {

						var repo_display = this.state.repos.map(function (data) {
								return React.createElement(
										'div',
										{ key: data.id },
										React.createElement(
												'a',
												{ href: data.html_url },
												React.createElement(
														'div',
														{ className: 'boxed' },
														data.full_name,
														React.createElement(
																'div',
																{ className: 'boxedDescription' },
																data.description
														),
														React.createElement('br', null),
														React.createElement(
																'div',
																{ className: 'boxedDate' },
																'Last Commit: ',
																data.last_commit_string
														)
												)
										),
										React.createElement('br', null)
								);
						});

						return React.createElement(
								'div',
								null,
								repo_display
						);
				}
		}]);

		return Projects;
}(React.Component);

ReactDOM.render(React.createElement(Projects, null), contentNode);