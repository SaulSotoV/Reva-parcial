import { NavLink,Outlet } from "react-router-dom"

export const Company = () => (
    <div>
        Company Info
    </div>
)

export const Employee = () => (
    <div>
        Employee Info
    </div>
)

export const AboutPage = () => {
    return (
        <div className="container">
            <h2>About Page</h2>

            <NavLink to={"company"}>Company</NavLink>
            <NavLink to={"employee"}>Employee</NavLink>
            <Outlet />
        </div>
    )
}