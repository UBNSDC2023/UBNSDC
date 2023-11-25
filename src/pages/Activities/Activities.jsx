import './Activities.css'
import ActivityComponent from './ActivityComponent'

function Activities() {
        return (
                <>
                <div>

                <div className='heading'> Activities and Projects</div>

                    <h2>Upcomign Activites and Projects</h2>  

                    <ActivityComponent  name = "Hello" date="24th Janurary 2023" description="Hello" />

                </div>

                </>
        )
}

export default Activities
