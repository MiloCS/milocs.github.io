import profile from './images/profile.jpeg'

const aboutText = `
Hi, my name is Milo Cason-Snow. I'm currently a software engineer at Qualtrics,
working on supporting machine learning engineers on a data science team. I graduated
from UMass Amherst with a Master's degree in Computer Science in May 2022, and
before that, graduated from UMass undergrad (my undergrad major was also Computer Science).
I'm mainly interested in machine learning, particularly NLP.
I'm originally from Cambridge, Massachusetts, but I'm now living in Washington, D.C. and working in Northern Virginia.
 `

 const aboutPanel = (
    <div className='panel'>
        <div>
            <h3>About</h3>
            {aboutText}
        </div>
    </div>

 )

const about = (
    <div className="about">
        <div>
            {aboutPanel}
        </div>
    </div>
);

const recentProjects = (
    <div className='panel'>
        <h3>Recent Projects</h3>
    </div>
);

const work = (
    <div className='info'>
        <svg fill-rule="evenodd" clip-rule="evenodd"><path d="M24 24h-22v-24h14v8h8v16zm-16-5h-3v4h3v-4zm5 0h-3v4h3v-4zm8 0h-3v4h3v-4zm-15-5h-2v2h2v-2zm8 0h-2v2h2v-2zm-4 0h-2v2h2v-2zm9 0h-2v2h2v-2zm3 0h-2v2h2v-2zm-16-4h-2v2h2v-2zm8 0h-2v2h2v-2zm-4 0h-2v2h2v-2zm9 0h-2v2h2v-2zm3 0h-2v2h2v-2zm-16-4h-2v2h2v-2zm8 0h-2v2h2v-2zm-4 0h-2v2h2v-2zm-4-4h-2v2h2v-2zm8 0h-2v2h2v-2zm-4 0h-2v2h2v-2z"/></svg>
        &nbsp;&nbsp;Software Engineer @ Qualtrics    
    </div>
)

const gradschool = (
    <div className='info'>
        <svg viewBox="0 0 24 24"><path d="M20 12.875v5.068c0 2.754-5.789 4.057-9 4.057-3.052 0-9-1.392-9-4.057v-6.294l9 4.863 9-3.637zm-8.083-10.875l-12.917 5.75 12 6.5 11-4.417v7.167h2v-8.25l-12.083-6.75zm13.083 20h-4c.578-1 1-2.5 1-4h2c0 1.516.391 2.859 1 4z"/></svg>
        &nbsp;&nbsp;MS in Computer Science from UMass Amherst
    </div>
)

const school = (
    <div className='info'>
        <svg viewBox="0 0 24 24"><path d="M20 12.875v5.068c0 2.754-5.789 4.057-9 4.057-3.052 0-9-1.392-9-4.057v-6.294l9 4.863 9-3.637zm-8.083-10.875l-12.917 5.75 12 6.5 11-4.417v7.167h2v-8.25l-12.083-6.75zm13.083 20h-4c.578-1 1-2.5 1-4h2c0 1.516.391 2.859 1 4z"/></svg>
        &nbsp;&nbsp;BS in Computer Science from UMass Amherst
    </div>
)

const location = (
    <div className='info'>
        <svg fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg>
        &nbsp;&nbsp;Washington, D.C.
    </div>
)

const picPanel = (
    <div className='pic panel'>
        <img className='pic-inline' src={profile} width="200" height="200" alt="profile"></img>
        <div className='pic-inline facts'>
            {work}
            {gradschool}
            {school}
            {location}
        </div>
    </div>
)

function Body() {
    return (
        <div className="body">
            {picPanel}
            {about}
            {/* {recentProjects} */}
        </div>
    );
}

export default Body;