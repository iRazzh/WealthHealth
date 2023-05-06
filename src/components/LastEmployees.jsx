export default function LastEmployees({ firstName, lastName, department, zipCode }) {
    return(
        <>
            <article>
                <div>
                    <p className="last-employee-firstname">{firstName}</p>
                    <p className="last-employee-lastname">{lastName}</p>
                </div>
                <p className="last-employee-department">{department}</p>
                <p className="last-employee-zip">{zipCode}</p>
            </article>
        </>
    )
}