import './ActivityComponent.module.css'

function ActivityComponent({name, date, description}) {
        return (
                <>
                     <h4 className="activity-name">
                        {name}
                        </h4>   
                        <h6 className="date">{date}</h6>
                        <p className="description">{description}</p>
                </>
        )
}

export default ActivityComponent
