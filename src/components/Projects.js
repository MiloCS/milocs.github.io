import { useState, useEffect } from 'react';

function Projects() {
    const [data, setData] = useState([]);

    function loadGithubData() {
        console.log('loading github data')
        fetch(`https://api.github.com/users/MiloCS/repos`).then(response => {
            if(response.ok){
          response.json().then(data => {
            setData(data);
            // data.forEach(repo =>
            //     loadLastCommit(repo.name)
            // );
          });
        } else {
          response.json().then(error => {
            console.log("Failed to fetch user data: " + error.message)
          });
        }
      }).catch(err => {
        console.log("Error in fetching data from server: ", err);
      });
    }

    useEffect(loadGithubData, []);

   
    return (
        <div className='projs panel'>
            <h3>Recent Projects</h3>
            <h5>Pulled from Github</h5>
            {
                data.map(data =>
                    <div className='project' key={data.name}>
                        <a href={data.html_url}>
                            <div className='boxed'>
                            {data.full_name}<div className='boxedDescription'>{data.description}</div><br/>
                            </div>
                        </a>
                    </div>
                )
            }
        </div>
    )
}

export default Projects;