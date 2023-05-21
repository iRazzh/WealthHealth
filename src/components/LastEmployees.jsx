/**
 * Will retrieve the last added employees 
 * @param {*} firstName = firstname of the employee
 * @param {*} lastName = lastname of the employee
 * @param {*} department = Membership of a company department
 * @param {*} zipCode = zip code of the employee
 * @returns 'LastEmployees' component
 */
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