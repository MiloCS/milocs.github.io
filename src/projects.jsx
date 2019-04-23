
var contentNode = document.getElementById('github-content');

class Projects extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		repos: []
    	};
    	this.loadLastCommit = this.loadLastCommit.bind(this)
    	this.loadGithubData = this.loadGithubData.bind(this)
  	}

  	componentDidMount() {
    	this.loadGithubData();
    	this.sortByLastCommit();
  	}

  	loadLastCommit(name) {
  		fetch(`https://api.github.com/repos/MiloCS/${name}/commits`).then(response => {
	      if(response.ok){
	        response.json().then(data => {
	        	let mydate = new Date(data[0].commit.author.date)
	        	let temp_repos = this.state.repos
	        	temp_repos.forEach(repo => {
	        		if (repo.name == name) {
	        			repo.last_commit = mydate.toString()
	        		}
	        	});
	        	this.setState({
	        		repos: temp_repos
	        	});
	        });
	      } else {
	        response.json().then(error => {
	          console.log("Failed to fetch commit data: " + error.message)
	        });
	      }
	    }).catch(err => {
	      console.log("Error in fetching data from server: ", err);
	    });
  	}

  	loadGithubData() {
  		console.log('loading github data')
	  	fetch(`https://api.github.com/users/MiloCS/repos`).then(response => {
	      	if(response.ok){
	        response.json().then(data => {
	          this.setState({
	            repos: data
	          });
	          this.state.repos.forEach(repo =>
	          	this.loadLastCommit(repo.name)
	          );
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
    let tempArray = this.state.repos;
    tempArray.sort(function(a, b) {
      a = new Date(a.last_commit);
      b = new Date(b.last_commit);
      return a<b ? -1 : a>b ? 1 : 0;
    });
    this.setState({repos: tempArray});
  }

  	render() {
  		const repo_display = this.state.repos.map(data =>
  			<li className='boxed' key={data.id}>{data.full_name}   Last Commit:{data.last_commit}</li>
  		);

  		return (<div>
  			{repo_display}
  		</div>);
  	}

}

ReactDOM.render(<Projects />, contentNode);