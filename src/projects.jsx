
var contentNode = document.getElementById('github-content');

class Projects extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		repos: []
    	};
    	this.loadLastCommit = this.loadLastCommit.bind(this);
    	this.loadGithubData = this.loadGithubData.bind(this);
    	this.sortByLastCommit = this.sortByLastCommit.bind(this);
    	this.loadGithubData();
  	}

  	// componentWillMount() {
   //  	this.loadGithubData();
  	// }

  	componentDidMount() {
  		this.sortByLastCommit();
  	}

  	sortByLastCommit() {
  		console.log(this.state.repos)
      let tempArray = this.state.repos;
      console.log(tempArray)
      tempArray.sort(function(a, b) {
	      let dateA = a.last_commit;
	      let dateB = b.last_commit;
	      return dateA - dateB;
	  });
      this.setState({repos: tempArray});
  	}

  	fetchImageURL(name) {
  		let api_key = 'AIzaSyCqXbcfOm1y_EjAT-frCCIolDm1wJodRng'
  		
  	}

  	loadLastCommit(name) {
  		fetch(`https://api.github.com/repos/MiloCS/${name}/commits`).then(response => {
	      if(response.ok){
	        response.json().then(data => {
	        	let mydate = new Date(data[0].commit.author.date)
	        	let temp_repos = this.state.repos
	        	temp_repos.forEach(repo => {
	        		if (repo.name == name) {
	        			repo.last_commit = mydate
	        			repo.last_commit_string = (mydate.getMonth() + 1) + '/' + mydate.getDate() + '/' +  mydate.getFullYear() + ' ' + mydate.toLocaleTimeString(); 
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
	          data.forEach(repo =>
	          	this.loadLastCommit(repo.name, data)
	          );
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

  	render() {

  		const repo_display = this.state.repos.map(data =>
  			<div className='list-group-item list-group-item-light' key={data.id}>
  			<a href={data.html_url}>
  			<div className='boxed'>
  			{data.full_name}<div className='boxedDescription'>{data.description}</div><br/><div className='boxedDate'>Last Commit: {data.last_commit_string}</div>
  			</div>
  			</a>
  			<hr/>
  			</div>
  		);

  		return (<div className='list-group'>
  			{repo_display}
  		</div>);
  	}

}

ReactDOM.render(<Projects />, contentNode);