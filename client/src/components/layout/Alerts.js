import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alerts = () => {
    const alertContext = useContext(AlertContext)

    console.log(alertContext.alerts)

    return (
        alertContext.alerts.length > 0 && alertContext.alerts.map(
            alert => (
                <div key={alert.id} className={`alert alert-${alert.type}`}>
                    <p>{alert.msg}</p>
                </div>
            )
        )
    )
}

export default Alerts