var contentNode = document.getElementById('github-content');

class Projects extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		repos: []
    	};
  	}

  	componentDidMount() {
    	this.loadGithubData();
  	}

  	loadGithubData() {
	  	fetch(`https://api.github.com/users/MiloCS/repos`).then(response => {
	      	if(response.ok){
	        response.json().then(data => {
	          this.setState({
	            repos: data
	          });
	          console.log(this.state.repos)

	        });
	      } else {
	        response.json().then(error => {
	          alert("Failed to fetch user data: " + error.message)
	        });
	      }
	    }).catch(err => {
	      alert("Error in fetching data from server: ", err);
	    });
  	}

  	sortByLastCommit() {
  		
  	}

  	render() {
  		const repo_display = this.state.repos.map(data =>
  			<li key={data.id}>{data.full_name}</li>
  		);

  		return (<div>
  			{repo_display}
  		</div>);
  	}

}

ReactDOM.render(<Projects />, contentNode);